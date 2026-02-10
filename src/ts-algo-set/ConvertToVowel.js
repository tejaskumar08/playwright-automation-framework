function isVowel(S) {
    var lower = S.toLowerCase();
    return lower === 'a' || lower === 'e' || lower === 'i' || lower === 'o' || lower === 'u';
}
function minOperations(S, N) {
    if (N !== S.length || N < S.length || N > S.length) {
        return -1;
    }
    var count = 0;
    for (var _i = 0, S_1 = S; _i < S_1.length; _i++) {
        var char = S_1[_i];
        if (!isVowel(char)) {
            count++;
        }
    }
    return count;
}
var result = minOperations("rock", 4);
console.log("result--", result);
console.log("result--", minOperations("HAYDEN", 6));
console.log("result--", minOperations("DEAN", 4));
console.log("result--", minOperations("ROCK", 4));
function countOperationsToVowelize(N, S) {
    // Define vowels
    var vowels = new Set(['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u']);
    var operations = 0;
    for (var i = 0; i < N; i++) {
        if (!vowels.has(S[i])) {
            operations++;
        }
    }
    return operations;
}
// Example usage:
// console.log(countOperationsToVowelize(6, "HAYDEN")); // Output: 4
// console.log(countOperationsToVowelize(4, "rock"));   // Output: 3
