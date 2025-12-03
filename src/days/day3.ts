
const part1 = (lines: string): any => {
    const test = `987654321111111
811111111111119
234234234234278
818181911112111`

    const banks = lines.split(/\r?\n/).filter(Boolean).map(x => x.split('').map(Number));
    return banks.reduce((acc, curr) => {
        const uC = [...new Set(curr)];
        const one = Math.max(...uC.slice(0, uC.length - 1))
        const two = Math.max(...uC.slice(uC.indexOf(Math.max(...uC.slice(0, uC.length - 1))) + 1))

        return acc += Number([one,two].join(''))
    }, 0)    
};

const part2 = (lines: string): any => false;

export {
    part1, 
    part2
}