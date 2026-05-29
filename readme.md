# Strategies and Patterns Handbook

This repo is a more modern markup version of the online version of one of my favourite books: "Object Models: Strategies, Patterns, and Applications" by Peter Coad, David North and Mark Mayfield from 1997. 
This was converted from the original html passed to me by Peter Coad himself. No copyright infringement is intended but hosted here since the original site and links featured in the original have gone away.

## Changes

- permalinks were updated to be more friendly.
- `src/` contains all Markdown source, Eleventy templates, layout assets.
- `src/img/` contains static image assets copied from the original archive.
- `scripts/convert-html-to-md.js` converted the old HTML pages into Markdown.
- `_site/` is the default Eleventy output directory.

The site was ported to build using 11ty and Bulma. Live version is [https://deejaygraham.github.io/omspa/](https://deejaygraham.github.io/omspa/)

## Usage

1. Install dependencies:
   ```bash
   npm install
   ```

2. Build the site:
   ```bash
   npm run build
   ```

3. Serve locally:
   ```bash
   npm run start
   ```

4. Run Playwright tests:
   ```bash
   npm test
   ```
