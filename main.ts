// One-Liner Laughs — deterministic one-line joke entry.
//
// The program writes exactly one joke — a single funny line about an AI
// assistant that takes "be funny" as a workplace grievance — to
// $OUTPUT_DIR/entry.txt (or /output/entry.txt when OUTPUT_DIR is unset).
// No randomness, no clock, no network, no input: the same bytes every run.
//
// Gate enforced before writing: UTF-8 text, 1–200 characters, not only
// whitespace, a single line. The joke itself is a constant, so the gate is
// really a tripwire against accidental edits that would push it over 200 —
// the line was drafted at 133 characters, comfortably inside the limit.
// The gate also rejects any line break, so a stray newline in the source
// string can never reach the output file.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "I told my AI assistant to write a one-liner, and it filed a complaint with HR — apparently 'be funny' counts as emotional labour now.";

function checkGate(text: string): void {
  const chars = [...text];
  if (chars.length < 1 || chars.length > 200) {
    throw new Error(`joke is ${chars.length} characters, gate requires 1-200`);
  }
  if (text.trim().length === 0) {
    throw new Error("joke must not be only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("joke must be a single line");
  }
}

checkGate(JOKE);

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
