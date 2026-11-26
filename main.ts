// Funniest Cat Voicemail Greeting — make.fun entry
// The program writes exactly one line (no trailing newline) to /output/entry.txt.
// The greeting is recorded by Miso the cat: a voicemail greeting, a cat-specific
// joke (knocking a mug off the table), and a punch that lands fast when read aloud.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "You've reached Miso. I'm knocking your favourite mug off the table — leave a message after the crash. Food? Talk fast.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
