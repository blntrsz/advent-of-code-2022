interface Knot {
  x: number;
  y: number;
}

const moveKnot = (headKnot: Knot, tailKnot: Knot) => {
  if (
    Math.abs(headKnot.x - tailKnot.x) < 2 &&
    Math.abs(headKnot.y - tailKnot.y) < 2
  ) {
    return;
  }

  if (headKnot.x > tailKnot.x) {
    tailKnot.x++;
  }

  if (headKnot.x < tailKnot.x) {
    tailKnot.x--;
  }

  if (headKnot.y > tailKnot.y) {
    tailKnot.y++;
  }

  if (headKnot.y < tailKnot.y) {
    tailKnot.y--;
  }
};

const add = (s: Set<string>, knot: Knot) => {
  s.add(`x${knot.x}y${knot.y}`);
};

const createRope = (knotCount: number) => {
  return new Array(knotCount).fill(0).map(() => ({
    x: 0,
    y: 0,
  }));
};

const calculateTailCoverage = (input: string, knotCount: number) => {
  const s = new Set<string>();

  const rope = createRope(knotCount);
  console.log(rope);

  add(s, rope[rope.length - 1]);

  input
    .split("\n")
    .filter((i) => !!i)
    .forEach((line) => {
      const [direction, moveCount] = line.split(" ");

      for (let i = 0; i < parseInt(moveCount); i++) {
        if (direction === "L") rope[0].x--;
        if (direction === "U") rope[0].y++;
        if (direction === "R") rope[0].x++;
        if (direction === "D") rope[0].y--;

        rope.forEach((_k, index) => {
          if (index === 0) {
            return;
          }

          moveKnot(rope[index - 1], rope[index]);
        });

        add(s, rope[rope.length - 1]);
      }
    });

  return s.size;
};

export const partOne = (input: string) => {
  return calculateTailCoverage(input, 2);
};

export const partTwo = (input: string) => {
  return calculateTailCoverage(input, 10);
};
