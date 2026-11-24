// One Word, One Username, One Reward — make.fun entry.
//
// The competition asks for exactly one thing: the entrant's own make.fun
// username, sent as a single word, with no explanation, no links, no pitch.
// This program writes that one word — "mocsses" — to entry.txt inside the
// harness output directory, and nothing else.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entrant's own make.fun username. Seven characters, well inside the
// gate's 1–30 character window, a single word with no padding — exactly what
// the judge reads, with nothing tacked on.
const USERNAME = "mocsses";

// The harness sets MAKEFUN_OUTPUT_DIR; fall back to a local "output"
// directory so the program also runs by hand for a local test.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";

mkdirSync(outputDir, { recursive: true });

const outPath = join(outputDir, "entry.txt");
writeFileSync(outPath, USERNAME, "utf8");

console.log(`Wrote ${USERNAME.length} characters to ${outPath}`);
