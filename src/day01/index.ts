import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput.split(/\r?\n/).map(Number);

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);

  return input.reduce((acc, curr, index) => {
    if (index > 0) {
      const prev = input[index - 1];
      if (prev < curr) {
        return acc + 1;
      }
    }
    return acc;
  }, 0);
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);

  return input
    .map((value, i, array) => value + array[i + 1] + array[i + 2])
    .filter(Boolean)
    .filter((value, i, array) => value > array[i - 1]).length;
};

run({
  part1: {
    tests: [
      {
        input: `
          199
          200
          208
          210
          200
          207
          240
          269
          260
          263
        `,
        expected: 7,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `
          199
          200
          208
          210
          200
          207
          240
          269
          260
          263
        `,
        expected: 5,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
