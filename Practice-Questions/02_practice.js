// Create a traffic light system that shows what to do based on color. 

color = "yellow"
if (color=="red"){
    console.log("STOP");
}
else if (color=="green"){
    console.log("GO");
} 
else if (color=="yellow"){
    console.log("HOLD ON");
}

// Create a system to calculate popcorn price placed on the size customer asked for: 
/*  if size is "XL", price is Rs. 250
    if size is "L", price is Rs. 200
    if size is "M", price is Rs. 100
    if size is "S", price is Rs. 50                */

popcornPrice = "L"
if(popcornPrice==="S"){
    console.log(`Price of Popcorn of ${popcornPrice} size is 50 Rs.`);
}else if(popcornPrice==="M"){
    console.log(`Price of Popcorn of ${popcornPrice} size is 100 Rs.`);
}else if(popcornPrice==="L"){
    console.log(`Price of Popcorn of ${popcornPrice} size is 200 Rs.`);
}else if(popcornPrice==="XL"){
    console.log(`Price of Popcorn of ${popcornPrice} size is 250 Rs.`);
}else{
    console.log("Invalid size");
}

// A "good string" is a string that starts with letter 'a' and has a length > 3 . Write a program to find if a string is good are Notification. 
str = "anu lom vilom"
if (str[0] == "a" && str.length >= 3){
    console.log(`${str} is a Good String.`);
}

// Predict the output of the following code 
let num = 12;
if ((num%3===0)&& ((num+1==15)||(num-1==11))){
    console.log("safe");
}else{
    console.log("unsafe");
} //unsafe

let colour = "red"

switch(colour){
    case"red":
        console.log("Stop...!");
        break;
    case"yellow":
        console.log("slow down");
        break;
    case"green":
        console.log("goooo");
        break;
    default:
        console.log("broken light");

}

// Use Switch case statement to print the day of the week using a number variable 'day' with value 1 to 7.
// 1 = Monday , 2 = Tuesday and so on..... 
day = 7
switch (day){
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Enter valid day");
}