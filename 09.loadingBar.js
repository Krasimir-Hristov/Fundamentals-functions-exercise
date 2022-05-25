function solve(num){
let outPutArr = [];
let procentSum = 0;

for(let i = 0;i < 10; i ++ ){
    if(num % 10 ===0 && num > 0){
        outPutArr.push(`%`);
        num -= 10;
        procentSum += 10;
        if(num <= 0 ){
            num = 0;
        }
    }else if(num === 0 ){
        outPutArr.push(`.`)
    }


}
if(outPutArr.includes(`.`)){
    console.log(`${procentSum}% [${outPutArr.join(``)}]`);
    console.log(`Still loading...`)
}else if (!outPutArr.includes(`.`)) {
    console.log(`100% Complete!`)
}
}

solve(30);

solve(50);

solve(100)