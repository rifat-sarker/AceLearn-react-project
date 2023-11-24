---------------------------MCQ TEST----------------------------
--------------------------------------------------------------
1. Write the correct answer from the following options and give an explanation (2-5 lines).
let greeting;
greetign = {};
console.log(greetign);

A: {}
B: ReferenceError: greetign is not defined
C: undefined

Answer : B
explanation: A variable named 'greeting' declared without assigning value.Then greetign assgined a empty object without declaration so if we want to console the greetign it will give reference error greetign is not defined.


2. Write the correct answer from the following options and give an explanation (2-5 lines).

function sum(a, b) {
  return a + b;
}

sum(1, "2");
A: NaN
B: TypeError
C: "12"
D: 3
Answer: C
explanation: The two parameter values are numeric and string.When we use '+' operator to concatenate Javascript will converts numeric value to string. So output will definitely become a string.


3. Write the correct answer from the following options and give an explanation (2-5 lines).

const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
A: ['🍕', '🍫', '🥑', '🍔']
B: ['🍝', '🍫', '🥑', '🍔']
C: ['🍝', '🍕', '🍫', '🥑', '🍔']
D: ReferenceError
Answer: A
explanation: There is no change in food variable so if we console the food variable it will become the same as before.


4. Write the correct answer from the following options and give an explanation (2-5 lines).

 
Answer: B
explanation: when calling the function it didn't pass any value in the paramter so it will become undefined.

5. Write the correct answer from the following options and give an explanation (2-5 lines).
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
A: 1
B: 2
C: 3
D: 4
Answer: C
explanation: forEach() function looped each of element it didn't return anything.Condition checks truthy values where 0 is falsy value. After the increments (+=1) conditions final count value is 3 . It's a truthy value.