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
const occ = new Map<number, number>();
for (let i = 0; i < lists[1].length; i++) {
  const num = lists[1][i];
  occ.set(num, (occ.get(num) ?? 0) + 1);
}
let total = 0;
for (let i = 0; i < lists[0].length; i++) {
  const num = lists[0][i];

  total += num * (occ.get(num) ?? 0);
}
console.log(total);
