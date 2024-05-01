let rank = "01"

console.log(typeof rank);

let RankInNumber = Number (rank)
console.log(typeof RankInNumber, RankInNumber);

// "33" => 33 
// "33abc" => NaN
// true => 1 
// false => 0 
// null => 0 
// undefined => NaN

let data1 = undefined
let NewData1 = Number (data1)
console.log(typeof NewData1, NewData1);

let data2 = 1
let NewData2 = Boolean (data2)
console.log(typeof NewData2, NewData2);

let data3 = "wtfrxjj"
let NewData3 = Boolean (data3)
console.log(typeof NewData3, NewData3);

// 1 => true 
// 0 => false 
// "rxjpatil" => true 


// *********************  Operations  ************************ 
value = 7
NigValue = -value
console.log(NigValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/2);
console.log(2**2);

str1 = "Hello"
str2 = " Moto"

str3 = str1 + str2
console.log(str3);

console.log("1"+2); // op-12
console.log("1"+"2"); // op-12
console.log(1+"2"); // op-12
console.log("1"+2+2); // op-122
console.log(1+2+"2"); //op-32 

