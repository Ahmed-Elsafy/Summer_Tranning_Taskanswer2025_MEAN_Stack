// Task 1: Smart User Checker App

let userName = prompt("What's your name?");
let birthYear = prompt("Enter your birth year:");
let isStudent = confirm("Are you a student?");

let currentYear = new Date().getFullYear();
let age = currentYear - Number(birthYear);

let category = "";

if (age < 13) {
  category = "Kid";
} else if (age >= 13 && age <= 17) {
  category = "Teen";
} else if (age >= 18 && age <= 59) {
  category = "Adult";
} else {
  category = "Senior";
}

let message = `Hello ${userName}, you are ${age} years old.\nCategory: ${category}.`;

if (isStudent) {
  message += "\nDon't forget to study hard!";
}

// Show output
console.log(message);
alert(message);
document.getElementById("result").innerText = message;
