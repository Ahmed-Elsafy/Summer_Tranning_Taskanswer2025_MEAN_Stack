let numbers = [10, -5, 7, -2, 15, 3, -8, 4, -1, 6];

let sumPositive = 0;
let totalSum = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < 0) continue;
  sumPositive += numbers[i];
}

for (let i = 0; i < numbers.length; i++) {
  totalSum += numbers[i];
}

console.log("Sum of positive numbers:", sumPositive);
console.log("Sum of all numbers:", totalSum);

numbers.push(20);
numbers.shift();

console.log("Updated array:", numbers);
