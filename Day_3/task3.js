let students = [
  { name: "Sara", age: 22, grade: "B", isGraduated: true },
  { name: "Omar", age: 20, grade: "A", isGraduated: false },
  { name: "Laila", age: 23, grade: "C", isGraduated: true }
];

let totalAge = 0;
let graduated = 0;
let notGraduated = 0;

for (let i = 0; i < students.length; i++) {
  totalAge += students[i].age;

  if (students[i].isGraduated) {
    graduated++;
  } else {
    notGraduated++;
  }

  console.log(`Student ${i + 1} keys:`, Object.keys(students[i]));
  console.log(`Student ${i + 1} values:`, Object.values(students[i]));
}

let newStudent = {
  name: "Mona",
  age: 21,
  grade: "B",
  isGraduated: false,
  email: "mona@example.com"
};

students.push(newStudent);

for (let student of students) {
  delete student.isGraduated;
}

let avgAge = totalAge / students.length;

console.log("Student Names:");
students.forEach((s) => console.log(s.name));

console.log("Average Age:", avgAge);
console.log("Graduated:", graduated);
console.log("Not Graduated:", notGraduated);
