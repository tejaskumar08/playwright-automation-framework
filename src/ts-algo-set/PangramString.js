function pangramString(str) {
    var letters = new Set();
    var lowerCase = str.toLowerCase();
    for (var i = 0; i < str.length; i++) {
        var ch = str[i];
        if (ch >= 'a' && ch <= 'z' || ch >= 'A' && ch <= 'Z') {
            letters.add(ch);
        }
    }
    if (letters.size === 26)
        return true;
    return false;
}
console.log('Pangram - ', pangramString('The quick brown fox jumps over a lazy dog'));
