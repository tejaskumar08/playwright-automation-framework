function characterCount(str:string):Map<string, number>{
	const map = new Map<string, number>();
	for(const character of str){
		if(map.has(character))
			map.set(character, map.get(character)+1)
		else 
			map.set(character, 1);
	}
	
	return map;
	//return [...map.entries()]
}

console.log('character Count - ',characterCount('tejaskumark'));