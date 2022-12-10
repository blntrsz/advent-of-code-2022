export const partOne = (input: string) => {
  let x = 1;

  const lines = input.split("\n").filter((l) => !!l);

  const process: number[] = [];

  lines.forEach((line) => {
    process.push(x);

    const [p, value] = line.split(" ");

    if (p === "addx") {
      process.push(x);

      x += parseInt(value);
    }
  });

  return (
    process[19] * 20 +
    process[59] * 60 +
    process[99] * 100 +
    process[139] * 140 +
    process[179] * 180 +
    process[219] * 220
  );
};

export const partTwo = (input: string) => {
  let x = 1;

  const lines = input.split("\n").filter((l) => !!l);

  const process: number[] = [];

  lines.forEach((line) => {
    process.push(x);

    const [p, value] = line.split(" ");

    if (p === "addx") {
      process.push(x);

      x += parseInt(value);
    }
  });

  const board: string[][] = [[], [], [], [], [], []];
  let line = 0;

  process.forEach((p, index) => {
    const i = index - 40 * line;
    if (p === i || p - 1 === i || p + 1 === i) {
      board[line].push("#");
    } else {
      board[line].push(".");
    }

    if (board[line].length === 40) {
      line++;
    }
  });

  return board.reduce(
    (bacc, b) => bacc + b.reduce((acc, el) => acc + el, "") + "\n",
    ""
  );
};
