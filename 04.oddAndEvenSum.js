function solve(num){

    let numArray = num.toString().split(``).map(Number);

    let evenSum = 0;
    let oddSum = 0;
    
    for(let num of numArray){
        if(num % 2 == 0){
            evenSum += num
        }else{
            oddSum += num
        }
    }

        console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
}
solve(1000435);

solve(3495892137259234);