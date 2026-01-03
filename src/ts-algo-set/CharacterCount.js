// function characterCount(str:string):Map<string, number>{
// 	const map = new Map<string, number>();
// 	let i:number = 0;
// 	let j:number= str.length-1;
// 	for(const character of str){
// 		if(map.has(character))
// 			map.set(character, map.get(character)+1)
// 		else 
// 			map.set(character, 1);
// 	}
// 	return map;
// 	//return [...map.entries()]
// }
// console.log('character Count - ',characterCount('tejaskumark'));
function countCharacter(str2) {
    var map = new Map();
    for (var _i = 0, str2_1 = str2; _i < str2_1.length; _i++) {
        var character = str2_1[_i];
        if (map.has(character))
            map.set(character, map.get(character) + 1);
        else
            map.set(character, 1);
    }
    return map;
}
console.log('Count --', countCharacter('himalaya'));
