function findDuplicates(arr) {
    var uniqueSet = new Set();
    var dupSet = new Set();
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var num = arr_1[_i];
        if (dupSet.has(num))
            uniqueSet.add(num);
        else
            dupSet.add(num);
    }
    return uniqueSet;
}
console.log(findDuplicates([1, 1, 2, 3, 2, 4, 3, 5, 5]));
/*-------------------------------------------------*/
function removeDulpicateElements(arr) {
    var uniqueSet = new Set();
    for (var _i = 0, arr_2 = arr; _i < arr_2.length; _i++) {
        var num = arr_2[_i];
        if (!(uniqueSet.has(num)))
            uniqueSet.add(num);
    }
    return uniqueSet;
}
console.log(removeDulpicateElements([1, 1, 2, 3, 2, 4, 3, 5, 5]));
function findOnlyUniqueElements(arr) {
    var dupSet = new Set();
    var uniqueSet = new Set();
    for (var _i = 0, arr_3 = arr; _i < arr_3.length; _i++) {
        var num = arr_3[_i];
        if (!(uniqueSet.has(num)))
            uniqueSet.add(num);
        else
            dupSet.add(num);
    }
    return dupSet;
}
console.log(findOnlyUniqueElements([1, 1, 2, 3, 2, 4, 3, 5, 5]));
