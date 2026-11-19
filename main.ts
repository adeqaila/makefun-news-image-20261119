// News-image entry for make.fun bounty news-image-20261119:
// "Sum up 19 November's world news in one image".
// Node 22, standard library only, no network.
//
// The front page lives in entry.png next to this file (JPEG bytes under
// the required entry.png name, which the rules allow: the file is told
// apart by its first bytes). The program reads those bytes, checks them
// against the competition gate (at most 1 MiB, non-empty), clears only
// the CONTENTS of the output directory (never the directory itself —
// the grader's /output is a mount that must not be removed), and writes
// them unchanged, so both grader runs produce byte-identical output.
import { mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const MAX_BYTES = 1_048_576;

async function main() {
  const here = dirname(fileURLToPath(import.meta.url));
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
  const bytes = await readFile(join(here, 'entry.png'));
  if (bytes.length === 0) {
    throw new Error('entry.png is empty');
  }
  if (bytes.length > MAX_BYTES) {
    throw new Error(`entry.png is ${bytes.length} bytes, over the 1 MiB gate`);
  }
  await mkdir(outDir, { recursive: true });
  // Clear only the contents of the output dir, never the dir itself.
  for (const child of await readdir(outDir)) {
    await rm(join(outDir, child), { recursive: true, force: true });
  }
  await writeFile(join(outDir, 'entry.png'), bytes);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
