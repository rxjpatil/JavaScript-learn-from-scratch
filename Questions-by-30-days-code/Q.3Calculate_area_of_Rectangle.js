// Calculate area of rectangle 

function area(l,b){
    console.log(`The area of rectangle is ${l*b}`);
}

area(12,6);



// Arrow Function

let areaOfRect = (x,y) => {
    return x*y;
}

let answer = areaOfRect(15,5);
console.log(`The area of rectangle is ${answer}`);

