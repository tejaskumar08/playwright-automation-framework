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
  const count: { [key: string]: number } = {};

  // Count the frequency of characters in string s1
  for (const char of s1) {
    if (count[char]) {
      count[char]++;
    } else {
      count[char] = 1;
    }
  }

  // Decrement the frequency of characters in string s2
  for (const char of s2) {
    if (count[char]) {
      count[char]--;
    } else {
      count[char] = -1;
    }
  }

  // Check if any character has non-zero frequency
  for (const val of Object.values(count)) {
    if (val !== 0) {
      return false;
    }
  }

  return true;
}

console.log('Anagram - ', anagramString('tejas', 'jaste'));
console.log('Anagram - ', isAnagramApproach2('tejas', 'jaste'));