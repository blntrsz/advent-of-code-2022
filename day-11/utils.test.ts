import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import { partOne, partTwo } from "./utils.ts";
import { input } from "./input.ts";

const testInput = `
Monkey 0:
  Starting items: 79, 98
  Operation: new = old * 19
  Test: divisible by 23
    If true: throw to monkey 2
    If false: throw to monkey 3

Monkey 1:
  Starting items: 54, 65, 75, 74
  Operation: new = old + 6
  Test: divisible by 19
    If true: throw to monkey 2
    If false: throw to monkey 0

Monkey 2:
  Starting items: 79, 60, 97
  Operation: new = old * old
  Test: divisible by 13
    If true: throw to monkey 1
    If false: throw to monkey 3

Monkey 3:
  Starting items: 74
  Operation: new = old + 3
  Test: divisible by 17
    If true: throw to monkey 0
    If false: throw to monkey 1
`;

Deno.test("test part one dummy input", () => {
  assertEquals(partOne(testInput), 10605);
});

// Deno.test("test part one input", () => {
//   assertEquals(partOne(input), undefined);
// });
//
Deno.test("test part two dummy input", () => {
  assertEquals(partTwo(testInput), 2713310158);
});
//
// Deno.test("test part two input", () => {
//   assertEquals(partOne(input), undefined);
// });
