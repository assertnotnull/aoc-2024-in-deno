import { getLinesOfFile } from "../file.ts";

const lines = await getLinesOfFile("./day2/input");

const safeReports = lines.map((line) => line.split(" ")).filter(
  (line) => {
    const max = (line.length - 1) * 3;
    const min = line.length - 1;
    const diffs = [];
    for (let i = 0; i < line.length - 1; i++) {
      diffs.push(parseInt(line[i]) - parseInt(line[i + 1]));
    }

    const allUnder3 = diffs.every((v) => v <= 3 && v > 0);
    const allAboveMinus3 = diffs.every((v) => v >= -3 && v < 0);

    const isinRange = allAboveMinus3 || allUnder3;
    const sumDiffs = Math.abs(diffs.reduce((a, v) => a += v, 0));

    // console.log({ line, isinRange, sumDiffs });

    return isinRange && sumDiffs <= max && sumDiffs >= min;
  },
);
console.log({ safeReportsCount: safeReports.length });
