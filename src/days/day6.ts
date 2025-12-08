const test = `123 328  51 64 
 45 64  387 23 
  6 98  215 314
*   +   *   +  
`

const part1 = (lines: string): any => {
    const problems = lines.split(/\r?\n/).map(x => x.split(' ').filter(Boolean)).filter(x => x.length);
    const [rows, cols] = [problems.length, problems[0]!.length];
    const equations: string[][] = Array.from({ length: cols }, () => Array.from({ length: rows }));

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            equations[j][rows - 1 - i] = problems[i]![j]
        }
    }
    return equations.reduce((acc, curr) => {
        let sum = 0;
        let op = '+';

        curr.forEach(part => {
            if (['*', '+'].includes(part)) return op = part;
            op === '+' ? sum += Number(part) : sum = (sum === 0 ? 1 : sum) * Number(part)
        })


        return acc + sum;
    }, 0)
}

const part2 = (lines: string): any => {
    return false;
}

export { part1, part2 }