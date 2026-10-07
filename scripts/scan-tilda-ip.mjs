/**
 * Fail if Tilda platform markers appear in shipped site sources (src/, public/).
 * Node-only — avoids PowerShell/VBS patterns that trigger AV false positives on Windows.
 *
 * Usage:
 *   node scripts/scan-tilda-ip.mjs          (from site repo root)
 *   node scripts/scan-tilda-ip.mjs <path>   (explicit site root)
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const root = process.argv[2]
  ? path.resolve(process.cwd(), process.argv[2])
  : path.resolve(scriptDir, '..');

const pattern =
  /tildacdn|tilda\.cc|tilda\.ws|tilda-scripts|tilda-blocks|tilda-forms|tilda-cart|data-tilda-|t-records|t396__|tn-atom|tildacopy|lib__icons__tilda|tildastat|formskey|Made on Tilda|Published on Tilda/i;
const fileNamePattern = /^(tilda-|tildacopy)|lib__icons__tilda|tild[0-9a-f]{4}-/i;
const scanExt = /\.(astro|ts|tsx|js|mjs|css|html|svg|json|txt|md)$/i;

const dirs = ['src', 'public'].map((d) => path.join(root, d)).filter((d) => fs.existsSync(d));
const hits = [];

function walk(dir) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      if (ent.name === 'node_modules') continue;
      walk(full);
      continue;
    }
    if (fileNamePattern.test(ent.name)) {
      hits.push({ file: full, line: 0, text: 'FILENAME' });
      continue;
    }
    if (!scanExt.test(ent.name)) continue;
    const lines = fs.readFileSync(full, 'utf8').split(/\r?\n/);
    lines.forEach((line, i) => {
      if (pattern.test(line)) hits.push({ file: full, line: i + 1, text: line.trim() });
    });
  }
}

for (const d of dirs) walk(d);

if (hits.length > 0) {
  for (const h of hits) {
    console.error(`HIT ${h.file}:${h.line}:${h.text}`);
  }
  process.exit(1);
}

console.log(`OK: no Tilda markers in src/ or public/ (${root})`);
