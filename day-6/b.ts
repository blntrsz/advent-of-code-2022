const input = await Deno.readTextFile("./input.txt");

let processed = 14

let s = new Set()

while (s.size !== 14) {
  s = new Set(input.substring(processed - 14,  processed))
  console.log(s)

  processed++
}

console.log(processed - 1)


