let a = 'Alena'
let b = '77777'

const person = new User(a, b);
console.log(person);
console.log(person.username);
console.log(person.validatePassword());

let firstStudent = new Student(a, b, 'Alen7');
console.log(firstStudent);
console.log(firstStudent.getStudentCourses());
console.log(firstStudent.validatePassword());
