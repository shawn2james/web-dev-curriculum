// console.log('Hello World');
// console.error('This is an error');
// console.warn('This is an warning');

// // VARIABLES
// // var, let, const
// // let age = 30;
// // age = 31;

// // console.log(age);

// // PRIMITIVE DATA TYPES
// // String, Numbers, Boolean, null, undefined, Symbol
// const name = 'John';
// const age = 30;
// const rating = 4.5;
// const isCool = true;
// const x = null;
// const y = undefined; // let z; would also work

// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof rating);
// console.log(typeof isCool);
// console.log(typeof x);
// console.log(typeof y);

// // TEMPLATE STRINGS
// console.log(`my name is ${name} and I am ${age}`);

// // STRING METHODS
// const s = "Shawn James";
// console.log(s.length);
// console.log(s.toUpperCase());
// console.log(s.toLowerCase());
// console.log(s.substring(2, 8));
// console.log(s.split(''));
// console.log(s.split(' '));

// // ARRAYS
// const numbers = new Array(1, 2, 3, 4, 5);
// console.log(numbers);

// const fruits = ['apples', 'oranges', 'pears'];
// console.log(fruits);
// console.log(fruits[2]);
// fruits[3] = "grapes";
// console.log(fruits);
// fruits.push('mangoes')
// console.log(fruits);
// fruits.unshift('strawberries');
// console.log(fruits);
// fruits.pop();
// console.log(fruits);

// console.log(Array.isArray(fruits));
// console.log(fruits.indexOf('oranges'));

// // OBJECT LITERALS
// const person = {
//     name: 'Shawn James',
//     age: 30,
//     hobbies: ['coding', 'piano', 'reading'],
//     address: {
//         street: 'Vikas nagar',
//         city: 'Kalpetta',
//         district: 'Wayanad'
//     }
// }
// console.log(person.name, person.age, person.hobbies[1], person.address.city);

// //destructuring
// const { hobbies, address:{city} } = person;
// console.log(city);

// person.email = "shawn2james@gmail.com";
// console.log(person);

// const todos = [
//     {
//         id: 1,
//         text: 'Take out trash',
//         isCompleted: true
//     },
//     {
//         id: 2,
//         text: 'Meeting with boss',
//         isCompleted: true
//     },
//     {
//         id: 3,
//         text: 'Dentist appointment',
//         isCompleted: false
//     }
// ];
// console.log(todos[1].text);

// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON);

// // FOR LOOP
// for(let i=1; i<=10; i++){ console.log(i); }

// // WHILTE LOOP
// let i=0;
// while(i<=10) {
//     console.log(i);
//     i++;
// }

// // LOOPING THROUGH ARRAYS
// for(let i=0; i<fruits.length; i++){ console.log(fruits[i]); }
// console.log("\n");
// for(let fruit of fruits){ console.log(fruit); }

// // forEach 
// console.log("\n");
// fruits.forEach(function(fruit) {
//     console.log(fruit);
// })

// // map 
// console.log("\n");
// const todosText = todos.map(function(todo) { return todo.text; })
// console.log(todosText);

// // filter
// console.log("\n");
// const todoCompleted = todos.filter(function(todo) {
//     return todo.isCompleted==true;
// })
// console.log(todoCompleted);

// const todoCompletedText = todos.filter(function(todo) {
//     return todo.isCompleted==true;
// }).map(function(todo) {
//     return todo.text;
// })
// console.log(todoCompletedText);

// CONDITIONAL STATEMENTS
const x = '10';
// == matches value
// === matches value and data type

if(x==10) { console.log('x is 10'); }
if(x===10) { 
    console.log('x is an int 10'); 
} else if(x>10) {
    console.log('x is greater than 10');
} else {
    console.log('x is not int 10'); 
}

const y = 10;
if(x>5 || y<10){
    console.log('x is more than 5 or y is less than 10');
}
if(x>5 && y<10){
    console.log('x is more than 5 and y is less than 10');
}

// terniary operator
const a = 12;
const color = x>10 ? 'red' : 'blue';
console.log(color);

// switch statement
switch(color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is not red or blue');
}


// FUNCTIONS
function addNums(a=1, b=1) {
    return a+b;
}

console.log(addNums())
console.log(addNums(2));
console.log(addNums(b=3));
console.log(addNums(5, 2));

// arrow function
const add = (a, b) => a+b; 
console.log(add(5, 2));


// Constructor function
// function Person(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
// }

// Person.prototype.getBirthYear = function() { 
//     return this.dob.getFullYear();
// }

// Person.prototype.getFullName = function() { 
//     return `${this.firstName} ${this.lastName}`;
// }

// ES6 Class
class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear = () => this.dob.getFullYear(); 

    getFullName = () => `${this.firstName} ${this.lastName}`;
}

const person1 = new Person("Shawn", "James", "01-01-2004");
const person2 = new Person("Shimron", "Alakkal", "03-08-2003");
console.log(person1);
console.log(person2);
console.log(person1.getBirthYear());
console.log(person1.getFullName());




















