function countVowels(str:string):number{
    const vowel = new Set<string>();
    vowel.add('a');
    vowel.add('e');
    vowel.add('i');
    vowel.add('o');
    vowel.add('u');
    vowel.add('A');
    vowel.add('E');
    vowel.add('I');
    vowel.add('O');
    vowel.add('U');
    let counter:number =0;

    for(let i=0; i<str.length;i++){
        const char = str[i];
        if(vowel.has(char)){
            counter =counter +1;
        }
    }
    return counter;
}

console.log('count - ', countVowels('TEJASKUMAR'));