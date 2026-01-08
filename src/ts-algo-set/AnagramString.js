function anagramString(str1, str2) {
    var formatString = function (str) {
        return str.toLowerCase().split('').sort().join('');
    };
    var sortedStr1 = formatString(str1);
    var sortedStr2 = formatString(str2);
    if (sortedStr1 != sortedStr2 && str1.toLowerCase != str2.toLowerCase) {
        return false;
    }
    return sortedStr1 === sortedStr2;
}
function isAnagramApproach2(s1, s2) {
    var cleanS1 = s1.replace(/[^a-z0-9]/gi, '').toLowerCase();
    var cleanS2 = s2.replace(/[^a-z0-9]/gi, '').toLowerCase();
    var charMap = new Map();
    // Count the frequency of characters in string s1
    for (var _i = 0, s1_1 = s1; _i < s1_1.length; _i++) {
        var char = s1_1[_i];
        charMap.set(char, (charMap.get(char) || 0) + 1);
    }
    // Decrement the frequency of characters in string s2
    for (var _a = 0, s2_1 = s2; _a < s2_1.length; _a++) {
        var char = s2_1[_a];
        var count = charMap.get(char);
        charMap.set(char, count - 1);
    }
    return true;
}
console.log('Anagram - ', anagramString('tejas', 'jaste'));
console.log('Anagram - ', anagramString('testing', 'testcase'));
console.log('Anagram - ', isAnagramApproach2('tejas', 'jaste'));
