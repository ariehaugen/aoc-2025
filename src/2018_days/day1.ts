const part1 = (lines: string): any => {
    return lines.split('\n').filter(Boolean).reduce((sum, curr) => {
        const [op,num] = [curr.slice(0,1), Number(curr.slice(1))];
        return op === '+' ? sum + num : sum - num;
    }, 0)
}

const part2 = (lines: string): any => {
    const seq = lines.split('\n').filter(Boolean);
    const seen = new Set<number>([0]);
    let curr = 0;
    while (true) {
        for (const line of seq) {
            const [op,num] = [line.slice(0,1), Number(line.slice(1))];
            curr += op === '+' ? num : -num;
            if (seen.has(curr)) return curr 
            seen.add(curr)
        }
    }
} 

export { part1, part2 }