function isVowel(S:string):boolean{
    const lower = S.toLowerCase();
    return lower === 'a' || lower === 'e' || lower === 'i' || lower ==='o' || lower ==='u';
}

function minOperations(S:string, N:number):number{
    if (N!== S.length || N< S.length || N> S.length) { 
        return -1;
    }
    let count =0;
    for(const char of S){
        if(!isVowel(char)){
            count++;
        }
    }
    return count;
}


console.log("result--",minOperations("HAYDEN", 6));
console.log("result--",minOperations("DEAN", 4));
console.log("result--",minOperations("ROCK", 4));

function countOperationsToVowelize(N: number, S: string): number {
    // Define vowels
    const vowels = new Set(['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u']);
    
    let operations = 0;

    for (let i = 0; i < N; i++) {
        if (!vowels.has(S[i])) {
            operations++;
        }
    }

    return operations;
}

// Example usage:
// console.log(countOperationsToVowelize(6, "HAYDEN")); // Output: 4
// console.log(countOperationsToVowelize(4, "rock"));   // Output: 3