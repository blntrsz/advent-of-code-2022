import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import { partOne, partTwo } from "./utils.ts";

const testInput = `R 4
U 4
L 3
D 1
R 4
D 1
L 5
R 2
`;

Deno.test("test part one dummy input", () => {
  assertEquals(partOne(testInput), 13);
});

Deno.test("test part two dummy input", () => {
  assertEquals(partTwo(testInput), 1);
});
