function solve(num){

    let arrOfNums = num.toString().split(``).map(Number);
    
     ;
    for(let i = 0; i < arrOfNums.length; i ++) {
        let sum = 0
       
        let arreyL = arrOfNums.length
        for(let el of arrOfNums){
           
            sum += el
        }
        let avr = sum / arreyL;
        if(avr <= 5){
            arrOfNums.push(9);
        }else{
            console.log(arrOfNums.join(``));
            break;
        }  
    } 
    
        
    
   

}
solve(5835);
solve(101);