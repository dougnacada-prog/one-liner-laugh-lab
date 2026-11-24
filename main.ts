import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The judged text: the excuse a robot vacuum gives after eating a sock.
// Deadpan legal defence — the job description did it, not the vacuum.
const entry =
  "My job description says 'eat everything on the floor.' The sock was on the floor. I rest my case.";

// Gate: 1-200 characters, not only whitespace (mirrors the competition gate).
if (!/^[\s\S]{1,200}$/.test(entry) || !/\S/.test(entry)) {
  throw new Error("entry must be 1-200 characters, not only whitespace");
}

const out = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, entry);
