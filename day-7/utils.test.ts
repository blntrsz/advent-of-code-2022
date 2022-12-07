import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import { partOne, partTwo } from "./utils.ts";
import { input as assignmentInput } from "./input.ts";

const input = `
$ cd /
$ ls
dir a
14848514 b.txt
8504156 c.dat
dir d
$ cd a
$ ls
dir e
29116 f
2557 g
62596 h.lst
$ cd e
$ ls
584 i
$ cd ..
$ cd ..
$ cd d
$ ls
4060174 j
8033020 d.log
5626152 d.ext
7214296 k
`;

Deno.test("test part one dummy input", () => {
  assertEquals(partOne(input), 95437);
});

Deno.test("test part one real input", () => {
  assertEquals(partOne(assignmentInput), 1581595);
});

Deno.test("test part two dummy input", () => {
  assertEquals(partTwo(input), 24933642);
});

Deno.test("test part two real input", () => {
  assertEquals(partTwo(assignmentInput), 1544176);
});
