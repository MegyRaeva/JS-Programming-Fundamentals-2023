function main (base, height) {    
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let totalgold = 0;
    let countSteps = 0;
    let side = base;
 
    while (side > 2 ) 
    {
     let marbel= side * 4 - 4;
     let bacic = side * side - marbel;
        stone += bacic; 
        countSteps ++;
        if(countSteps % 5 === 0)
        {
            lapis += marbel;        
        }
        else
        {
            marble += marbel;
        }
        side -= 2;
    }
    countSteps ++;
    let gold = side * side;
 
    stone = Math.ceil(stone * height);
    marble = Math.ceil(marble * height);
    lapis = Math.ceil(lapis * height);
    totalgold = Math.ceil(gold * height);
    totalHeight = Math.floor(countSteps * height);
 
    console.log(`Stone required: ${stone}`);
    console.log(`Marble required: ${marble}`);
    console.log(`Lapis Lazuli required: ${lapis}`);
    console.log(`Gold required: ${totalgold}`);
    console.log(`Final pyramid height: ${totalHeight}`);
    
}
main(11, 1);
console.log("--------------------------------")
main(23, 0.5 );
console.log("--------------------------------")
main(12, 1);

/*main(11, 1);
console.log("--------------------------------");
main(11, 0.75);
console.log("--------------------------------");
main(12, 1);
console.log("--------------------------------"); */