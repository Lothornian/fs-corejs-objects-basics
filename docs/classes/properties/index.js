class Teacher {
  constructor(name, students){
    this._name = name;
    this._students = students;
  }

  addStudent(student){
    this._students.push(student);
  }

  get students() {
    return this._students;
  }
}

class Student {
  constructor(name, tests){
    this._name = name;
    this._tests = tests;
  }

  get name() {
    return this._name;
  }

  /**
  * addTest
  * @param test This is an instance of the test class. getAverage will break if it isn't.
  * TODO update to ensure test is an instance of Test.
  * adds a test to the student.
  */
  addTest(test){
    this._tests.push(test);
  }

  /**
  * getAverage
  * @return the students average
  */
  getAverage(){
    let total = 0;
    this._tests.forEach(function(item, index, array){
      total += item.grade;
    });
    let average =total / this._tests.length;
    return average;
  }//end getAverage

}

class Test {
  constructor(name, grade){
    this._name = name;
    this._grade = grade;
  }

  get grade() {
    return this._grade;
  }

  set grade(grade){
    this._grade = grade;
  }
}

let kyle = new Teacher("Kyle", [] );
let jeff = new Student("Jeff", [] );
let test1 = new Test("Git", 100);
let test2 = new Test("JSObjects", 65);

jeff.addTest(test1);
jeff.addTest(test2);

kyle.addStudent(jeff);

let blaketest1 = new Test("syntax", 100);
let blaketest2 = new Test("JSObjects", 29);
let blake = new Student("Blake", [ blaketest1, blaketest2 ] );

kyle.addStudent(blake);

// let jeffsGrade = jeff.getAverage();
// console.log(jeffsGrade);

console.log("Grades from Kyle's part time class");
kyle.students.forEach(function(item, index, array){
  console.log(item.name + "'s grade is " + item.getAverage() + "%");
});
