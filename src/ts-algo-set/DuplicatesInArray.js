function findDuplicates(arr) {
    var nonDupSet = new Set();
    var dupSet = new Set();
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var num = arr_1[_i];
        if (nonDupSet.has(num))
            dupSet.add(num);
        else
            nonDupSet.add(num);
    }
    return dupSet;
}
console.log(findDuplicates([1, 2, 3, 2, 4, 3, 5]));
