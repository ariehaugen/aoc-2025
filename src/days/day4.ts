const test = `..@@.@@@@.
@@@.@.@.@@
@@@@@.@.@@
@.@@@@..@.
@@.@@@@.@@
.@@@@@@@.@
.@.@.@.@@@
@.@@@.@@@@
.@@@@@@@@.
@.@.@@@.@.`;
const part1 = (lines: string): any => {
  const rows = lines
    .split(/\r?\n/)
    .filter(Boolean)
    .map((x) => x.trim().split("")) as string[][];

  let total = 0;

  for (let i = 0; i < rows.length; i++) { // y
    for (let j = 0; j < rows[i]!.length; j++) { // x
      if (rows[i]?.[j] === "@" && checkAdjacent(rows, [j, i])) {
        total++;
      }
    }
  }
  return total;
};

const checkAdjacent = (arr: string[][], [x, y]: [number, number]): boolean => {
  const rollsCoords: number[][] = [];
  if (y > 0) {
    if (["@", "x"].includes(arr[y - 1]![x - 1]!)) rollsCoords.push([y - 1, x - 1]);
    if (["@", "x"].includes(arr[y - 1]![x]!)) rollsCoords.push([y - 1, x]);
    if (["@", "x"].includes(arr[y - 1]![x + 1]!)) rollsCoords.push([y - 1, x + 1]);
  }
  if (x > 0) {
    if (["@", "x"].includes(arr[y]![x - 1]!)) rollsCoords.push([y, x - 1]);
  }
  if (x < arr[y].length - 1) {
    if (["@", "x"].includes(arr[y]![x + 1]!)) rollsCoords.push([y, x + 1]);
  }
  if (y < arr.length - 1) {
    if (["@", "x"].includes(arr[y + 1]![x - 1]!)) rollsCoords.push([y + 1, x - 1]);
    if (["@", "x"].includes(arr[y + 1]![x]!)) rollsCoords.push([y + 1, x]);
    if (["@", "x"].includes(arr[y + 1]![x + 1]!)) rollsCoords.push([y + 1, x + 1]);
  }
  return rollsCoords.filter(Boolean).length < 4;
};

const part2 = (lines: string): any => {
  let rows = lines
    .split(/\r?\n/)
    .filter(Boolean)
    .map((x) => x.trim().split("")) ?? [[]];
  let total = 0;
  while (true) {
    let current = 0;
    for (let i = 0; i < rows.length; i++) { // y
      for (let j = 0; j < rows[i]!.length; j++) { // x
        if (rows[i]![j] === "@" && checkAdjacent(rows, [j, i])) {
          rows[i]![j] = "x";
          current++;
        }
      }
    }
    if (current === 0) break;
    
    rows = rows.map(row => row.map(col =>  col === 'x' ? '.' : col ))
    
    total += current;
  }
  return total;
};

export { part1, part2 };
