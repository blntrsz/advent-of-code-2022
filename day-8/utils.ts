export const partOne = (input: string) => {
  let visible = 0;
  const trees = input
    .split("\n")
    .map((i) => i.split("").map((s) => parseInt(s)))
    .filter((a) => !!a.length);

  trees.forEach((treeRow, treeRowIndex) => {
    treeRow.forEach((tree, treeIndex) => {
      if (
        // left edge
        trees?.[treeRowIndex]?.[treeIndex - 1] === undefined ||
        // top edge
        trees?.[treeRowIndex - 1]?.[treeIndex] === undefined ||
        // right edge
        trees?.[treeRowIndex]?.[treeIndex + 1] === undefined ||
        // bottom edge
        trees?.[treeRowIndex + 1]?.[treeIndex] === undefined
      ) {
        visible++;
        return;
      }

      const leftHighest = Math.max(...treeRow.slice(0, treeIndex));
      const rightHighest = Math.max(...treeRow.slice(treeIndex + 1));

      const yAxis = trees.map((t) => t[treeIndex]);

      const topHighest = Math.max(...yAxis.slice(0, treeRowIndex));
      const bottomHighest = Math.max(...yAxis.slice(treeRowIndex + 1));

      if (
        tree > leftHighest ||
        tree > topHighest ||
        tree > rightHighest ||
        tree > bottomHighest
      ) {
        visible++;
        return;
      }
    });
  });

  return visible;
};

const findCount = (arr: number[], treeHeight: number) => {
  const count = arr.findIndex((item) => item >= treeHeight);

  if (count === -1) {
    return arr.length;
  }

  return count + 1;
};

export const partTwo = (input: string) => {
  let best = 0;
  const trees = input
    .split("\n")
    .map((i) => i.split("").map((s) => parseInt(s)))
    .filter((a) => !!a.length);

  trees.forEach((treeRow, treeRowIndex) => {
    treeRow.forEach((tree, treeIndex) => {
      const l = treeRow.slice(0, treeIndex).reverse();
      const lc = findCount(l, tree);
      const r = treeRow.slice(treeIndex + 1);
      const rc = findCount(r, tree);

      const yAxis = trees.map((t) => t[treeIndex]);
      const t = yAxis.slice(0, treeRowIndex).reverse();
      const tc = findCount(t, tree);
      const b = yAxis.slice(treeRowIndex + 1);
      const bc = findCount(b, tree);

      const possibleBest = lc * rc * tc * bc;

      if (possibleBest > best) {
        best = possibleBest;
      }
    });
  });

  return best;
};
