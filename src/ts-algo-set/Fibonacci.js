function fibonacciSeries(num) {
    if (num <= 1)
        return 1;
    var a = 0;
    var b = 1;
    for (var i = 2; i <= num; i++) {
        var next = a + b;
        a = b;
        b = next;
    }
    return b;
}
console.log('fibonacci - ', fibonacciSeries(10));
