import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pagesDir = path.join(__dirname, '../src/pages');
const dataDir = path.join(__dirname, '../src/_data');

function decodeEntities(str) {
  return str
    .replace(/&gt;?/g, '>')
    .replace(/&lt;?/g, '<')
    .replace(/&amp;?/g, '&')
    .replace(/&quot;?/g, '"');
}

function parseTags(tagString) {
  // "establishing responsibilities / what I do (real time)"
  // → ["establishing responsibilities", "what I do", "real time"]
  const tags = [];
  for (const part of tagString.split(/\s*\/\s*/).map(s => s.trim()).filter(Boolean)) {
    const m = part.match(/^(.+?)\s*\((.+)\)$/);
    if (m) {
      tags.push(m[1].trim(), m[2].trim());
    } else {
      tags.push(part);
    }
  }
  return tags;
}

// ── PATTERNS ──────────────────────────────────────────────────────────────────

function parsePatternFile(filepath) {
  const lines = fs.readFileSync(filepath, 'utf-8').replace(/\r\n/g, '\n').split('\n');

  // Parse frontmatter, joining multi-line titles
  let titleRaw = '';
  let inFm = false;
  for (const line of lines) {
    if (line === '---') {
      if (!inFm) { inFm = true; continue; }
      else break;
    }
    if (!inFm) continue;
    if (line.startsWith('title:')) {
      titleRaw = line;
    } else if (titleRaw && !titleRaw.endsWith("'")) {
      titleRaw += ' ' + line.trim();
    }
  }

  const titleMatch = titleRaw.match(/title:\s*'#(\d+)\.\s+"(.+?)"\s+Pattern(?:\s*\/\/\s*(.+?))?'$/);
  if (!titleMatch) {
    console.warn(`  ⚠ Could not parse title in ${path.basename(filepath)}: ${titleRaw}`);
    return null;
  }

  const number = parseInt(titleMatch[1]);
  const name = titleMatch[2];
  const tags = titleMatch[3] ? parseTags(titleMatch[3].trim()) : [];

  const imageLine = lines.find(l => /!\[.*\.gif\]/.test(l));
  const imageMatch = imageLine?.match(/!\[([^\]]+\.gif)\]/);
  const image = imageMatch ? imageMatch[1] : null;

  const typicalInteractions = [];
  const examples = [];
  const combinations = [];
  const relatedStrategies = [];
  let section = null;

  for (const line of lines) {
    if (/^\*\*Typical object interactions\*\*/.test(line)) { section = 'interactions'; continue; }
    if (/^\*\*Examples\*\*/.test(line)) { section = 'examples'; continue; }
    if (/^\*\*Combinations\*\*/.test(line)) { section = 'combinations'; continue; }
    if (/^Related strategies:/.test(line)) { section = 'related'; continue; }
    // Footer links end collection
    if (section && /^\[.+patterns\]/i.test(line) && !line.includes('Patt#') && !line.includes('Str#')) {
      section = null; continue;
    }

    if (section === 'interactions') {
      const m = line.match(/^\\-\s+(.+)/);
      if (m) typicalInteractions.push(decodeEntities(m[1].trim()));

    } else if (section === 'examples') {
      const m = line.match(/^\\-\s+(.+)/);
      if (m) examples.push(decodeEntities(m[1].trim()));

    } else if (section === 'combinations') {
      const m = line.match(/\[Patt#(\d+[a-z]?)\.\]\(([^)]+)\)/);
      if (m) {
        const rest = line.slice(line.indexOf(m[0]) + m[0].length).trim();
        const quotedName = rest.match(/^"([^"]+)"/);
        const plainName = rest.match(/^([A-Z][^,\n.("]+)/);
        combinations.push({
          id: `Patt#${m[1]}`,
          slug: m[2].replace(/^\//, '').replace(/\.html$/, ''),
          name: (quotedName ? quotedName[1] : (plainName ? plainName[1].trim() : '')),
        });
      }

    } else if (section === 'related') {
      const m = line.match(/\[Str#([^\]]+)\.\]\(([^)]+)\)\s+"([^"]+)"\s+Strategy/);
      if (m) {
        relatedStrategies.push({
          id: `Str#${m[1]}`,
          slug: m[2].replace(/^\//, '').replace(/\.html$/, ''),
          name: m[3],
        });
      }
    }
  }

  return { number, id: `Patt#${number}`, name, tags, image, typicalInteractions, examples, combinations, relatedStrategies };
}

// ── STRATEGIES ────────────────────────────────────────────────────────────────

function parseStrategiesFromFile(filepath) {
  const lines = fs.readFileSync(filepath, 'utf-8').replace(/\r\n/g, '\n').split('\n');
  const slug = path.basename(filepath, '.md');
  const strategies = [];
  let current = null;

  // Matches: _Str#N. "Name" Strategy // tags_  (optional "The " prefix)
  const headerRe = /^_Str#([^.]+)\.\s+(?:The\s+)?"(.+?)"\s+Strategy\s*\/\/\s*(.+?)_$/;

  for (const line of lines) {
    const hm = line.match(headerRe);
    if (hm) {
      if (current) strategies.push(current);
      current = {
        id: `Str#${hm[1]}`,
        name: hm[2].trim(),
        tags: parseTags(hm[3].trim()),
        slug,
        content: [],
      };
    } else if (current) {
      const bullet = line.match(/^\\-\s+(.+)/);
      if (bullet) { current.content.push(decodeEntities(bullet[1].trim())); continue; }
      const sub = line.match(/^\.\s+(.+)/);
      if (sub) { current.content.push(decodeEntities(sub[1].trim())); continue; }
      const numbered = line.match(/^\d+\\?\.\s+(.+)/);
      if (numbered) { current.content.push(decodeEntities(numbered[1].trim())); continue; }
      const lettered = line.match(/^[a-z]\.\s+(.+)/);
      if (lettered) { current.content.push(decodeEntities(lettered[1].trim())); continue; }
    }
  }
  if (current) strategies.push(current);
  return strategies;
}

// ── MAIN ──────────────────────────────────────────────────────────────────────

const allFiles = fs.readdirSync(pagesDir);

// Patterns: numbered files
const patterns = allFiles
  .filter(f => /^\d+-.+\.md$/.test(f))
  .sort((a, b) => parseInt(a) - parseInt(b))
  .map(f => parsePatternFile(path.join(pagesDir, f)))
  .filter(Boolean);

console.log(`\nPatterns (${patterns.length}):`);
patterns.forEach(p => console.log(`  ${p.id.padEnd(10)} "${p.name}"  [${p.tags.join(', ')}]`));

// Strategies: any non-numbered .md containing _Str#
const strategies = [];
const seen = new Set();

for (const file of allFiles.filter(f => f.endsWith('.md') && !/^\d+/.test(f)).sort()) {
  const filepath = path.join(pagesDir, file);
  const content = fs.readFileSync(filepath, 'utf-8');
  if (!content.includes('_Str#')) continue;

  for (const s of parseStrategiesFromFile(filepath)) {
    if (seen.has(s.id)) {
      console.warn(`  ⚠ Duplicate ${s.id} in ${file}`);
    } else {
      seen.add(s.id);
      strategies.push(s);
    }
  }
}

strategies.sort((a, b) => {
  const parse = id => { const m = id.match(/Str#(\d+)([a-z]*)/); return m ? [parseInt(m[1]), m[2]] : [0, '']; };
  const [an, al] = parse(a.id);
  const [bn, bl] = parse(b.id);
  return an !== bn ? an - bn : al.localeCompare(bl);
});

console.log(`\nStrategies (${strategies.length}):`);
strategies.forEach(s => console.log(`  ${s.id.padEnd(12)} "${s.name}"  [${s.tags.join(', ')}]`));

fs.writeFileSync(path.join(dataDir, 'patterns.json'), JSON.stringify(patterns, null, 2));
fs.writeFileSync(path.join(dataDir, 'strategies.json'), JSON.stringify(strategies, null, 2));

console.log(`\n✓ src/_data/patterns.json   (${patterns.length} patterns)`);
console.log(`✓ src/_data/strategies.json  (${strategies.length} strategies)`);
