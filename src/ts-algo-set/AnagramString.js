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
function isAnagramApproach2(s, t) {
    var count = {};
    // Count the frequency of characters in string s
    for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
        var char = s_1[_i];
        if (count[char]) {
            count[char]++;
        }
        else {
            count[char] = 1;
        }
    }
    // Decrement the frequency of characters in string t
    for (var _a = 0, t_1 = t; _a < t_1.length; _a++) {
        var char = t_1[_a];
        if (count[char]) {
            count[char]--;
        }
        else {
            count[char] = -1;
        }
    }
    // Check if any character has non-zero frequency
    for (var _b = 0, _c = Object.values(count); _b < _c.length; _b++) {
        var val = _c[_b];
        if (val !== 0) {
            return false;
        }
    }
    return true;
}
console.log('Anagram - ', isAnagramApproach2('tejas', 'jaste'));
