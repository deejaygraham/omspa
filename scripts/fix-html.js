import fs from 'fs-extra';
import path from 'path';
import { globSync } from 'glob';
import { JSDOM } from 'jsdom';
import prettier from 'prettier';

const sourceDir = path.resolve('original', 'strpat_handbook_from_opsma_2e');
const outputDir = path.resolve('original', 'strpat_handbook_fixed');
const htmlFiles = globSync('*.htm*', { cwd: sourceDir, absolute: true }).sort();

await fs.ensureDir(outputDir);

let fixedCount = 0;

const BLOCK_TAGS = new Set([
  'P', 'DIV', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6',
  'UL', 'OL', 'LI', 'TABLE', 'BLOCKQUOTE', 'PRE',
]);

for (const filepath of htmlFiles) {
  const original = await fs.readFile(filepath, 'utf8');

  // The HTML5 parsing algorithm auto-corrects structural problems:
  //   - inline elements (<b>, <i>) that straddle block-level elements
  //   - missing or mismatched closing tags
  //   - improperly nested elements
  const dom = new JSDOM(original);
  const { document, Node } = dom.window;

  // Ensure a charset declaration exists.
  if (!document.querySelector('meta[charset]')) {
    const meta = document.createElement('meta');
    meta.setAttribute('charset', 'utf-8');
    document.head.prepend(meta);
  }

  // Add lang attribute — required by HTML5 spec.
  if (!document.documentElement.getAttribute('lang')) {
    document.documentElement.setAttribute('lang', 'en');
  }

  // Unwrap <b> and <i> elements that contain block-level children.
  // HTML5 forbids block content inside inline elements; these files use <b> and
  // <i> to wrap one or more <p> elements (title + image) as a legacy heading style.
  for (const el of [...document.querySelectorAll('b, i')]) {
    if ([...el.children].some(c => BLOCK_TAGS.has(c.nodeName))) {
      el.replaceWith(...el.childNodes);
    }
  }

  // Convert the page title at the top of <body> to <h1>.
  // After unwrapping, the title appears as a bare <p> (most files) or a <b>
  // wrapping a single <p> with only inline content (rare edge case).
  const firstEl = document.body.firstElementChild;
  if (firstEl?.tagName === 'P') {
    const h1 = document.createElement('h1');
    h1.textContent = firstEl.textContent.trim();
    firstEl.replaceWith(h1);
  } else if (firstEl?.tagName === 'B') {
    const nonEmpty = [...firstEl.childNodes].filter(
      n => !(n.nodeType === Node.TEXT_NODE && n.textContent.trim() === '')
    );
    const paragraphs = nonEmpty.filter(n => n.nodeName === 'P');
    if (nonEmpty.length === 1 && paragraphs.length === 1) {
      const h1 = document.createElement('h1');
      h1.textContent = paragraphs[0].textContent.trim();
      firstEl.replaceWith(h1);
    }
  }

  // Remove empty <b> and <i> tags left behind by structural re-parenting.
  // Match on empty textContent rather than childless, so that <b><a href=""></a></b>
  // remnants (empty anchors inside bold wrappers) are also removed.
  for (const el of document.querySelectorAll('b, i')) {
    if (el.textContent.trim() === '') {
      el.remove();
    }
  }

  // Remove <font> tags, preserving their content.
  for (const font of document.querySelectorAll('font')) {
    font.replaceWith(...font.childNodes);
  }

  // Remove presentational attributes.
  for (const el of document.querySelectorAll('[align]')) {
    el.removeAttribute('align');
  }
  for (const img of document.querySelectorAll('img[border]')) {
    img.removeAttribute('border');
  }

  // Convert <p><b>Title</b></p> or <p><i>Title</i></p> to <h2>Title</h2>.
  // These files use bold or italic paragraphs as section subheadings.
  for (const p of [...document.querySelectorAll('p')]) {
    const nonEmpty = [...p.childNodes].filter(
      n => !(n.nodeType === Node.TEXT_NODE && n.textContent.trim() === '')
    );
    if (nonEmpty.length === 1 && (nonEmpty[0].nodeName === 'B' || nonEmpty[0].nodeName === 'I')) {
      const b = nonEmpty[0];
      const h2 = document.createElement('h2');
      for (const node of [...b.childNodes]) h2.appendChild(node);
      const first = h2.firstChild;
      if (first?.nodeType === Node.TEXT_NODE) first.textContent = first.textContent.trimStart();
      const last = h2.lastChild;
      if (last?.nodeType === Node.TEXT_NODE) last.textContent = last.textContent.trimEnd();
      p.replaceWith(h2);
    }
  }

  // Convert consecutive <p>- item</p> or <p>. item</p> blocks into <ul><li> lists.
  // Items starting with "- - " or ". . " become nested <ul> inside the parent <li>.
  const seenParents = new Set();
  for (const p of [...document.querySelectorAll('p')]) {
    if (!p.textContent.trim().startsWith('- ') && !p.textContent.trim().startsWith('. ')) continue;
    const parent = p.parentElement;
    if (!parent) continue;
    if (seenParents.has(parent)) continue;
    seenParents.add(parent);

    let run = [];
    const flush = () => {
      if (run.length === 0) return;

      // Returns { rawDepth, stripCount } for a paragraph's leading prefix tokens.
      // Each '- ' token is depth 1; each '. ' token is depth 2 (dot sits one level
      // deeper than dash in mixed runs). stripCount is the number of 2-char tokens
      // to remove from the text when building the <li>.
      const parsePrefixes = text => {
        let s = text.trimStart(), stripCount = 0, lastIsDot = false;
        while (s.startsWith('- ') || s.startsWith('. ')) {
          lastIsDot = s.startsWith('. ');
          stripCount++;
          s = s.slice(2);
        }
        return { rawDepth: stripCount + (lastIsDot ? 1 : 0), stripCount };
      };

      const parsed = run.map(rp => ({ ...parsePrefixes(rp.textContent), rp }));
      const minRaw = Math.min(...parsed.map(i => i.rawDepth));
      // Normalise so the shallowest item is always depth 1.
      // This makes standalone '. ' lists render as top-level rather than orphaned depth-2.
      const items = parsed.map(i => ({ ...i, depth: i.rawDepth - minRaw + 1 }));

      const buildList = (start, end) => {
        const ul = document.createElement('ul');
        ul.appendChild(document.createTextNode('\n'));
        let i = start;
        while (i < end) {
          const { depth, stripCount, rp } = items[i];
          const li = document.createElement('li');
          for (const node of [...rp.childNodes]) li.appendChild(node.cloneNode(true));
          const first = li.firstChild;
          if (first?.nodeType === Node.TEXT_NODE) {
            let s = first.textContent.trimStart();
            for (let d = 0; d < stripCount; d++) s = s.slice(2);
            first.textContent = s;
          }
          const last = li.lastChild;
          if (last?.nodeType === Node.TEXT_NODE) last.textContent = last.textContent.trimEnd();
          let j = i + 1;
          while (j < end && items[j].depth > depth) j++;
          if (j > i + 1) li.appendChild(buildList(i + 1, j));
          ul.appendChild(li);
          ul.appendChild(document.createTextNode('\n'));
          i = j;
        }
        return ul;
      };

      run[0].replaceWith(buildList(0, items.length));
      for (let i = 1; i < run.length; i++) run[i].remove();
      run = [];
    };

    for (const child of [...parent.children]) {
      if (child.tagName === 'P' && (child.textContent.trim().startsWith('- ') || child.textContent.trim().startsWith('. '))) {
        run.push(child);
      } else {
        flush();
      }
    }
    flush();
  }

  // Serialise back to a well-formed HTML string.
  let serialized = dom.serialize();

  serialized = serialized.replace(/<\/h1>(?!\n)/g, '</h1>\n');
  serialized = serialized.replace(/<\/h2>(?!\n)/g, '</h2>\n');
  serialized = serialized.replace(/\n*<ul>/g, '\n\n<ul>');
  // Strip trailing whitespace from every line.
  serialized = serialized.replace(/[ \t]+$/gm, '');

  // Prepend DOCTYPE if it was absent — required for standards mode.
  const withDoctype = original.trimStart().startsWith('<!DOCTYPE')
    ? serialized
    : `<!DOCTYPE html>\n${serialized}`;

  const fixed = await prettier.format(withDoctype, { parser: 'html', printWidth: 100 });

  const outPath = path.join(outputDir, path.basename(filepath));
  await fs.writeFile(outPath, fixed, 'utf8');

  if (fixed !== original) {
    fixedCount++;
    console.log(`  fixed: ${path.basename(filepath)}`);
  } else {
    console.log(`  copied: ${path.basename(filepath)}`);
  }
}

console.log(`\nDone — fixed ${fixedCount} of ${htmlFiles.length} files → ${outputDir}`);
