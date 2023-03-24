function main(num1, num2, num3) {   
    let top = 0;
    let midlle = 0;
    let end = 0;
    if (num1 > num2 && num1 > num3)
    {
      top = num1;
      if (num2 > num3) {midlle = num2; end = num3}        
      else {midlle = num3; end = num2;}
    }
    if (num2 > num1 && num2 > num3)
    {
      top = num2;
      if (num1 > num3) {midlle = num1; end = num3}        
      else {midlle = num3; end = num1;}
    }
    if (num3 > num2 && num3 > num1)
    {
      top = num3;
      if (num2 > num1) {midlle = num2; end = num1}        
      else {midlle = num1; end = num2;}
    }

    console.log(top);
    console.log(midlle);
    console.log(end);    
} 

function englishName(num) {
    let string = "" + num;
    let last = "";
    let word = "";
    for (let i = 0; i < string.length; i++) {
        last = string[string.length -1];
    } 
    switch (last)
    {
        case "0": word = "zero"; break;
        case "1": word = "one"; break;
        case "2": word = "two"; break;
        case "3": word = "tree"; break;
        case "4": word = "four"; break;
        case "5": word = "five"; break;
        case "6": word = "six"; break;
        case "7": word = "seven"; break;
        case "8": word = "eight"; break;
        case "9": word = "nine"; break;            
        default:break;
    }
    console.log(`${word}`);
} 

function nextDay(year, month, day) {
    let nextDay = new Date(year, month - 1, day + 1);
    let newYear = nextDay.getFullYear();
    let newMonth = nextDay.getMonth() + 1;
    let newDate = nextDay.getDate();
    console.log(`${newYear}-${newMonth}-${newDate}`);
}

function reverseString(input) {      
    let word ="" + input;  
    let result = "";
    for (let i = word.length -1; i >= 0 ; i--) {
        result +=`${word[i]}`;
    }
    console.log(result);
}

function distance(x1, y1, x2, y2) 
{
    let result = 0;
    let area = 0;
    area = Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2);
    result = Math.sqrt(area);
    console.log(result);
}

    
main(2, 1, 3);
console.log("--------------------------------");
englishName(512);
console.log("--------------------------------");
nextDay(2022, 1, 31);
console.log("--------------------------------");
reverseString("Hello");
console.log("--------------------------------");
distance(2, 4, 5, 0);
console.log("--------------------------------");
/* */