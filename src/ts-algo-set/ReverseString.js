function reverseString(s) {
    var chars = s.split('');
    var i = 0;
    var j = chars.length - 1;
    var ch;
    while (i < j) {
        ch = chars[i];
        chars[i] = chars[j];
        chars[j] = ch;
        //[chars[i], chars[j]] = [chars[j], chars[i]];
        i++;
        j--;
    }
    return chars.join('');
}
console.log('reversed string - ', reverseString('TEJAS'));
