const MAX_SIZE = 100_000;

const splitTerminalInput = (input: string): string[] => {
  return input.split("$");
};

const calculateDirSizes = (input: string): Map<string, number> => {
  const m = new Map();
  let currentDir = "/";

  splitTerminalInput(input).forEach((terminal) => {
    if (terminal.startsWith(" cd")) {
      const cd = terminal.replace(/^\ cd\ /, "").replace("\n", "");

      if (cd === "..") {
        currentDir = currentDir.replace(/\/\w+$/, "");
        return;
      }

      if (cd === "/") {
        currentDir = "/";
        return;
      }

      currentDir = `${currentDir}/${cd}`;
      return;
    }

    if (terminal.startsWith(" ls")) {
      const ls = terminal.replace(/^\ ls\n/, "");
      const dirSize = ls.split("\n").reduce((acc, file) => {
        if (file.startsWith("dir") || file === "") {
          return acc;
        }

        return parseInt(file.split(" ")[0]) + acc;
      }, 0);

      m.set(currentDir, dirSize);
    }
  });

  return m;
};

export const partOne = (input: string) => {
  const m = calculateDirSizes(input);

  let acc = 0;

  m.forEach((value, key) => {
    let dirSum = 0;

    m.forEach((bvalue, bkey) => {
      if (bkey.startsWith(key)) {
        dirSum += bvalue;

        return;
      }
    });

    if (dirSum <= MAX_SIZE) {
      acc += dirSum;
    }
  });

  return acc;
};

const DISK_SIZE = 70_000_000;
const UPDATE_SIZE = 30_000_000;

export const partTwo = (input: string) => {
  const m = calculateDirSizes(input);
  let currentDiskSize = 0;

  m.forEach((size) => {
    currentDiskSize += size;
  });

  const minimumSpaceForUpdate = UPDATE_SIZE - (DISK_SIZE - currentDiskSize);

  let minimumToDelete = UPDATE_SIZE;

  m.forEach((value, key) => {
    let dirSum = 0;

    m.forEach((bvalue, bkey) => {
      if (bkey.startsWith(key)) {
        dirSum += bvalue;

        return;
      }
    });

    if (dirSum >= minimumSpaceForUpdate && dirSum < minimumToDelete) {
      minimumToDelete = dirSum;
    }
  });

  return minimumToDelete;
};
