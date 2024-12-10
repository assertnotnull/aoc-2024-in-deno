import { readFile } from "../file.ts";

const data = await readFile("./day1/input");

const lines = data.split("\n");
const numberLines = lines.filter((line) => line.length).map((line) =>
  line.split(/\s+/).map((x) => parseInt(x))
);
const lists: number[][] = [[], []];
numberLines.forEach(([a, b], i) => {
  lists[0][i] = a;
  lists[1][i] = b;
});
lists[0].sort((a, b) => a - b);
lists[1].sort((a, b) => a - b);
let sum = 0;
for (let i = 0; i < lists[0].length; i++) {
  sum += Math.abs(lists[0][i] - lists[1][i]);
}
console.log({ solution: sum });
