function solve(array){

for(let num of array){
    isPalindrome(num);
}
  

function isPalindrome(integer){
    let string =   integer.toString().split(``).slice(0).join(``);
    let reversed = integer.toString().split(``).reverse().join(``);

     if(string === reversed){
        return console.log("true");
     }else{
       return  console.log(`false`);
     }
   
   }
}
solve([123,323,421,121]);

console.log(`-------------------`);
solve([32,2,232,1010]);

   