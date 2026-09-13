function pangramString(str:string):boolean{
    const letters = new Set<string>();
    //const lowerCase = str.toLowerCase();

    for(let i=0;i< str.length;i++){
        const ch = str[i];
        if(ch>='a' && ch<='z' || ch>='A' && ch<='Z'){
            letters.add(ch);
        }
    }
    if(letters.size === 26)
        return true;

    return false;
}

console.log('Pangram - ', pangramString('The quick brown fox jumps over a lazy dog'));