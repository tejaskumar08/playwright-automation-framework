function findDuplicates(arr:number[]):Set<number>{
    const nonDupSet = new Set<number>();
    const dupSet = new Set<number>();
    for(const num of arr){
        if(nonDupSet.has(num))
            dupSet.add(num)
        else
            nonDupSet.add(num)
    }
    return nonDupSet;
}
console.log(findDuplicates([1,2,3,2,4,3,5]));