const input = await Deno.readTextFile("./input.txt");

const lines: string[] = input.split("\n");

const groups = lines.map((line) => {
  const asd = line.split(",").map((lineSpit) => lineSpit.split("-"));
  return {
    aFirst: parseInt(asd?.[0]?.[0]),
    aSecond: parseInt(asd?.[0]?.[1]),
    bFirst: parseInt(asd?.[1]?.[0]),
    bSecond: parseInt(asd?.[1]?.[1]),
  }
});

const count = groups.reduce((acc, group) => {
  if (group.aFirst >= group.bFirst && group.aFirst <= group.bSecond) {
    return acc + 1
  }
  if (group.aSecond >= group.bFirst && group.aSecond <= group.bSecond) {
    return acc + 1
  }
  if (group.bFirst >= group.aFirst && group.bFirst <= group.aSecond) {
    return acc + 1
  }
  if (group.bSecond >= group.aFirst && group.bSecond <= group.aSecond) {
    return acc + 1
  }

  return acc;
}, 0);

console.log(count)
