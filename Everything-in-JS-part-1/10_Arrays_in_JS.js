// JavaScript Array is a data structure that allows you to store and organize multiple values within a single variable. 
// It is a versatile and dynamic object. It can hold various data types, including numbers, strings, objects, and even other arrays. 
// Arrays in JavaScript are zero-indexed i.e. the first element is accessed with an index 0, the second element with an index of 1, and so forth.


// Syntax:

                    // let arrayName = [value1, value2, ...];


let cars = ["TATA","Mahindra","Toyota","Skoda","Volkswagen",69,null,true]

console.log(cars);

// 1. Accessing Elements of an Array
console.log(cars[5]);

// 2. Accessing the First Element of an Array
console.log(cars[0]);

// 3. Accessing the Last Element of an Array
console.log(cars[cars.length-1]);

// 4. Modifying the Array Elements
cars[5]=96
console.log(cars); //    o/p = ["TATA","Mahindra","Toyota","Skoda","Volkswagen",96,null,true]


// 5. Adding Elements to the Array
cars.push("Jaguar");    // Add Element to the end of Array
cars.unshift("Range Rover");    // Add Element to the beginning
console.log(cars);

// 6. Removing Elements from an Array
cars.pop();     // Removes and returns the last element
cars.shift();   // Removes and returns the first element
cars.splice(2,1);  // Removes 2 elements starting from index 1
cars.splice(1,0,"bmw");  // Add a element at index 1

console.log(cars);

// 7. Array Length
console.log(cars.length);

// 8. Increase and Decrease the Array Length
console.log(cars.length = 4);   // Decrease the array length to 4
console.log(cars.length = 10);   // Increase the array length to 4
console.log(cars);

// 9. Iterating Through Array Elements
// We can iterate array and access array elements using for and forEach loop.
let id = [1,2,3,4,5,6]
for (let i = 0; i< id.length; i++){
    console.log(id[i])
}

// Iterating through forEach loop
// Syntax 
/*
                id.forEach((value,index,array)=> {
                    statement
                })
*/

id.forEach((val,index,array) =>{
    console.log(val + " "+ index + " "+ array);
    console.log(val + " "+ index);

});

// 10. Array Concatenation
let brand = ["TATA", "Hyundai", "Kia", "MG"];
let model = ["Altroz", "Nexon"];

// Concatenate both arrays
let concateArray = brand.concat(model);

console.log("Concatenated Array: ", concateArray);

// 11. Conversion of an Array to String
console.log(brand.toString());

// Extra 
let num = [54,866,5454,5,5,4,5,57,8,6,4,5,4];

let a = num.map((val,ind) => {
    return val+69;
});                                               // map
console.log("Before change- "+num);
console.log("After change- "+a);

num.forEach((val,ind)=>{
    console.log(val+1000);
})                                                  // forEach


// 12. Reverse a string 
let numId = [54,866,5454,5,5,4,5,57,8,6,4,5,4];
console.log(numId.reverse());

// 13. Sort the Array 
console.log("sorted- "+numId.sort());
  
// 14. Return a copy of section pf an array.
let idOfPeople = [54,866,5454,5,5,4,5,57,8,6,4,5,4];

 let p= idOfPeople.slice(2,7);
 console.log(p);

//  15. Filter the string 
let r = [54,866,5454,5,5,4,5,57,8,6,4,5,4];
let e = r.filter ((val,ind)=>{
if (val>= 10 && val <=100){
    return val;
}
})
console.log(e);

// 16. Find value 
let z = r.find((val)=>{
    return val == 866
})
console.log(z);

// 17. Find Value's Index 
let u = r.findIndex((val)=>{
    return val == 866
})
console.log(u);

let q = r.findLastIndex((val)=>{
    return val == 5
})                                             // if the value is repeated use findLastIndex
console.log(q);

// 18. Convert string to array 
let str = "110,220,330";
let arr = str.split(',');
arr.forEach(val => {
    console.log(val);
})                                              // String converted to array 
console.log(arr);

// 19. Join array
let join = arr.join("and");
console.log(join);