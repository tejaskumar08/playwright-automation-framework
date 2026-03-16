function pallidrome(s) {
    var i = 0;
    var j = s.length - 1;
    while (i < j) {
        if (s[i] != s[j])
            return false;
        i++;
        j--;
    }
    return true;
}
console.log("pallidrome - ", pallidrome('hexeh'));
console.log("pallidrome - ", pallidrome('tejas'));
