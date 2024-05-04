// JavaScript Loops are powerful tools for performing repetitive tasks efficiently. 
// Loops in JavaScript execute a block of code again and again while the condition is true.




// ******************For loop************** 
// The JS for loop provides a concise way of writing the loop structure. 
// The for loop contains initialization, condition, and increment/decrement in one line thereby providing a shorter, easy-to-debug structure of looping. 


// Syntax
/*
        for (initialization; testing condition; increment/decrement) {
            statement(s)
        }
*/


for (var i = 1; i<=10; i++){
    console.log(`2 * ${i} = ${2*i}`); //Table of two
}



// ********************while Loop*************** 
// The JS while loop is a control flow statement that allows code to be executed repeatedly based on a given Boolean condition. 
// The while loop can be thought of as a repeating if statement. 

// Syntax
/*
        while (boolean condition) {
            loop statements...
        }
*/

var x = 1;
while (x <= 10) {
    console.log(`3 * ${x} = ${3*x}`); //Table of three
    x++;
}



// ***************do-while Loop************* 
// The JS do-while loop is similar to the while loop with the only difference is that it checks for the condition after executing the statements, and therefore is an example of an Exit Control Loop. 
// It executes loop content at least once event the condition is false.

// Syntax
/*
            do {
                Statements...
            }
            while (condition);
*/

var y = 1;
do { 
    console.log(`4 * ${y} = ${4*y}`); //Table of four
    y++;
}
while(y <= 10)