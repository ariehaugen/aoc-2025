const test = `123 328  51 64 
 45 64  387 23 
  6 98  215 314
*   +   *   +  
`

const part1 = (lines: string): any => {
    const problems = lines.split(/\r?\n/).map(x => x.split(' ').filter(Boolean)).filter(x => x.length);
    const equations = rotate(problems)
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
    const problems = test.split(/\r?\n/).map(x => x.split(' ').filter(Boolean)).filter(x => x.length);
    const line = test.split(/\r?\n/);
    const width = Math.max(...line.map(x=>x.length));
    const matrix = line.map(l => l.padEnd(width, ' ').split(''))
    //need a column first approach
    const splits = matrix[0]?.map((_,c) => c).filter(c => matrix.every(row => row[c] === ' '));
    
    // const r = rotate(problems, true)
    // const [rows, cols] = [r.length, r[0]!.length];
    // const results: number[] = [];
    // for (let i = 0; i < rows; i++) {
    //     const operator = r![i]![0];
    //     const row = r[i]?.slice(1);
    //     const maxLen = Math.max(...row!.map(x => x.length));
    //     const test = []
    //     for (let n = maxLen; n > 0; n--) {
    //         test.push(Number(row?.map(col => col[n]).join('')))
    //     }   
    //     console.log(row)
    //     console.log(test)
    // }
    

    // return '\n' + r.join('\n')
}

const rotate = (matrix: string[][], cc?:boolean): string[][] => {
    const [rows, cols] = [matrix.length, matrix[0]?.length ?? 0];
    const temp: string[][] = Array.from({ length: cols }, () => Array.from({length: rows }, () => ""));
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            temp[j]![(cc ? cols : rows) - 1 - i] = matrix[i]![j]!
        }
    }
    return temp;
}

export { part1, part2 }