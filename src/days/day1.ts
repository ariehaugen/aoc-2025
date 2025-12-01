const part1 = (lines: string): any => {
    const splitLines = lines.split('\n').filter(Boolean)
    let pass = 50;
    let amount = 0;

    splitLines.forEach(x => {
        pass = turnDial(pass, x)
        if (pass === 0) {
            amount++;
        }
    })
    return amount;
};
const part2 = (lines: string): any => {
    const splitLines = `L68
L30
R48
L5
R60
L55
L1
L99
R14
L82`.split(/\r?\n/).filter(Boolean);

    let pass = 50;
    let amount = 0;

    splitLines.forEach(x => {
        amount += turnDial(pass, x, true)
    })

    return amount;
};

const turnDial = (current: number, instruction: string, returnAmount?: boolean): number => {
    const max = 99;
    const min = 0;

    let internalCurr = current;
    let internalAmount = 0;

    const [direction, turns] = [instruction.slice(0, 1), Number(instruction.slice(1))];
    if (direction === 'L') {
        for (let i = 0; i < turns; i++) {
            if (internalCurr === 0 && returnAmount) {
                console.log("beep", internalCurr, internalAmount, instruction)
                internalAmount++;
            } 
            if (internalCurr === min) {
                internalCurr = 99;
                continue;
            }
            internalCurr--;
        }
    } else if (direction === 'R') {
        for (let i = 0; i < turns; i++) {
            if (internalCurr === 0 && returnAmount) {
                console.log("beep", internalCurr, internalAmount, instruction)
                internalAmount++;
            }
            if (internalCurr === max) {
                internalCurr = 0;
                continue;
            }
            internalCurr++;
        }
    }
if (returnAmount) 
    console.log('boop', internalCurr, internalAmount, instruction)
    return returnAmount ? internalAmount + (internalCurr === 0 ? 1 : 0) : internalCurr;
}

export { part1, part2 }