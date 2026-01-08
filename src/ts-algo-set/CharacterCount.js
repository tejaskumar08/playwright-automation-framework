function characterCount(str) {
    var map = new Map();
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var character = str_1[_i];
        if (map.has(character))
            map.set(character, map.get(character) + 1);
        else
            map.set(character, 1);
    }
    return map;
    //return [...map.entries()]
}
console.log('character Count - ', characterCount('tejaskumark'));
/*-------------------------------------------------------------*/
function countAlphabetsOnly(str) {
    var counter = 0;
    for (var _i = 0, str_2 = str; _i < str_2.length; _i++) {
        var char = str_2[_i];
        if (char >= 'a' && char <= 'z' || char >= 'A' && char <= 'Z') {
            counter++;
        }
    }
    return counter;
}
console.log('only count character- ', countAlphabetsOnly('tejas12kumark34'));
/*-------------------------------------------------------------*/
function countOnlyNumbers(str) {
    var counter = 0;
    for (var _i = 0, str_3 = str; _i < str_3.length; _i++) {
        var char = str_3[_i];
        if (!(char >= 'a' && char <= 'z' || char >= 'A' && char <= 'Z')) {
            counter++;
        }
    }
    return counter;
}
console.log('only count numbers- ', countOnlyNumbers('tejas12kumark34'));
/*-------------------------------------------------------------*/
function countOnlyVowels(str) {
    var counter = 0;
    for (var _i = 0, _a = str.toLowerCase(); _i < _a.length; _i++) {
        var char = _a[_i];
        if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u') {
            counter++;
        }
    }
    return counter;
}
console.log('only vowels - ', countOnlyVowels('THEREare16Donuts'));
