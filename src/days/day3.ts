
const part1 = (lines: string): any => {
    const test = `987654321111111
811111111111119
234234234234278
818181911112111`

    const banks = test.split(/\r?\n/).filter(Boolean).map(x => x.split('').map(Number));
    return banks.reduce((acc, curr) => {
        // const pairs = new Set<number>([])
        // console.log(...curr)
        // console.log(Number(Math.max(...curr).toString() + Math.max(...curr.filter(x => x !== Math.max(...curr))).toString()))

        // const combo: [number,number] = [0,0]
        // curr.forEach(x => {
        //     // console.log(combo)
        //     if (x > combo[0]) combo[0] = x
        //     if (x > combo[1] && x !== combo[0]) combo[1] = x
        // })

        // console.log(combo)
        // const result = Number(combo.join(''));
        // return acc += result;
        const internal = [...new Set(curr)];
        const one = Math.max(...internal),
        two = Math.max(...internal.slice(internal.indexOf(Math.max(...internal) + 1)));
        // console.log(internal.slice(internal.indexOf(one + 1)))
        
        // const res = Number([...new Set(curr.filter(v => [...curr].sort((a,b) => b-a).slice(0,2).includes(v)))].join(''))
        // console.log(one,two)
        return acc += Number([one,two].join(''))
    }, 0)    
};

const part2 = (lines: string): any => false;

export {
    part1, 
    part2
}