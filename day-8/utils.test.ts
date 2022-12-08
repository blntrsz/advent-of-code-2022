import {
  assertEquals,
  assertNotEquals,
} from "https://deno.land/std@0.167.0/testing/asserts.ts";
import { partOne, partTwo } from "./utils.ts";
import { input } from "./input.ts";

const testInput = `
30373
25512
65332
33549
35390
`;

Deno.test("test part one dummy input", () => {
  assertEquals(partOne(testInput), 21);
});

Deno.test("test part one dummy input", () => {
  assertEquals(partTwo(testInput), 8);
});
