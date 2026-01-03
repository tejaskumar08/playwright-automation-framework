function secondLargest(numArray:number[]):null|number{
    let max:number = -Infinity;
    let secondMax:number = -Infinity;
    for(const num of numArray){
        if(num > max){
            secondMax = max 
            max = num
        } else if( num < max && num > secondMax)
            secondMax = num
    }
    if(secondMax === --Infinity)
        return null
    return secondMax;
}
console.log("second largest - ", secondLargest([5,1,9,9,7]));