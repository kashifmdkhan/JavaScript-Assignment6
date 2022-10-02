const prompt = require("prompt-sync")();
function dashesBetweenEvenNumbers(num){
    let str = num.toString();
    let result = [];
    for(let i = 1;i<str.length;i++){
        if(str[i-1]%2===0 && str[i]%2===0){
            result.push(str[i-1],"-");
        }
        else{
            result.push(str[i-1]);
        }
    }
    result.push(str[str.length-1]);
    result = result.join("");
    return result;
}
let num = prompt("Enter the number: ");
console.log(dashesBetweenEvenNumbers(num));