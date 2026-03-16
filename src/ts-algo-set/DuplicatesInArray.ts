function findDuplicates(arr:number[]):Set<number>{
    const uniqueSet = new Set<number>();
    const dupSet = new Set<number>();
    for(const num of arr){
        if(dupSet.has(num))
            uniqueSet.add(num)
        else
            dupSet.add(num)
    }
    return uniqueSet;
}
console.log('Only duplicate elements -',findDuplicates([1,1,2,3,2,4,3,5,5]));

/*-------------------------------------------------*/


function removeDulpicateElements(arr:number[]):Set<number>{
	const uniqueSet = new Set<number>();
	for(const num of arr){
		if(!(uniqueSet.has(num)))
            uniqueSet.add(num)
	}
	return uniqueSet;
}
console.log('removed duplicates elements - ',removeDulpicateElements([1,1,2,3,2,4,3,5,5]));