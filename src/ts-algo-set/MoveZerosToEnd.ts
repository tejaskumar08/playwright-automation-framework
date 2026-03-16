function moveZeroEnd(numArray:number[]):number[]{
    let writeIndex:number = 0;
    //// Step 1: move all non-zeros to the front (preserves order)
    for(let i:number =0;i<numArray.length;i++){
        const value = numArray[i];
        if(value!=0){
            numArray[writeIndex] = value;
            writeIndex = writeIndex +1; 
        }
    }
    //Step 2: put zeros in the remaining slot
    while(writeIndex < numArray.length){
        numArray[writeIndex] = 0;
        writeIndex = writeIndex +1;
    }

    return numArray;
}

console.log("Zeros to end - ", moveZeroEnd([0,0,1,0,2,0,0,3,4]));