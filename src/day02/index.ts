import run from "aocrunner";

type Action = "forward" | "down" | "up";
type Command = [Action, number];

const parseInput = (rawInput: string): Command[] => {
  return rawInput.split(/\r?\n/).map((line) => {
    const [action, number] = line.split(" ");
    return [action as Action, parseInt(number)];
  });
};

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);

  let hPos = 0;
  let depth = 0;

  input.forEach(([action, number]) => {
    switch (action) {
      case "forward":
        hPos += number;
        break;
      case "down":
        depth += number;
        break;
      case "up":
        depth -= number;
        break;
    }
  });

  return hPos * depth;
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);

  let hPos = 0;
  let depth = 0;
  let aim = 0;

  input.forEach(([action, value]) => {
    switch (action) {
      case "forward":
        hPos += value;
        depth += aim * value;
        break;
      case "down":
        aim += value;
        break;
      case "up":
        aim -= value;
        break;
    }
  });

  return hPos * depth;
};

run({
  part1: {
    tests: [
      {
        input: `
          forward 5
          down 5
          forward 8
          up 3
          down 8
          forward 2
        `,
        expected: 150,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `
          forward 5
          down 5
          forward 8
          up 3
          down 8
          forward 2
        `,
        expected: 900,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
