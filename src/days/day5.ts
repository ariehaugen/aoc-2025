const test = `3-5
10-14
16-20
12-18

1
5
8
11
17
32`

const part1 = (lines: string): any => {
    const [ranges, ids] = lines.split('\n\n').map(x => x.split('\n').map(y => y.trim()).filter(Boolean));
    const r = ranges!.map(range => range.split('-').map(num => Number(num.trim())))
    return ids?.map(Number).filter(id => !!r.filter(rr => id >= rr[0]! && id <= rr[1]!).length).length
}
const part2 = (lines: string): any => {
    const ranges = lines.split('\n\n').map(x => x.split('\n').map(y => y.trim()).filter(Boolean))[0];

    const rangeSet: Interval[] = [];
    for (const range of ranges!) {
        const [bottom, top] = range.split('-').map(Number);
        addRange(rangeSet, bottom!, top!);
    }
    return rangeSet.reduce((acc,curr) => acc + (Math.abs(curr.start - curr.end) + 1), 0)
}

type Interval = { start: number; end: number };

const addRange = (intervals: Interval[], start: number, end: number): void => {
    if (start > end) [start,end] = [end,start];

    for (let i = 0; i < intervals.length; i++) {
        const int = intervals[i];

        if (end < int!.start || start > int!.end) continue

        start = Math.min(start, int!.start);
        end = Math.max(end,int!.end);
        intervals.splice(i,1);
        i--;
    }
    intervals.push({start,end})
    intervals.sort((a,b) => a.start - b.start)
}

export { part1, part2 }