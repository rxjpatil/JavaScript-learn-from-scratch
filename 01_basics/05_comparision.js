// JavaScript comparison operators are used to check if a condition is true or false

// *****************Equality Operator (==)********************* 
/*  The Equality operator is used to compare the equality of two operands. 
    If equal then the condition is true otherwise false.*/
let val1 = 5;
let val2 = '5';
// Checking of operands
console.log(val1 == 5); //true
console.log(val2 == 5); //true
console.log(val1 == val1); //true
// Check against null and boolean value
console.log(0 == false);   //true
console.log(0 == null);  //false

// *****************Strict equality Operator (===)******************** 
/*  The Strict equality Operator is used to compare the equality of two operands with type. 
    If both value and type are equal then the condition is true otherwise false.*/
// Illustration of (===) operator
let val11 = 5;
let val21 = '5';
// Checking of operands
console.log(val11 === 6); //false
console.log(val21 === '5'); //true
console.log(val11 === val21); //false
// Check against null and boolean value
console.log(0 === false);  //false
console.log(0 === null); //false


// *****************Inequality Operator (!=)**********************
/*  The Inequality Operator is used to compare the inequality of two operands. 
If equal then the condition is false otherwise true.*/
// Illustration of (!=) operator
let val12 = 5;
let val22 = '5';
// Checking of operands
console.log(val12 != 6); //true
console.log(val22 != '5'); //false 
console.log(val12 != val22); //false 
// Check against null and boolean value
console.log(0 != false);   //false 
console.log(0 != null);  //true


// *******************Strict inequality Operator (!==)*******************
/*  The Strict inequality Operator is used to compare the inequality of two operands with type. 
If both value and type are not equal then the condition is true otherwise false.*/  
// Illustration of (!==) operator
let val13 = 5;
let val23 = '5';

// Checking of operands
console.log(val13 !== 6); //true 
console.log(val23 !== '5'); //false  
console.log(val13 !== val23);  //true

// Check against null and boolean value
console.log(0 !== false);  //true
console.log(0 !== null);   //true


//****************Greater than Operator (>)************************
/*  The Greater than Operator is used to check whether the left-side value is greater than the right-side value. 
If the value is greater then the condition is true otherwise false.*/


// **********************Greater than or equal Operator (>=)*****************
/*  The Greater than or equal Operator is used to check whether the left side operand is greater than or equal to the right side operand. 
If the value is greater than or equal then the condition is true otherwise false.*/


//****************Less than Operator (<)**********************
/*  The Less than Operator is used to check whether the left-side value is less than the right-side value. 
If yes then the condition is true otherwise false.*/


//*********************Less than or equal Operator (<=)*******************
/*  The Less than or equal Operator is used to check whether the left side operand value is less than or equal to the right side operand value. 
If yes then the condition is true otherwise false.*/