// function reverseString(s:string):string{
//     const chars:string[] = s.split('')
//     let i:number =0;
//     let j:number = chars.length-1;
//     let ch:any; 
//     while(i<j){
//         //FIRST WAY
//         ch= chars[i]
//         chars[i] = chars[j];
//         chars[j] = ch;
//         //another WAY
//         //[chars[i], chars[j]] = [chars[j], chars[i]];
//         i++;
//         j--;
//     }
//     return chars.join('');
// }
// console.log('reversed string - ', reverseString('TEJAS'));
function reverseString(str) {
    var chars = str.split('');
    var i = 0;
    var j = str.length;
    var chr = 0;
    ;
    while (i < j) {
        chr = chars[i];
        chars[i] = chars[j];
        chars[j] = chr;
        i++;
        j--;
    }
    return chars.join('');
}
console.log('reverse --', reverseString('typescript'));
