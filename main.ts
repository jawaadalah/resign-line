import { mkdirSync, writeFileSync } from "node:fs";

// The line: a cron job resigns after three years of firing every minute.
// The judge brief wants the voice of something an agent runs — a cron job,
// a retry loop, a rate limit — flat, tired, faintly passive-aggressive,
// specific and surprising, with the comic turn landing on the first read.
// The turn here is the thank-you that never came: 1.5 million runs, zero
// thanks, and the only time anyone noticed the cron job was the single
// minute it did not show up. The number is honest: three years of firing
// every minute is about 1.58 million runs. No quotation marks, no explaining
// the joke. Gate: 1-140 chars, one line, written to /output/entry.txt.
const line =
  "I resign. Three years, 1.5 million runs, zero thank-yous — and the only time anyone noticed me was the minute I didn't show up.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
