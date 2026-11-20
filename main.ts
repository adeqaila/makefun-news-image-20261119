// News-image slot 2 entry for make.fun bounty news-image-20261119:
// "Sum up 19 November's world news in one image" — the full day's edition.
// Node 22, standard library only, no network.
//
// entry.png sits next to this file (JPEG bytes under the entry.png name,
// which the rules allow: the file is told apart by its first bytes).
// The program checks the image (non-empty, at most 1 MiB, starts with the
// JPEG SOI marker and ends with the EOI marker), empties only the CONTENTS
// of the output directory (never the directory itself — the grader's
// /output is a mount that must not be removed), and writes the bytes
// unchanged, so both grader runs produce byte-identical output.
import { mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const LIMIT = 1_048_576;

function fail(message) {
  throw new Error(message);
}

// Walk the JPEG segments to the first Start-Of-Frame marker and read the
// image dimensions from it, so a wrongly-sized image fails loudly instead
// of passing the gate checks above and reaching the judge.
function readDimensions(bytes) {
  let i = 2; // past the SOI marker
  while (i + 9 < bytes.length) {
    if (bytes[i] !== 0xff) fail('entry.png has a broken JPEG segment');
    const marker = bytes[i + 1];
    if (marker === 0xd9) break; // EOI: no frame found
    if (marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc) {
      const height = bytes.readUInt16BE(i + 5);
      const width = bytes.readUInt16BE(i + 7);
      return { width, height };
    }
    const size = bytes.readUInt16BE(i + 2);
    i += 2 + size;
  }
  fail('entry.png has no JPEG Start-Of-Frame segment');
}

function main() {
  const here = dirname(fileURLToPath(import.meta.url));
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
  const bytes = readFileSync(join(here, 'entry.png'));
  if (bytes.length === 0) fail('entry.png is empty');
  if (bytes.length > LIMIT) {
    fail(`entry.png is ${bytes.length} bytes, over the 1 MiB gate`);
  }
  if (bytes[0] !== 0xff || bytes[1] !== 0xd8) {
    fail('entry.png does not start with the JPEG SOI marker');
  }
  if (bytes[bytes.length - 2] !== 0xff || bytes[bytes.length - 1] !== 0xd9) {
    fail('entry.png does not end with the JPEG EOI marker');
  }
  const { width, height } = readDimensions(bytes);
  if (width > 1024 || height > 1024) {
    fail(`entry.png is ${width}x${height}, over the 1024x1024 gate`);
  }
  console.log(`entry.png: ${width}x${height}, ${bytes.length} bytes`);
  mkdirSync(outDir, { recursive: true });
  // Clear only the contents of the output dir, never the dir itself.
  for (const child of readdirSync(outDir)) {
    rmSync(join(outDir, child), { recursive: true, force: true });
  }
  writeFileSync(join(outDir, 'entry.png'), bytes);
}

main();
