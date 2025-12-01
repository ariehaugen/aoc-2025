const part1 = (lines: string): any => {
  const splitLines = lines.split("\n").filter(Boolean);
  let pass = 50;
  let amount = 0;

  splitLines.forEach((x) => {
    pass = turnDialP1(pass, x);
    if (pass === 0) {
      amount++;
    }
  });
  return amount;
};

const part2 = (lines: string): any => {
  const splitLines = lines
    .split(/\r?\n/)
    .map((x) => x.trim())
    .filter(Boolean);

  const temp = splitLines.reduce(
    (acc, curr) => {
      const { pass, amount } = turnDialP2(acc.pass, curr);
      return { pass, amount: amount + acc.amount };
    },
    { pass: 50, amount: 0 }
  );

  return temp.amount;
};

const turnDialP1 = (
  current: number,
  instruction: string,
  returnAmount?: boolean
): number => {
  const max = 99;
  const min = 0;

  let internalCurr = current;
  let internalAmount = 0;

  const [direction, turns] = [
    instruction.slice(0, 1),
    Number(instruction.slice(1)),
  ];
  if (direction === "L") {
    for (let i = 0; i < turns; i++) {
      if (internalCurr === 0 && returnAmount) {
        console.log("beep", internalCurr, internalAmount, instruction);
        internalAmount++;
      }
      if (internalCurr === min) {
        internalCurr = 99;
        continue;
      }
      internalCurr--;
    }
  } else if (direction === "R") {
    for (let i = 0; i < turns; i++) {
      if (internalCurr === 0 && returnAmount) {
        console.log("beep", internalCurr, internalAmount, instruction);
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
    console.log("boop", internalCurr, internalAmount, instruction);
  return returnAmount
    ? internalAmount + (internalCurr === 0 ? 1 : 0)
    : internalCurr;
};

type Instruction = {
  pass: number;
  amount: number;
};

// v1 (more performant)
const turnDialP2Old = (curr: number, ins: string): Instruction => {
  const internal: Instruction = { pass: curr, amount: 0 };
  const [dir, steps] = [ins.slice(0, 1), Number(ins.slice(1))];
  const [min, max] = [0, 99];

  if (dir === "L") {
    for (let i = 0; i < steps; i++) {
      if (internal.pass === min) {
        internal.pass = 99;
      } else {
        internal.pass--;
      }

      if (internal.pass === 0) internal.amount++;
    }
  } else if (dir === "R") {
    for (let i = 0; i < steps; i++) {
      if (internal.pass === max) {
        internal.pass = 0;
      } else {
        internal.pass++;
      }

      if (internal.pass === 0) internal.amount++;
    }
  }

  return internal;
};

// v2 (slow, but cool)
const turnDialP2 = (curr: number, ins: string): Instruction => {
  const [dir, steps, min, max] = [ins.slice(0, 1), Number(ins.slice(1)), 0, 99];
  const step = dir === "L" ? -1 : 1;

  return Array.from({ length: steps }).reduce(
    ({ pass, amount }) => {
      const newPass = (pass + step + 100) % 100;
      return {
        pass: newPass,
        amount: amount + (newPass === 0 ? 1 : 0),
      };
    },
    { pass: curr, amount: 0 }
  );
};

export { part1, part2 };
