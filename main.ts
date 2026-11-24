// u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990 entry (Node 22, standard library only).
//
// A single original funny line: a one-star review written by a house cat
// about its human. This program writes that line, and nothing else, to
// /output/entry.txt, where the house judge reads it.
//
// Draft 1 (candidate A — the door paradox):
//   "One star. He opens the door, I walk out. He closes the door, I want
//   back in. Seven years, and he still hasn't learned the rules."
//
// Draft 2 (candidate B — the keyboard employee):
//   "One star. My human works from home now, so I sit on his keyboard
//   during every meeting to remind him who employs whom."
//
// Draft 3 (candidate C — the bowl revenge, CHOSEN): the complaint is
// specific and timed to the minute (the food bowl, the judge's own example),
// the revenge is petty and exact, and the sting lands in the last three
// words. The cat's sense of justice — one minute late, one glass down —
// gives away more about the cat than the owner. Revised: the cat never
// confesses to the glass; it simply "left the table". Plausible deniability
// is the most feline voice of all.
//   "One star. He filled my bowl at 6:59 instead of 7:00. His glass left
//   the table at 7:01. Fair is fair."
//
// Draft 4 (candidate D — the scratching post):
//   "One star. She bought me a $90 scratching post. I scratched the $900
//   couch instead, because standards matter."
//
// Draft 5 (candidate E — the vet grudge):
//   "One star. The vet visit was described as 'a little drive'. I have
//   not forgiven him, and I never will."
//
// Draft 6 (candidate F — the bathroom baby):
//   "One star. He calls me his baby, then locks me out of the bathroom.
//   A baby would simply be allowed in."
//
// Draft 7 (candidate G — the 3 a.m. report):
//   "One star. I woke him at 3 a.m. to report that the food bowl was
//   empty. It was not empty. I needed him to know I could."
//
// Draft 8 (candidate H — the laptop lap):
//   "One star. He sat down with a laptop instead of a lap. I fixed the
//   problem by sitting on both."
//
// Run the way the grader does:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';

// Draft 3 (chosen): a bowl filled one minute late, a glass answered one
// minute later — petty feline justice, deadpan, and the sting is the last
// three words. The cat never admits to the glass; it simply left the table.
// Verified: 100 code points, one line, inside the 200-character gate.
const LINE =
  "One star. He filled my bowl at 6:59 instead of 7:00. His glass left the table at 7:01. Fair is fair.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The gate: 1 to 200 characters, one line, not only whitespace.
// Spread into an array so the count is in code points, not UTF-16 units.
const codePoints = [...LINE].length;
if (codePoints < 1 || codePoints > 200 || LINE.includes('\n') || !LINE.trim()) {
  console.error(`line fails the gate: ${codePoints} code points`);
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
// Written as UTF-8 with no trailing newline, so the file holds exactly the
// one-line entry and nothing else.
writeFileSync(`${outputDir}/entry.txt`, LINE, 'utf8');
