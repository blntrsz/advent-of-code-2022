const input = await Deno.readTextFile("./input.txt");

let strategies = input.split("\n");

strategies = strategies.map((strategy) => {
  return strategy.substring(0, 3);
});

enum t {
  ROCK = "A",
  PAPER = "B",
  SCISSOR = "C",
}

enum m {
  LOSE = "X", // lose
  DRAW = "Y", // draw
  WIN = "Z", // win
}

// R: 1
// P: 2
// S: 3

const scoreBoard = {
  [`${t.ROCK} ${m.LOSE}`]: 0 + 3,
  [`${t.ROCK} ${m.DRAW}`]: 3 + 1,
  [`${t.ROCK} ${m.WIN}`]: 6 + 2,

  [`${t.PAPER} ${m.LOSE}`]: 0 + 1,
  [`${t.PAPER} ${m.DRAW}`]: 3 + 2,
  [`${t.PAPER} ${m.WIN}`]: 6 + 3,

  [`${t.SCISSOR} ${m.LOSE}`]: 0 + 2,
  [`${t.SCISSOR} ${m.DRAW}`]: 3 + 3,
  [`${t.SCISSOR} ${m.WIN}`]: 6 + 1,
};

const partTwo = () => {
  const fullScore = strategies.reduce((acc, strategy) => {
    return acc + scoreBoard[strategy];
  }, 0);

  console.log(fullScore);
};

partTwo();
