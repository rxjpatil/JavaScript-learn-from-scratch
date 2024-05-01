"use strict";  // Treat all the JS code as newer version

// alert("Hello")   // we are using Node.js not browser

let name = "Raj Patil"
let age = 22
let degree = true
// PRIMITIVE DATA-TYPES 

// Primitive data types are the most basic data types in JavaScript. 
// They are immutable, meaning that their values cannot be changed once they are assigned. 
// Primitive data types are stored directly in memory.


// **************** number ****************** => 
/* JavaScript numbers are always stored in double-precision 64-bit binary format IEEE 754. 
   Unlike other programming languages, you don’t need int, float, etc to declare different numeric values.  */


// **************  bigint ****************** => 
// BigInt is a built-in object in JavaScript that provides a way to represent whole numbers larger than 253-1


// **************** string ***************** => 
// JavaScript Strings are similar to sentences. 
// They are made up of a list of characters, which is essentially just an “array of characters, like "Hello Seven" etc.


// boolean => true/false


// *****************null ********************* => stand alone value 
// This type has only one value that is null.


// ***************undefined **************** => 
// A variable that has not been assigned a value is undefined.


// *************** symbol ********************* => 
// Symbols return unique identifiers that can be used to add unique property keys to an object that won’t collide with keys of any other code that might add to the object. 

console.log(name);
console.log(typeof name, typeof age, typeof degree); // string, number, boolean
console.table([name,age,degree])

console.log(typeof null); // object (is a type of OBJECT)
console.log(typeof undefined); // undefined (because it is a type in JS)

// NON-PRIMITIVE DATA-TYPES 

// Non-primitive data types are more complex data types that can store multiple values. 
// They are mutable, meaning that their values can be changed. 
// Non-primitive data types are stored as references to their values in memory.


// object 
// array 

