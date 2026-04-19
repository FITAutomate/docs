/**
 * One-time helper: prepend minimal Starlight docs frontmatter when missing.
 * Title from (1) | Title | table cell, (2) first # heading, (3) filename.
 */
import fs from 'node:fs';
import path from 'node:path';

const root = path.join(process.cwd(), 'src', 'content', 'docs');

function walk(dir, out = []) {
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    const st = fs.statSync(full);
    if (st.isDirectory()) walk(full, out);
    else if (name.endsWith('.md')) out.push(full);
  }
  return out;
}

function extractTitle(body) {
  const table = body.match(/\|\s*Title\s*\|\s*([^|]+?)\s*\|/i);
  if (table) return table[1].trim();
  const h1 = body.match(/^#\s+(.+)$/m);
  if (h1) return h1[1].trim();
  return null;
}

function titleFromFilename(file) {
  const base = path.basename(file, '.md');
  return base
    .replace(/^[\p{Emoji_Presentation}\p{Emoji}\uFE0F\s—-]+/u, '')
    .replace(/^SOP\s*\d+\s*[—-]\s*/i, '')
    .replace(/^PROC\s*[—-]\s*/i, '')
    .replace(/^KB\s*[—-]\s*/i, '')
    .trim();
}

const files = walk(root);
let n = 0;
for (const file of files) {
  let body = fs.readFileSync(file, 'utf8');
  if (/^\s*---\r?\n/.test(body)) continue;

  let title = extractTitle(body);
  if (!title) title = titleFromFilename(file);
  if (!title) title = 'Untitled';

  const esc = title.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
  const front = `---\ntitle: "${esc}"\ndescription: ""\n---\n\n`;
  fs.writeFileSync(file, front + body, 'utf8');
  n++;
}
console.log(`Prepended frontmatter on ${n} file(s).`);
