const part1 = (lines: string): any => {
    const splitLines = lines.split('\n').filter(Boolean)
    let pass = 50;
    let amount = 0;

    splitLines.forEach(x => {
        pass = turnDial(pass, x)
        if (pass === 0) { 
            console.log('ding')
            amount++;
        }
    })
    return amount;
};
const part2 = (lines: string): any => false;

const turnDial = (current: number, instruction: string): number => {
    const max = 99;
    const min = 0;

    let internalCurr = current;

    const [direction, turns] = [instruction.slice(0,1), Number(instruction.slice(1))];
    if (direction === 'L') {
        for (let i = 0; i < turns; i++) {
            if (internalCurr === min) {
                internalCurr = 99;
                continue;
            }
            internalCurr--;
        }
    } else if (direction === 'R') {
        for (let i = 0; i < turns; i++) {
            if (internalCurr === max) {
                internalCurr = 0;
                continue;
            }
            internalCurr++;
        }
    }
    
    // console.log(internalCurr)
    return internalCurr;
}

export { part1, part2 }