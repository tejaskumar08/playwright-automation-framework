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

/*-------------------------------------------------------------*/

function countAlphabetsOnly(str: string) : number{
	let counter:number =0;
	for(const char of str){
		if(char>='a' && char<='z' || char>='A' && char<= 'Z'){
			counter++;
		}
	}
	return counter;
}
console.log('only count character- ',countAlphabetsOnly('tejas12kumark34'));

/*-------------------------------------------------------------*/

function countOnlyNumbers (str: string) : number{
	let counter:number =0;
	for(const char of str){
		if(!(char>='a' && char<='z' || char>='A' && char<= 'Z')){
			counter++;
		}
	}
	return counter;
}
console.log('only count numbers- ',countOnlyNumbers('tejas12kumark34'));

/*-------------------------------------------------------------*/

function countOnlyVowels(str: string) : number{
	let counter:number =0;
	for(const char of str.toLowerCase()){
		if(char=='a' || char =='e' || char=='i' || char== 'o' || char =='u'){
			counter++;
		}
	}
	return counter;
}
console.log('only vowels - ',countOnlyVowels('THEREare16Donuts'));