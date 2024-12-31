import { getLinesOfFile } from "../file.ts";

const lines = await getLinesOfFile("./day2/input");

function checkLine(line: number[]) {
  const increasing = line[1] - line[0] > 0;
  let isSafe = true;
  for (let i = 1; i < line.length; i++) {
    let safe;
    if (increasing) {
      safe = 1 <= line[i] - line[i - 1] && line[i] - line[i - 1] <= 3;
    } else {
      safe = 1 <= line[i - 1] - line[i] && line[i - 1] - line[i] <= 3;
    }
    isSafe &&= safe;
  }

  return isSafe;
}

const safeReports = lines.map((line) => line.split(" ").map((x) => parseInt(x)))
  .filter(
    (line) => {
      const isSafe = checkLine(line);

      if (isSafe) return true;

      for (let i = 0; i < line.length; i++) {
        const isSafeAfterRemove = checkLine(line.toSpliced(i, 1));
        if (isSafeAfterRemove) {
          return true;
        }
      }
      return false;
    },
  );
console.log(safeReports.length);
