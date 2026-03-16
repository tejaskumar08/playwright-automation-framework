function isVowell(S:string):boolean{
	const lower = S.toLowerCase();
	return lower === 'a' || lower ==='e' || lower ==='i' || lower ==='o' ||lower ==='u';
}

function vowelizedString(N:number, S:string){
	if(N<S.length || N!==S.length){
		return -1;
	}
	
	let count=0;
	
	for(let i=0;i<N;i++){
		const char = S[i]
		if(!isVowell(char)){
			count++;
		}
	}
	return count;
}

// console.log("result- ", vowelizedString(4, "rock"));
// console.log("result- ", vowelizedString(4, "ROCK"));
// console.log("result- ", vowelizedString(4, "DEAN"));
// console.log("result- ", vowelizedString(4, "dean"));
// console.log("result- ", vowelizedString(6, "HAYDEN"));
// console.log("result- ", vowelizedString(6, "hayden"));
// console.log("result- ", vowelizedString(6, "rock"));
console.log("result- ", vowelizedString(5, "tejas"));
console.log("result- ", vowelizedString(4, "tejas"));
console.log("result- ", vowelizedString(7, "juthika"));
console.log("result- ", vowelizedString(4, "juthika"));