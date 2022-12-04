const input = await Deno.readTextFile("./input.txt");

const lines: string[] = input.split("\n");

const groups = lines.map((line) => {
  return line.split(",").map((lineSpit) => lineSpit.split("-"));
});

const getGroupSafely = (
  groups: string[][],
  first: number,
  second: number,
): number => {
  return parseInt(groups?.[first]?.[second]) ?? 0;
};

const count = groups.reduce((acc, group) => {
  if (
    getGroupSafely(group, 0, 0) - getGroupSafely(group, 1, 0) >= 0 &&
    getGroupSafely(group, 0, 1) - getGroupSafely(group, 1, 1) <= 0
  ) {
    return acc + 1;
  }

  if (
    getGroupSafely(group, 1, 0) - getGroupSafely(group, 0, 0) >= 0 &&
    getGroupSafely(group, 1, 1) - getGroupSafely(group, 0, 1) <= 0
  ) {
    return acc + 1;
  }

  return acc;
}, 0);

console.log(count)
