const input = await Deno.readTextFile("./input.txt");

const caloriesArray = input.split("\n\n")

const totalCaloriesArray = caloriesArray.reduce((acc, calories) => {
  const calorieSum = calories.split("\n").reduce((sum, calorie) => sum + parseInt(calorie), 0)
  return [...acc, calorieSum]
}, [])

console.log(Math.max(...totalCaloriesArray.filter(totalCalories => !!totalCalories) ))
