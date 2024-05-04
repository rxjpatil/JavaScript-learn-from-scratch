// Reverse a string 
function reverse(a){
    b= a.split("").reverse().join("");
    console.log(b);
}

reverse("Raj Patil");


// Check Palandrome 

const palandrome = (str) => {
    const new2 = str.split("").reverse().join('');
        if (str===new2){
            console.log("is palandrome");
        }
            return  console.log(`${str} is palandrome`);

};

palandrome("madam")
