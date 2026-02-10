function anagramString(str1:string, str2:string): boolean{
    const formatString = (str:string): string =>{
        return str.toLowerCase().split('').sort().join('');
    }

    const sortedStr1 = formatString(str1);
    const sortedStr2 = formatString(str2);
    
    if(sortedStr1 != sortedStr2 && str1.toLowerCase != str2.toLowerCase){
        return false
    }
    return sortedStr1 === sortedStr2;
}


// function isAnagramApproach2(s1: string, s2: string): boolean {
//   const cleanS1 = s1.replace(/[^a-z0-9]/gi, '').toLowerCase();
//   const cleanS2 = s2.replace(/[^a-z0-9]/gi, '').toLowerCase();
//   const charMap = new Map<string, number>();
//   if(cleanS1.length != cleanS2.length)
//       return false;

//   // Count the frequency of characters in string s1
//   for (const char of cleanS1) {
//     charMap.set(char, (charMap.get(char) || 0) + 1);
//   }
//   var count:number;
//   // Decrement the frequency of characters in string s2
//   for (const char of cleanS2) {
//     count = charMap.get(char)?0:0;
//     charMap.set(char, count? - 1:1)
//   }
//   return charMap.size ===0;

// }

console.log('Anagram - ', anagramString('tejas', 'jaste'));
console.log('Anagram - ', anagramString('testing', 'testcase'));
//console.log('Anagram - ', isAnagramApproach2('tejas', 'jaste'));