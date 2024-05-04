// Find whether the year is leap year or not 

/*  logic 
    year % 4===0
    year %100!==0
    year %400===0
*/

function leapYear(year){
    if((year % 4 === 0 && year % 100 !==0 )|| year % 400 ===0 ){
        return console.log(`${year} is leap year`);
    }else {
        return console.log(`${year} is not an leap year`);
    }
}

leapYear(2024);

// by Arrow function 

const y = (num)=> {
    if((num % 4 === 0 && num % 100 !==0 )|| num % 400 ===0 ){
        return console.log(`${num} is leap year`);
    }else {
        return console.log(`${num} is not an leap year`);
    }
}

y(2024);