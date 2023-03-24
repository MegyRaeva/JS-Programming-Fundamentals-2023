function main(size, height) {    
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;
    let heightUp = 0;
    let countSteps = 0;

    for(let i = size; i >= 3 ; i-= 2)
   {  
        let coverSide = i;
        countSteps ++;        
        let perimetar = 0;
        perimetar = (coverSide + (coverSide -2))*2 * height;                                
        if (countSteps % 5 === 0)
        {            
            coverSide = i;
            perimetar = (coverSide + (coverSide -2))*2 * height;      
            lapis += perimetar;
            marble -= perimetar;                              
        }                 
        heightUp += height;
        marble += perimetar;         
    }
    for (let j = size - 2; j >= 1; j-= 2)
        {       
            let basicSide = j
            stone += Math.pow(basicSide, 2) * height;
            if (j === 1) { gold = 1; }
            else{gold = 4;  }           
        }
        heightUp += height;  
       
    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold) }`);
    console.log(`Final pyramid height: ${ Math.floor(heightUp)} `);
    
}
main(11, 1);
console.log("--------------------------------");
main(11, 0.75);
console.log("--------------------------------");
main(12, 1);
console.log("--------------------------------");
main(23, 0.5 );
/* */