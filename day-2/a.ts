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
  ROCK = "X",
  PAPER = "Y",
  SCISSOR = "Z",
}

const scoreBoard = {
  [`${t.ROCK} ${m.ROCK}`]: 1 + 3,
  [`${t.ROCK} ${m.PAPER}`]: 2 + 6,
  [`${t.ROCK} ${m.SCISSOR}`]: 3 + 0,

  [`${t.PAPER} ${m.ROCK}`]: 1 + 0,
  [`${t.PAPER} ${m.PAPER}`]: 2 + 3,
  [`${t.PAPER} ${m.SCISSOR}`]: 3 + 6,

  [`${t.SCISSOR} ${m.ROCK}`]: 1 + 6,
  [`${t.SCISSOR} ${m.PAPER}`]: 2 + 0,
  [`${t.SCISSOR} ${m.SCISSOR}`]: 3 + 3,
};

const partOne = () => {
  const fullScore = strategies.reduce((acc, strategy) => {
    return acc + scoreBoard[strategy];
  }, 0);

  console.log(fullScore);
};

partOne();
