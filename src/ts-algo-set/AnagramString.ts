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


function isAnagramApproach2(s1: string, s2: string): boolean {
  const cleanS1 = s1.replace(/[^a-z0-9]/gi, '').toLowerCase();
  const cleanS2 = s2.replace(/[^a-z0-9]/gi, '').toLowerCase();

  const charMap = new Map<string, number>();

  // Count the frequency of characters in string s1
  for (const char of s1) {
    charMap.set(char, (charMap.get(char) || 0) + 1);
  }

  // Decrement the frequency of characters in string s2
  for (const char of s2) {
    const count = charMap.get(char);
    charMap.set(char, count - 1)
  }

  return true;
}

console.log('Anagram - ', anagramString('tejas', 'jaste'));
console.log('Anagram - ', anagramString('testing', 'testcase'));
console.log('Anagram - ', isAnagramApproach2('tejas', 'jaste'));