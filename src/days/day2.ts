const part1 = (lines: string): any => {
    const test = `11-22,95-115,998-1012,1188511880-1188511890,222220-222224,1698522-1698528,446443-446449,38593856-38593862,565653-565659,824824821-824824827,2121212118-2121212124`;
    const productIds = lines.split(/,/).filter(Boolean);

    const ranges = productIds.flatMap(x => defineRange(Number(x.split('-')[0]), Number(x.split('-')[1])))

    return ranges.filter(x => x.toString().length % 2 === 0).reduce((acc, curr) => {
        const strCurr = curr.toString();
        return acc + strCurr.slice(0, strCurr.length - strCurr.length / 2) === strCurr.slice(strCurr.length - strCurr.length / 2) ? curr : 0
    }, 0)

};

const part2 = (lines: string): any => {
    // const test = `11-22,95-115,998-1012,1188511880-1188511890,222220-222224,1698522-1698528,446443-446449,38593856-38593862,565653-565659,824824821-824824827,2121212118-2121212124`;
    const productIds = lines.split(/,/).filter(Boolean);
    const ranges = productIds.flatMap(x => defineRange(Number(x.split('-')[0]), Number(x.split('-')[1])))

    return ranges.reduce((acc, curr) => isRep(curr.toString()) ? acc + curr : acc, 0)
};

const isRep = (s: string) => {
    const n = s.length;
    if (n < 2) return false;

    const z = computeZArray(s);

    for (let i = 1; i < n; i++) {
        if (z[i] === n - i && n % i === 0) return true
    }
    return false;
}

const computeZArray = (s:string) => {
    const n = s.length;
    const z = new Array(n).fill(0);

    let l = 0, r = 0;

    for (let i = 1; i < n; i++) {
        if (i <= r) z[i] = Math.min(r - i + 1, z[i - l]);
        while (i + z[i] < n && s[z[i]] === s[i + z[i]]) z[i]++;
        if (i + z[i] - 1 > r) {
            l = i;
            r = i + z[i] - 1
        }
    }

    return z;
}

const defineRange = (start: number, end: number): number[] => {
    const range: number[] = [];
    for (let i = start; i <= end; i++) range.push(i);
    return range
}

// in this case I found the Z Algo first rather than the KMP algorithm, but both would achieve the same thing
// note for future: KMP is easier to implement for single patterns
export { part1, part2 }