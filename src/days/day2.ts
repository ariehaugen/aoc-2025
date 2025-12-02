const part1 = (lines: string): any => {
    const test = `11-22,95-115,998-1012,1188511880-1188511890,222220-222224,1698522-1698528,446443-446449,38593856-38593862,565653-565659,824824821-824824827,2121212118-2121212124`;
    const productIds = lines.split(/,/).filter(Boolean);

    const ranges = productIds.flatMap(x => defineRange(Number(x.split('-')[0]), Number(x.split('-')[1])))

    return ranges.filter(x => x.toString().length % 2 === 0).reduce((acc, curr) => {
        const strCurr = curr.toString();
        return acc += strCurr.slice(0, strCurr.length - strCurr.length / 2) === strCurr.slice(strCurr.length - strCurr.length / 2) ? curr : 0
    }, 0)

};

const part2 = (lines: string): any => false;

const defineRange = (start: number, end: number): number[] => {
    const range: number[] = [];
    for (let i = start; i <= end; i++) range.push(i);
    return range
}

export { part1, part2 }