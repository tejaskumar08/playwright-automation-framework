function paranthesis(input) {
    var stack = [];
    var match = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    for (var i = 0; i < input.length; i++) {
        var char = input[i];
        //const isClosing = char === ')' ||char === '}' || char ===']';
        var isClosing = [')', '}', ']'];
        if (isClosing.includes(char)) {
            var top_1 = stack.pop();
            var expected = match[char];
            if (top_1 !== expected)
                return false;
        }
        else {
            stack.push(char);
        }
    }
    return stack.length === 0;
}
console.log('valid parantheses - ', paranthesis('(())'));
console.log('valid parantheses - ', paranthesis('(([{}]))'));
console.log('valid parantheses - ', paranthesis('(]})'));
console.log('valid parantheses - ', paranthesis('()[]{}'));
