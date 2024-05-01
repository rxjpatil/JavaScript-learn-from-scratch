// JavaScript is a dynamically typed language

// Primitive 

// 7 Types: String, Number, BigInt, Boolean, Null, Undefined, Symbol

/* Symbol */
const id = Symbol("123456")
const extraId = Symbol("123456")
console.log(id === extraId); //false because symbol make them unique

/* BigInt */
const BigNumber = 9549794664679666n


// Reference Type / Non-Primitive  

// Array, Objects, Functions

/* Array */
const bike = ["Yamaha","Honda","TWS","Bajaj"] 

/* Objects */
let myObject = {
    name : "Raj Patil",
    age : 22,
    phoneNo : 9511,
    address : "Pune"
}

/* Function */
const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof myFunction);