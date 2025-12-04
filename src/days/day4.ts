const part1 = (lines: string): any => {
    const test = `..@@.@@@@.
@@@.@.@.@@
@@@@@.@.@@
@.@@@@..@.
@@.@@@@.@@
.@@@@@@@.@
.@.@.@.@@@
@.@@@.@@@@
.@@@@@@@@.
@.@.@@@.@.`

    const rows = test.split(/\r?\n/).filter(Boolean).map(x => x.trim().split(''))
    // console.log(rows);
    let total = 0;
    const demo = [...rows];
    for (let i = 0; i < rows.length;i++) {
        for (let j = 0; j < rows[0].length; j++) {
            if (rows[j][i] === '@' && checkAdjacent(rows, [j,i])) {
                console.log([j,i])
                demo[j][i] = 'x';
                total++;
            };
        }
    }
    console.log(demo.map(x => x.join('')).join('\n'))
    return total;
}

const checkAdjacent = (arr: string[][], [x, y]: [number, number]): boolean => {
    const rollsCoords: number[][] = [];
    if (y > 0) {
        if (arr[y-1][x - 1] === '@') rollsCoords.push([y-1, x - 1])
        if (arr[y-1][x] === '@') rollsCoords.push([y-1, x])
        if (arr[y-1][x + 1] === '@') rollsCoords.push([y-1, x + 1])
    }
    if (x > 0) {
        if (arr[y][x-1] === '@') rollsCoords.push([y,x-1]) 
    }
    if (x < arr[0].length - 1) {
        if (arr[y][x+1] === '@') rollsCoords.push([y,x+1])
    }
    if (y < arr.length - 1) {
        if (arr[y+1][x-1] === '@') rollsCoords.push([y+1,x-1])
        if (arr[y+1][x] === '@') rollsCoords.push([y+1,x])
        if (arr[y+1][x+1] === '@') rollsCoords.push([y+1,x+1])
    }
if (y === 0 && x === 7) console.log(rollsCoords)
    return rollsCoords.filter(Boolean).length < 4
}

const part2 = (lines: string): any => {
    return false;
}

export { part1, part2 }