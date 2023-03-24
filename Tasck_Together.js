function ages(num) {
    if (num>= 0 && num <= 2) {console.log("baby");} 
    else if (num>= 3 && num <= 13) {console.log("child");}
    else if (num>= 14 && num <= 19) {console.log(" teenager");}
    else if (num>= 20 && num <= 65) {console.log("adult");} 
    else if (num>= 65) {console.log(" elder");}
    else {console.log("out of bounds");}
}

function divisible (num) {
    let result = "";
    if (num % 2 === 0) {result = "2";} 
    if (num % 3 === 0) {result = "3";} 
    if (num % 6 === 0) {result = "6";}
    if (num % 7 === 0) {result = "7";}
    if (num % 10 === 0) {result = "10";}
    if(num % 2 !== 0 && num % 3 !== 0 && num % 6 !== 0 && num % 7 !== 0 && num % 10 !== 0)
    {console.log("Not divisible"); return;}
    console.log(`The number is divisible by ${result}`);
}
function divisible1 (num) {
    let result = "";
    if (num % 10 === 0) {result = "10";} 
    else if (num % 7 === 0) {result = "7";} 
    else if (num % 6 === 0) {result = "6";}
    else if (num % 3 === 0) {result = "3";}
    else if (num % 2 === 0) {result = "2";}
    else{ console.log("Not divisible"); return;}        
    console.log(`The number is divisible by ${result}`);
}

function rounding(num, fix) {
    if (fix > 15) {fix = 15}
    let result = Number(num);
    console.log(parseFloat(result.toFixed(fix)));
}

function vacation(people, typeGrup, day)
{
    let totalPrice = 0;
    let prace = 0;
    switch (typeGrup) 
    {        
        case "Students":
            switch (day) {
                case "Friday": prace = 8.45;
                totalPrice = people * prace;
                if (people >= 30) {totalPrice = totalPrice * 0.85;}break;
                case "Saturday": prace = 9.80 ;
                totalPrice = people * prace;
                if (people >= 30) {totalPrice = totalPrice * 0.85;}break;
                case "Sunday": prace = 10.46;
                totalPrice = people * prace;
                if (people >= 30) {totalPrice = totalPrice * 0.85;}break;            
                default:break;
            }            
        break;
        case "Business":
            switch (day) {
                case "Friday": prace = 10.90;
                totalPrice = people * prace;
                if (people >= 100) {totalPrice =( people - 10) * prace;}break;
                case "Saturday": prace = 15.60 ;
                totalPrice = people * prace;
                if (people >= 100) {totalPrice =( people - 10) * prace;}break;
                case "Sunday": prace = 16;
                totalPrice = people * prace;
                if (people >= 100) {totalPrice =( people - 10) * prace;}break;           
                default:break;
            }            
        break;
        case "Regular":
            switch (day) {
                case "Friday": prace = 15;
                totalPrice = people * prace;
                if (people >= 10 && people <= 20) {totalPrice = totalPrice * 0.95;}break;
                case "Saturday": prace = 20;
                totalPrice = people * prace;
                if (people >= 10 && people <= 20) {totalPrice = totalPrice * 0.95;}break;
                case "Sunday": prace = 22.50;
                totalPrice = people * prace;
                if (people >= 10 && people <= 20) {totalPrice = totalPrice * 0.95;}break;           
                default:break;
            }            
        break;    
        default: break;
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

function leapYear(num) 
{
    let result = "";
    if (num % 400 === 0) {result = "yes"} 
    else if (num % 100 !== 0 && num % 4 === 0) {result = "yes"} 
    else {result = "no"}
    console.log(result);
}

function printAndSum(start,  end) 
{
   let sum = 0;
   let output = "";
   for (let i = start; i <= end; i++) 
   {
    output +=`${i} `;    
    sum += i;
   }
   console.log(output);
   console.log(`Sum: ${sum}`);
}

function triangle(num)
{
   for (let i = 1; i <= num; i++) 
   {
    let output = "";
    for (let j = 1; j <= i; j++)
        {
            output +=`${i} `;     
        } 
    console.log(output);       
   }       
}
function triangle1(num)
{
let output = "";
   for (let i = 1; i <= num; i++) 
   {
    output +=`${i} `;       
    console.log(output);
   }
}

function multiplicationTable(num) 
{
    for (let i = 1; i <= 10; i++) {
        let product = num * i;
        console.log(`${num} X ${i} = ${product}`);
    }    
}

divisible(30);
console.log("--------------------------------");
divisible1(30)
console.log("--------------------------------");
ages(20);
console.log("--------------------------------");
rounding(3.1415926535897932384626433832795,2)
console.log("--------------------------------");
vacation(30, "Students", "Sunday")
console.log("--------------------------------");
leapYear(1984);
console.log("--------------------------------");
printAndSum(5, 10);
console.log("--------------------------------");
triangle(5);
console.log("--------------------------------");
triangle1(5)
console.log("--------------------------------");
multiplicationTable(2);