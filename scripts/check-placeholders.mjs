#!/usr/bin/env node
// Lists every "[placeholder]" string still left in src/content so nothing
// unfinished ships. Exits with code 1 if any are found.
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const dir = new URL("../src/content/", import.meta.url).pathname;
const pattern = /"(\[[^"\]]+\])"/g;
let total = 0;

for (const file of readdirSync(dir).filter((f) => f.endsWith(".ts") && f !== "types.ts")) {
  const lines = readFileSync(join(dir, file), "utf8").split("\n");
  lines.forEach((line, i) => {
    for (const match of line.matchAll(pattern)) {
      total++;
      console.log(`src/content/${file}:${i + 1}  ${match[1]}`);
    }
  });
}

if (total > 0) {
  console.log(`\n${total} placeholder(s) left to fill in.`);
  process.exit(1);
}
console.log("No placeholders left. 🎉");
