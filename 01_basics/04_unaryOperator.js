// JavaScript Unary Operators work on a single operand and perform various operations, like incrementing/decrementing, evaluating data type, negation of a value, etc.

// ****************Unary Plus (+) Operator**************** 
/*  The unary plus (+) converts an operand into a number, if possible. 
    It is commonly used to ensure numerical operations on variables that may contain numeric strings. 
    If the operand is a string that represents a valid number, it will be converted to a number. 
    Otherwise, it will evaluate to NaN (Not-a-Number).*/
let str1 = "12"; 
let num = +str1; 
console.log(num); //12
console.log(typeof (num)) //number
let strNew = +"Geeks"; 
console.log(strNew); //NaN


// *******************Unary Minus (-) Operator************************ 
/*  The Unary Negation (-) operator is used to convert its operand to a negative number if it isn’t already a negative number.*/
let str2 = "12"; 
let num2 = -str2; 
console.log(num2); //-12
let str3 = -"Geeks"; 
console.log(str3); //NaN

// *****************Unary Increment (++) Operator*************************
/*  The unary increment operator (++) adds 1 to its operand’s value and evaluates to the updated value. It can be used as a postfix or prefix operator.*/

// Prefix: In prefix form, the variable’s value is first incremented by 1, 
// and then the updated value is used in the expression.

let age = 10
let newAge = ++age
console.log(age,newAge); // 11, 11

// Postfix: In postfix form, the current value of the variable is used in the expression, 
// and then the variable’s value is incremented by 1.

let weight = 40
let newWeight = weight++
console.log(weight,newWeight); //41, 40

// *****************Unary Decrement (–) Operator******************* 
/*  The unary decrement operator (–) subtracts 1 from its operand’s value and evaluates it to the updated value, and we can use it as a postfix or prefix operator.*/


// ********************Logical NOT (!) Operator************************ 
/*  The logical NOT (!) is a unary operator that negates the Boolean value of an operand, converting true to false and false to true.*/
let var1 = false; 
let result1 = !var1; 
console.log(result1); //true

// ***********************Bitwise NOT (~) Operator**************************
/*  The bitwise NOT (~) is a unary operator that inverts all the bits of its operand, converting each 0 to 1 and each 1 to 0.*/
let num4 = 10; 
let result4 = ~num4; 
console.log(result4); //-11
// In this example, the variable num is initially set to 10, which is represented in binary as 00001010. 
// When the bitwise NOT operator is applied to num, it inverts all the bits, resulting in 11110101. In the two’s complement representation used for signed integers, 11110101 represents -11.


