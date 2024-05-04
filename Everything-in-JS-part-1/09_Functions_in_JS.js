// JavaScript function is a set of statements that take inputs, do some specific computation, and produce output.

// A JavaScript function is executed when “something” invokes it (calls it).

// Syntax: The basic syntax to create a function in JavaScript is shown below.
/*
            function functionName(Parameter1, Parameter2, ...)
            {
                // Function body
            }
*/
// Example.1
function fullName(fname,lname){
    return fname + lname;
}
let name = fullName("Raj","Patil"); // Calling the function
console.log(name);


// Example.2
function add(x,y){
    console.log(x+y);
}
add(69,69); // Calling the function


// Example.3 anonymous function
let spy = function(a,b){
    console.log(a/b);
}
spy(100,10);


// ********************Arrow Function**************************

// It is one of the most used and efficient methods to create a function in JavaScript because of its comparatively easy implementation. 
// It is a simplified as well as a more compact version of a regular or normal function expression or syntax.

// Syntax:

                // let function_name = (argument1, argument2 ,..) => expression

// Example 
let car = (m,n)=>console.log(`${m} ${n}`);
car("Porsche","911");


// note 
/*
Every function should begin with the keyword function followed by,
A user-defined function name that should be unique,
A list of parameters enclosed within parentheses and separated by commas,
A list of statements composing the body of the function enclosed within curly braces {}.
*/