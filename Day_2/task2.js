// Task 2: Employee Evaluation Program

let empName = prompt("Enter employee name:");
let empAge = prompt("Enter employee age:");
let expYears = Number(prompt("Years of experience:"));
let selfRating = Number(prompt("Rate yourself from 1 to 10:"));
let baseSalary = 5000;

let jobLevel = "";
if (expYears < 2) {
  jobLevel = "Junior";
} else if (expYears <= 5) {
  jobLevel = "Mid-Level";
} else if (expYears <= 10) {
  jobLevel = "Senior";
} else {
  jobLevel = "Expert";
}

let performance = "";
switch (true) {
  case (selfRating >= 9):
    performance = "Excellent";
    break;
  case (selfRating >= 7):
    performance = "Good";
    break;
  case (selfRating >= 5):
    performance = "Average";
    break;
  default:
    performance = "Needs Improvement";
}

let bonusPercent = 0;
if (expYears < 3) {
  bonusPercent = 0.10;
} else if (expYears <= 5) {
  bonusPercent = 0.15;
} else {
  bonusPercent = 0.20;
}

let finalSalary = baseSalary + (baseSalary * bonusPercent);

let currentHour = new Date().getHours();
let shift = (currentHour >= 9 && currentHour < 18) ? "Day Shift" : "Night Shift";

let output = `
Name: ${empName}
Age: ${empAge}
Experience: ${expYears} years
Job Level: ${jobLevel}
Performance: ${performance}
Final Salary: ${finalSalary} EGP
Shift: ${shift}
`;

console.log(output);
alert(output);
document.getElementById("result").innerText += "\n\n" + output;
