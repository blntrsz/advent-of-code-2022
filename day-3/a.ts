const input = await Deno.readTextFile("./input.txt");

const backpackLoads = input.split("\n").map(fullBackpackLoad => {
  const middle = fullBackpackLoad.length / 2;

  return [
    new Set(fullBackpackLoad.substring(0, middle)),
    new Set(fullBackpackLoad.substring(middle, fullBackpackLoad.length))
  ]
})

const charScores = Array.from(Array(52).keys()).reduce((acc, i) => {
  Object.assign(acc, {[String.fromCharCode(i + (i < 26 ? 97 : 39))]: i + 1})

  return acc
}, {})

const prioritazionScore = backpackLoads.reduce((acc, backpackLoad) => {
  for (const item of backpackLoad[0]) {
    if(backpackLoad[1].has(item)) {
      return acc + charScores[item]
    }
  }

  return acc
}, 0)


console.log(prioritazionScore)

