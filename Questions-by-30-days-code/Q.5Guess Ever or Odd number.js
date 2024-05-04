// Find whether a given number if given or odd 
function evenOdd(num){
    if (num % 2 == 0){
        console.log(`${num} is a even number.`);
    } else{
    console.log(`${num} is a odd number.`);
    }
}
evenOdd(46);

// By arrow function 
const number = (a)=> {
    if (a % 2 == 0){
        return console.log(`${a} is a even number.`);
    } else{
        return console.log(`${a} is a odd number.`);
    }
}

number(5664);
