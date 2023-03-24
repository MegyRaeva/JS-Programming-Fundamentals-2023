function main(input) {
    let index = 0;
    let yield = "";
    let bitcoin = 0;
    let money = 0;
    let day = 0;
    let dayFirs = 0;
    while (index < input.length)
    {
        yield = Number(input[index]);
        day ++;
        let dayMoney = yield * 67.51;                
        if (day % 3 === 0 ) 
        {dayMoney  = dayMoney  * 0.7;}

        money += dayMoney;
        if ((money - 11949.16) >= 0 )
        {                                                         
           while (money >= 11949.16)
            {
                money -= 11949.16;
                bitcoin ++;
                if (bitcoin === 1) {dayFirs = day;}
            }                 
        } 
        index ++;  
        yield = Number(input[index]);
    }
    console.log(`Bought bitcoins: ${bitcoin}`);
    if (bitcoin > 0)
    {
        console.log(`Day of the first purchased bitcoin: ${dayFirs}`);
    }     
    console.log(`Left money: ${money.toFixed(2)}lv.`);
}
main([100, 200, 300]);
console.log("--------------------------------");
main([50, 100]);
console.log("--------------------------------");
main([3124.15, 504.212, 2511.124]);
