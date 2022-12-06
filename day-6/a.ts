const input = await Deno.readTextFile("./input.txt");

let processed = 4

let s = new Set()

while (s.size !== 4) {
  s = new Set(input.substring(processed - 4,  processed))
  console.log(s)

  processed++
}

console.log(processed - 1)

