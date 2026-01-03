function paranthesis(input: string):boolean{
    const stack:string[] = [];
    const match: Record<string, string> = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    for(let i=0;i<input.length;i++){
        const char = input[i];
        const isClosing = char === ')' ||char === '}' || char ===']';

        if(isClosing){
            const top = stack.pop();
            const expected = match[char];

            if(top!==expected)
                return false;
        } else {
            stack.push(char)
        }
    }
    return stack.length ===0;
}

console.log('valid parantheses - ', paranthesis('(())'));
console.log('valid parantheses - ', paranthesis('(([{}]))'));
console.log('valid parantheses - ', paranthesis('(]})'));
console.log('valid parantheses - ', paranthesis('()[]{}'));