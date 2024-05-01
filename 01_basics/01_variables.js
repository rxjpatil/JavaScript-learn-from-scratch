var account_no = 64646464646

// The var is the oldest keyword to declare a variable in JavaScript. 
// It has the Global scoped or function scoped which means variables defined outside the function can be accessed globally, and variables defined inside a particular function can be accessed within the function. 

const marks = 616
// marks = 717 // not allowed in js
console.log(marks);

// It is mainly used to create constant variables whose values can not be changed once they are initialized with a value.
// Cannot be reassigned.
// It has Block Scope
// It can be assigned to the variable on the declaration line.
// It’s a Primitive value.
// Re-declaring of a const variable inside different block scopes is allowed.
// Creates only read-only references to value.

let percentage = 61
percentage = 87
var bank_id = 5646
console.log(percentage);

// The let keyword is an improved version of the var keyword. 
// It is introduced in the ES6 or EcmaScript 2015. 
// These variables has the block scope. 
// It can’t be accessible outside the particular code block ({block}).

let student = "Raj Patil"
std_id = "69"
branch = "CSE"
let attendence;
console.table([student,std_id,branch,percentage,marks,bank_id, attendence])

// Prefer not to use "var" because os issue in block scope
