import { arrayBuffer } from "stream/consumers";

function removeDupsInArray(numArray:number[]):number[]{
    const map = new Map<number, boolean>();
    const uniqueArr:number[] = [];
    numArray.forEach(item=>{
        if(!map.has(item)){
            map.set(item,true);
            uniqueArr.push(item);
        }
    });

    return uniqueArr.sort();
}
console.log('Unique array - ', removeDupsInArray([7, 9, 1, 2, 2, 3, 4, 3, 5, 4, 6, 5, 3, 7]));