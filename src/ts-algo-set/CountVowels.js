function countVowels(str) {
    var vowel = new Set();
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
    var counter = 0;
    for (var i = 0; i < str.length; i++) {
        var char = str[i];
        if (vowel.has(char)) {
            counter = counter + 1;
        }
    }
    return counter;
}
console.log('count - ', countVowels('TEJASKUMAR'));
