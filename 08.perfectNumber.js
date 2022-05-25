function solve(num){
    let sum = 0;
    let isPerfect = false;
for(let i = 0;i <= num;i++){
    sum += i;
    
    if(sum === num){
        console.log("We have a perfect number!");
         isPerfect = true;
    }
    
}
if(!isPerfect){
    console.log("It's not so perfect.");
}

}
solve(1236598);

solve(6)
solve(28)