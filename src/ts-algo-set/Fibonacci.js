function fibonacciSeries(num) {
    if (num <= 1)
        return 1;
    var prev = 0;
    var curr = 1;
    for (var i = 2; i <= num; i++) {
        var next = prev + curr;
        prev = curr;
        curr = next;
    }
    return curr;
}
console.log('fibonacci - ', fibonacciSeries(10));
