const parseMonkeys = (blocks: string[][]) => {
  return blocks.map((block) => {
    return {
      startingItems: block[1]
        .replace("  Starting items: ", "")
        .split(", ")
        .map((i) => parseInt(i)),
      operation: (old: number): number =>
        eval(
          block[2].replace("  Operation: new =", "").replace(/old/g, `${old}`)
        ),
      divisibleBy: parseInt(block[3].replace("  Test: divisible by ", "")),
      trueTest: parseInt(block[4].replace("    If true: throw to monkey", "")),
      falseTest: parseInt(
        block[5].replace("    If false: throw to monkey", "")
      ),
      inspectCount: 0,
    };
  });
};

type Monkeys = ReturnType<typeof parseMonkeys>;

const evalMonkeyOperation = (
  monkeys: Monkeys,
  currentMonkey: number,
  operationFunction: (opearion: Function, item: number) => number
) => {
  const monkey = monkeys[currentMonkey];

  monkey.startingItems.forEach((item) => {
    const operationValue = operationFunction(monkey.operation, item);

    if (operationValue % monkey.divisibleBy === 0) {
      monkeys[monkey.trueTest].startingItems.push(operationValue);
    } else {
      monkeys[monkey.falseTest].startingItems.push(operationValue);
    }
  });

  monkey.inspectCount += monkey.startingItems.length;
  monkey.startingItems = [];
};

export const partOne = (input: string) => {
  const lines = input.split("\n\n").filter((i) => !!i);
  const blocks = lines.map((line) => line.split("\n").filter((i) => !!i));
  const monkeys = parseMonkeys(blocks);

  for (let i = 0; i < 20; i++) {
    monkeys.forEach((_monkey, index) => {
      evalMonkeyOperation(monkeys, index, (operation, item) =>
        Math.floor(operation(item) / 3)
      );
    });
  }

  const inspects = monkeys
    .map((monkey) => monkey.inspectCount)
    .sort((a, b) => a - b)
    .reverse();

  return inspects[0] * inspects[1];
};

export const product = (a: number[]) => a.reduce((p, n) => p * n, 1);

export const partTwo = (input: string) => {
  const lines = input.split("\n\n").filter((i) => !!i);
  const blocks = lines.map((line) => line.split("\n").filter((i) => !!i));
  const monkeys = parseMonkeys(blocks);

  const lcmOfDivisors = product(monkeys.map((m) => m.divisibleBy));

  for (let i = 0; i < 10_000; i++) {
    monkeys.forEach((_monkey, index) => {
      evalMonkeyOperation(monkeys, index, (operation, item) => {
        return operation(item % lcmOfDivisors);
      });
    });
  }

  const inspects = monkeys
    .map((monkey) => monkey.inspectCount)
    .sort((a, b) => a - b)
    .reverse();

  return inspects[0] * inspects[1];
};
