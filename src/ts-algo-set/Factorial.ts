function factorial(num:number):number{
    let result =1;
    if(num<=1)
        return 1;
    for(let i=2;i<=num;i++){
        result = result * i;
    }
    return result;
}
console.log("Factorial - ", factorial(5));


// TO LEARN 
// Fibbonaci 
// count vowels
// validate paranthesis