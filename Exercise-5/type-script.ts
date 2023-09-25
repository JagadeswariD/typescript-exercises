/*Objective: Create a class named Student in TypeScript. The class should define certain properties and methods.

Properties:
studentName: string
studentAge: number
studentGrade: number
Constructor:
The constructor should take in the above three properties when instantiating a new student object.
Methods:
displayInfo(): Log the student's name, age, and grade to the console.
isPassing(gradeThreshold: number): Takes in a grade threshold and returns a boolean indicating if the student's grade is above the threshold.*/

class Student {
  studentName: string;
  studentAge: number;
  studentGrade: number;

  constructor(name: string, age: number, grade: number) {
    this.studentName = name;
    this.studentAge = age;
    this.studentGrade = grade;
  }
  displayInfo() {
    console.log(
      `Student Name: ${this.studentName}\n Age:  ${this.studentAge}\n Grade: ${this.studentGrade}`
    );
  }
  isPassing(gradeThreshold: number) {
    return this.studentGrade >= gradeThreshold;
  }
}

// Instantiate a new student object and call the methods to test your class
let student = new Student("Sathya", 39, 80);
console.log(student.isPassing(60));
student.displayInfo();
