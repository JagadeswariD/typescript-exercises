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
var Student = /** @class */ (function () {
    function Student(name, age, grade) {
        this.studentName = name;
        this.studentAge = age;
        this.studentGrade = grade;
    }
    Student.prototype.displayInfo = function () {
        console.log("Student Name: ".concat(this.studentName, "\n Age:  ").concat(this.studentAge, "\n Grade: ").concat(this.studentGrade));
    };
    Student.prototype.isPassing = function (gradeThreshold) {
        return this.studentGrade >= gradeThreshold;
    };
    return Student;
}());
// Instantiate a new student object and call the methods to test your class
var student = new Student("Sathya", 39, 80);
console.log(student.isPassing(60));
student.displayInfo();
