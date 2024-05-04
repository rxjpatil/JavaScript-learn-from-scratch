// Find factorial of n number 
function factorial(num){
    if (num === 0 || num === 1){
        return console.log(`factorial of ${num} is 1.  `);
    }
    else {
        let fact = 1;
        for(i=1;i<=num;i++){
            fact=fact*i;
        }
        return console.log(`The factorial of ${num} is ${fact}`);
    
    }
}

factorial(5);

// Arrow function 
factNum = (word) => {
    if (word === 0 || word === 1){
        return 1
    }else {
        let facto = 1;
        for (j=1;j<=word;j++){
            facto *= j
        }
        return console.log(facto);
    }
}

factNum(5);

// new method 
/*
                function factorial(n){
                    if(n ===1 ){
                        return 1;
                    }
                    else{
                        return n*(factorial(n-1))
                    }
                }

                console.log(factorial(5));
*/