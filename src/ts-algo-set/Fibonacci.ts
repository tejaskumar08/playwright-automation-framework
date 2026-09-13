function fibonacciSeries(num:number):number{
    if(num <= 1)
        return 1;
    let a =0;
    let b =1;
    for(let i =2; i<=num;i++){
        const next = a + b;
        a = b;
        b = next;
    }
    return b;
}
console.log('fibonacci - ', fibonacciSeries(10));