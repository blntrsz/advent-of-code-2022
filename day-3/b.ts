const input = await Deno.readTextFile("./input.txt");

function groupArr(data, n) {
    var group = [];
    for (var i = 0, j = 0; i < data.length; i++) {
        if (i >= n && i % n === 0)
            j++;
        group[j] = group[j] || [];
        group[j].push(new Set(data[i]))
    }
    return group;
}

const backpackLoads = groupArr(input.split("\n"), 3)


const charScores = Array.from(Array(52).keys()).reduce((acc, i) => {
  Object.assign(acc, {[String.fromCharCode(i + (i < 26 ? 97 : 39))]: i + 1})

  return acc
}, {})

const prioritazionScore = backpackLoads.reduce((acc, backpackLoad) => {
  for (const item of backpackLoad[0]) {
    if(backpackLoad[1].has(item) && backpackLoad[2].has(item)) {
      return acc + charScores[item]
    }
  }

  return acc
}, 0)


console.log(prioritazionScore)


