const input = await Deno.readTextFile("./input.txt");

const [stacks, instructions]: string[] = input.split("\n\n");

const instructionLines = instructions.split("\n").filter((instructionLine) =>
  !!instructionLine
);
const stackLines = stacks.split("\n");

const columns = stackLines.pop()?.split(" ").filter(
  (stackLine) => !!stackLine,
) ?? [];

const reversedStackLine = stackLines.reverse();

const mappedStack = columns.map((_column, index) => {
  return reversedStackLine.reduce((acc, stackLine) => {
    return [...acc, stackLine.substring(index * 4, index * 4 + 3)];
  }, [] as string[]).filter((stackLine) => !/\ \ \ /.test(stackLine));
});

const int = instructionLines.map((instructionLines) => {
  return instructionLines.replace("move ", "").replace(" from ", ",").replace(
    " to ",
    ",",
  ).split(",").reduce((acc, n) => {
    return [...acc, parseInt(n)];
  }, [] as number[]);
});

int.forEach(([move, from, to]) => {
  for (let index = 0; index < move; index++) {
    const popped = mappedStack[from - 1].pop();
    mappedStack[to - 1].push(popped ?? "");
  }
});

mappedStack.forEach((stack) => {
  console.log(stack[stack.length - 1]);
});
