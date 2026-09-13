function factorial(num) {
    var result = 1;
    if (num <= 1)
        return 1;
    for (var i = 2; i <= num; i++) {
        result = result * i;
    }
    return result;
}
console.log("Factorial - ", factorial(5));
