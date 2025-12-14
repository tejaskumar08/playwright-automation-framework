function characterCount(str) {
    var map = new Map();
    var i = 0;
    var j = str.length - 1;
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
