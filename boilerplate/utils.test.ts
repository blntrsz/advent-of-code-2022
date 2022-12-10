import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import { partOne, partTwo } from "./utils.ts";
import { input } from "./input.ts";

const testInput = `

`;

Deno.test("test part one dummy input", () => {
  assertEquals(partOne(testInput), undefined);
});

Deno.test("test part one input", () => {
  assertEquals(partOne(input), undefined);
});

Deno.test("test part two dummy input", () => {
  assertEquals(partTwo(testInput), undefined);
});

Deno.test("test part two input", () => {
  assertEquals(partOne(input), undefined);
});
