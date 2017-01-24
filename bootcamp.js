function Bootcamp (title, location) {
  this.title = title;
  this.students = [];
  this.instructors = [];
  this.location = location;
}

Bootcamp.prototype.addStudent = function (name) {
  this.students.push(new Student(name));
};

Bootcamp.prototype.addInstructor = function (name) {
  this.instructors.push(new Instructor(name));
};

//Bootcamp.

function Student (name, age) {
  this.name = name;
  this.age = age;
}

Student.prototype.sayName = function () {
  console.log("Hello, my name is " + this.name + ", I am a student");
};

function Instructor (name, age) {
  this.name = name;
  this.age = age;
}

Instructor.prototype.sayName = function () {
  console.log("Hello, my name is " + this.name + ", I am an instructor");
}

module.exports = Bootcamp;
