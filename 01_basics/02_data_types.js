"use strict";  // Treat all the JS code as newer version

// alert("Hello")   // we are using Node.js not browser

let name = "Raj Patil"
let age = 22
let degree = true
// PRIMITIVE DATA-TYPES 
// number => 2 to power 53
// bigint => for bigger number
// string => " "
// boolean => true/false
// null => stand alone value 
// undefined => value not given 
// symbol => unique 

console.log(name);
console.log(typeof name, typeof age, typeof degree); // string, number, boolean
console.table([name,age,degree])

console.log(typeof null); // object (is a type of OBJECT)
console.log(typeof undefined); // undefined (because it is a type in JS)

// NON-PRIMITIVE DATA-TYPES 
// object 
// array 