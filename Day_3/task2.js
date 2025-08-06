let student = {
  name: "Ali",
  age: 21,
  grade: "B",
  isGraduated: false
};

console.log("Name:", student.name);
console.log("Age:", student.age);

student.grade = "A";

console.log("Keys:", Object.keys(student));
console.log("Values:", Object.values(student));

student.email = "ali@example.com";

delete student.isGraduated;

console.log("Updated Student Object:", student);
