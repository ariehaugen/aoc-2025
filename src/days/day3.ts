const part1 = (lines: string): any => {
  const test = `987654321111111
811111111111119
234234234234278
818181911112111`;

  const banks = lines
    .split(/\r?\n/)
    .filter(Boolean)
    .map((x) => x.trim().split("").map(Number));
  return banks.reduce((acc, curr) => {
    let max = -Infinity;
    for (let i = 0; i < curr.length; i++) {
      for (let j = i + 1; j < curr.length; j++) {
        const val = curr[i] * 10 + curr[j];
        if (val > max) max = val;
      }
    }
    return acc + max;
  }, 0);
};

const part2 = (lines: string): any => {
  const test = `987654321111111
    811111111111119
    234234234234278
    818181911112111`;
  const banks = lines
    .split(/\r?\n/)
    .filter(Boolean)
    .map(x => x.trim())

// this _would_ maybe compute given hundreds of years but alas, algorithms are smarter
//   return banks.reduce((acc, curr) => {
//     let max = -Infinity;
//     for (let one = 0; one < curr.length; one++) {
//       for (let two = one + 1; two < curr.length; two++) {
//         for (let three = two + 1; three < curr.length; three++) {
//           for (let four = three + 1; four < curr.length; four++) {
//             for (let five = four + 1; five < curr.length; five++) {
//               for (let six = five + 1; six < curr.length; six++) {
//                 for (let seven = six + 1; seven < curr.length; seven++) {
//                   for (let eight = seven + 1; eight < curr.length; eight++) {
//                     for (let nine = eight + 1; nine < curr.length; nine++) {
//                       for (let ten = nine + 1; ten < curr.length; ten++) {
//                         for (let eleven = ten + 1; eleven < curr.length; eleven++) {
//                           for (let twelve = eleven + 1;twelve < curr.length;twelve++) {
//                             const val = curr[one] * 100000000000 + curr[two] * 10000000000 + curr[three] * 1000000000 + curr[four] * 100000000 + curr[five] * 10000000 + curr[six] * 1000000 + curr[seven] * 100000 + curr[eight] * 10000 + curr[nine] * 1000 + curr[ten] * 100 + curr[eleven] * 10 + curr[twelve];
//                             if (val > max) max = val;
//                           }
//                         }
//                       }
//                     }
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//     return acc + max;
//   }, 0);

    const removeKDigits = (num: string, k: number): bigint => {
        const s: string[] = [];
        let r = num.length - k;

        num.split('').forEach(d => {
            while (r > 0 && s.length && s[s.length - 1] < d) {
                s.pop();
                r--;
            }
            s.push(d)
        });

        while (r > 0) {
            s.pop()
            r--;
        }

        return s.length === 0 ? 0n : BigInt(s.join(''))
    }

    return banks.reduce((acc: bigint, curr: string) => {
        return acc + removeKDigits(curr, 12)
    },0n)
};

export { part1, part2 };
