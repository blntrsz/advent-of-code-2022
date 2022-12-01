const input = await Deno.readTextFile("./input.txt");

const caloriesArray = input.split("\n\n")

let totalCaloriesArray = caloriesArray.reduce((acc, calories) => {
  const calorieSum = calories.split("\n").reduce((sum, calorie) => sum + parseInt(calorie), 0)
  return [...acc, calorieSum]
}, []).filter(totalCalories => !!totalCalories)

const firstHighest = Math.max(...totalCaloriesArray )
totalCaloriesArray = totalCaloriesArray.filter(totalCalories => totalCalories !== firstHighest)
const secondHighest = Math.max(...totalCaloriesArray )
totalCaloriesArray  = totalCaloriesArray.filter(totalCalories => totalCalories !== secondHighest )
const thirdHighest = Math.max(...totalCaloriesArray )

console.log(firstHighest + secondHighest + thirdHighest)

