/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */

export {}; // quick fix for global variable

/**
 * 1. function declaration, expression, arrow
 * 2. optional & default parameters
 * 3. rest parameter
 * 4. conditional type with union, generic, overlods
 */

/********** 1. Basic Function  ***********/
/* Function Declaration, Expession, Arrow
 */

// function declaration
// function add(x, y) {
//     return x + y;
// }

// function expression
// const addEx = function (x, y) {
//     return x + y;
// };

// arrow function
// const addArrow = (x, y) => x + y;

// function with no return value
// const hello = (name) => console.log("hello " + name)

// function with callback
// function request(url,cb){

// }

type Greeter = (string: string) => void;
const callback = (url: string, cb: Greeter) => {
    return cb(url);
};
const fn = (url: string) => {
    console.log(url);
};
callback('www.google.com', fn);
/********** 2. optional & default parameters  ***********/
/*
| parameters | required | default value |
| ---------- | -------- | ------------- |
| firstName  | Yes      |               |
| lastName   | Yes      |               |
| gender     | No       |               |
| languange  | No       | english       |
*/

/*
function submitContact(firstName, lastName, languange, gender){
  return {
    firstName,
    lastName
    languange
  }
}
*/

const submitContact = (firstName: string, lastName: string, gender?: string, languange = 'english') => {
    return {
        firstName,
        lastName,
        languange,
        gender,
    };
};

const coba = submitContact('Labib', 'Ansorudin', 'boy', 'indonesia');
console.log(coba);

/********** 3. Rest Parameter  ***********/
/*
function fruitsCollection(item, ...restItems) {
  return item + " " + restItems.join(" ");
}
let fruits = fruitsCollection('Apple', 'Mango', 'Avocado');
// console.log(fruits);
*/

// kalau rest parameter, bentuk tipe data nya adalah array of, disini contohnya array of string => string[]
const fruitsCollection = (item: string, ...restItems: string[]) => {
    return console.log(item + ' ' + restItems.join(' '));
};
const fruits = fruitsCollection('apple', 'manggo', 'avocado');

/********* 4. conditional type with union ***********/
/*
  - accept parameter either string or number
  - return either string or number
  - don't use `any`
*/
// function CT(param) {
//   return param
// }

// pake union ( dua tipe data atau lebih dengan "|" )
const CT = (params: string | number) => {
    return params;
};
