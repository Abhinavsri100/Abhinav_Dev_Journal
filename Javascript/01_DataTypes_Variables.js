/** @format */

var name = "Abhinav"; //var no longer used in modern JS

const pi = 3.14; //can;t be re-assigned

let number = 42; //Number

let text = "Hello, World!"; //String

let isActive = true; //Boolean

let items = [1, 2, 3, 4, 5]; //Array

let nothing = null; //Object

let undefinedValue = undefined; //Undefined

let symebolValue = Symbol("unique"); //Symbol
let bigIntValue = BigInt(123456789012345678901234567890); //BigInt
let objectValue = {
  name: "Abhinav",
  age: 30,
  isActive: true,
}; //Object
let dateValue = new Date(); //Date
let regexValue = /abhinav/i; //RegExp
let functionValue = function () {
  console.log("This is a function");
}; //Function
let jsonValue = JSON.parse('{"name": "Abhinav", "age": 30}'); //JSON

// Note->Everything in js is an object except for primitive data types like string, number, boolean, null, undefined, symbol, and bigint.
// Note->In modern JavaScript, it is recommended to use let and const instead of var for variable declarations.
// Note->const is used for variables that should not be reassigned, while let is used for variables that can be reassigned.
// Note->The typeof operator can be used to check the type of a variable.
console.log(typeof name); //string
console.log(typeof pi); //number
console.log(typeof number); //number
console.log(typeof text); //string
console.log(typeof isActive); //boolean
console.log(typeof items); //object (arrays are objects in JS)
console.log(typeof nothing); //object (null is considered an object in JS)
console.log(typeof undefinedValue); //undefined
console.log(typeof symebolValue); //symbol
console.log(typeof bigIntValue); //bigint
console.log(typeof objectValue); //object
console.log(typeof dateValue); //object (Date is an object in JS)
console.log(typeof regexValue); //object (RegExp is an object in JS)
console.log(typeof functionValue); //function (functions are objects in JS)
console.log(typeof jsonValue); //object (JSON is parsed into an object in JS)
console.log(typeof functionValue()); //undefined (functions return undefined by default if no return value is specified)
console.log(functionValue); //function (functions are objects in JS)

let num = "42";
let convertedNumber = Number(num); //Converts string to number and it is the standard way to convert a string to a number in JavaScript
let num2 = "42a";
let convertedNumber2 = Number(num2); //NaN (Not a Number) because the string contains non-numeric characters

let num3 = "42b";
let convertedNumber3 = parseInt(num3); //Converts string to integer, stops at the first non-numeric character

let num4 = "c42b";
let convertedNumber4 = parseInt(num4); //NaN (Not a Number) because the string does not start with a numeric character

let str = 123;
let convertedString = String(str); //Converts number to string

console.log(Math.PI);
console.log(Math.max(5, 10, 16, 2, 8)); //Returns the largest of the given numbers
console.log(Math.min(5, 10, 16, 2, 8));

let firstName = "Abhinav";
let lastName = "Srivastava";
let fullName = firstName + " " + lastName; //Concatenation of strings
console.log(fullName); //Abhinav Srivastava
let message = "hello World";
console.log(message.length); //Length of the string
console.log(message.toUpperCase()); //HELLO WORLD
console.log(message.toLowerCase()); //hello world
console.log(message.indexOf("World")); //6 (index of the first occurrence of "World")
console.log(message.includes("World")); //true (checks if "World" is present in the string)
console.log(message.startsWith("hello")); //true (checks if the string starts with "hello")
console.log(message.endsWith("World")); //true (checks if the string ends with "World")
console.log(message.replace("World", "JavaScript")); //hello JavaScript (replaces "World" with "JavaScript")
console.log(message.split(" ")); //["hello", "World"] (splits the string into an array of substrings using space as the delimiter)
console.log(message.trim()); //hello World (removes whitespace from both ends of the string)
console.log(message.charAt(0)); //h (returns the character at index 0)
console.log(message.charCodeAt(0)); //104 (returns the Unicode value of the character at index 0)
console.log(message.slice(0, 5)); //hello (extracts a portion of the string from index 0 to index 5, not including index 5)
console.log(message.substring(0, 5)); //hello (similar to slice, but does not accept negative indices)
console.log(message.lastIndexOf("o")); //4 (returns the index of the last occurrence of "o")
console.log(message.search("World")); //6 (returns the index of the first occurrence of "World", similar to indexOf)
console.log(message.repeat(2)); //hello Worldhello World (repeats the string 2 times)
