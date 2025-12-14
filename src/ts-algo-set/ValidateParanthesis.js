function paranthesis(para) {
    var stack = [];
    var match = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    for (var i = 0; i < para.length; i++) {
        var char = para[i];
        var isClosing = char === ')' || char === '}' || char === ']';
        if (isClosing) {
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
