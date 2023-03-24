function login(input) {
let index = 0;
let passIn = input[index].toString();
let pass = "";
for (let i = passIn.length -1; i >= 0; i--)
{    
    pass +=`${passIn[i]}`;
}
index ++;
let tryPass = input[index].toString();
let errorCount = 0;
while (tryPass !== pass) 
{
    if (errorCount < 3) 
    {
        errorCount ++;
        console.log("Incorrect password. Try again.");
        
    } 
    else 
    {
        console.log(`User ${passIn} blocked!`);
        return;
    }
    index ++;
    tryPass = input[index].toString();
}  
console.log(`User ${passIn} logged in.`);  
}
login(['Acer','login','go','let me in','recA']);
login(["sunny","rainy", "cloudy", "sunny", "not sunny"]);