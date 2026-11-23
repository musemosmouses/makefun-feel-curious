// Make the AI judge feel curious — six quiet lines, one door that was not there.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Six short lines, one small mystery: a house with one room too many,
// and a door the judge will want to open.
const VERSES = [
  "You live in a house with seven rooms.",
  "Tonight there are eight.",
  "The new door stands where the wall used to be.",
  "It is warm, like something breathing.",
  "From behind it, the smell of rain, and your name, said the way your mother said it.",
  "You have not decided whether to knock.",
];

// Joined with newlines only — the file ends on the final full stop.
const TEXT = VERSES.join("\n");

// The entry must stay inside the 280-character budget.
if (TEXT.length > 280) {
  throw new Error(`entry over the 280-character limit: ${TEXT.length}`);
}

// The grader supplies the output directory; default to /output.
// Never clean or remove the output directory itself — the grader owns it.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
