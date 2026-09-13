function secondLargest(numArray) {
    var max = -Infinity;
    var secondMax = -Infinity;
    for (var _i = 0, numArray_1 = numArray; _i < numArray_1.length; _i++) {
        var num = numArray_1[_i];
        if (num > max) {
            secondMax = max;
            max = num;
        }
        else if (num < max && num > secondMax)
            secondMax = num;
    }
    if (secondMax === --Infinity)
        return null;
    return secondMax;
}
console.log("second largest - ", secondLargest([5, 1, 9, 9, 7]));
