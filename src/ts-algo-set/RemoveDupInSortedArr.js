function removeDupsInArray(numArray) {
    var map = new Map();
    var uniqueArr = [];
    numArray.forEach(function (item) {
        if (!map.has(item)) {
            map.set(item, true);
            uniqueArr.push(item);
        }
    });
    return uniqueArr.sort();
}
console.log('Unique array - ', removeDupsInArray([7, 9, 1, 2, 2, 3, 4, 3, 5, 4, 6, 5, 3, 7]));
