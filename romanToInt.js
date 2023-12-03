

var romanToInt = function(s) {
    const sym = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
  }

  let result = 0;

  for (let i = 0; i < s.length; i++) {
      const cur = sym[s[i]];
      const next = sym[s[i + 1]];

      if (cur < next) {
          result += next - cur; 
          //result = result + (next-current)
          i++; // // Skip the next character as we've already processed it.
      } else {
          result += cur; //Add to result
      }
  }
  return result;
};

console.log(romanToInt('MCMXCIV')); // Output will be 1994
//MCMXCIV => result =1000 / 1000 + (1000-100) =1900 / 1500 + (100-10) =90 /
//(iteration 1) => result =1000 |   (iteration 2) => 1900   | (iteration 3) =>  1990  |  (iteration 4)  => 1994            


// console.log(romanToInt('III'));  // Output will be 3
// console.log(romanToInt('IV'));   // Output will be 4
// console.log(romanToInt('IX'));   // Output will be 9
// console.log(romanToInt('LVIII')); // Output will be 58


/******** THIS LINE: const cur = sym[s[i]]; ******* 
 * 
 *   is doing this:
 * const cur = sym[M]
 * const cur = sym[C]
 * const cur = sym[M]
 * const cur = sym[X]
 * const cur = sym[C]
 * const cur = sym[I]
 * const cur = sym[V]
 * 
 */


function romanToInt(romStr){
    const result = 0;
    const sym = {
        I:1,
        V:5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000
    }
    
    for(let i = 0; i < romStr.length; i++){
        const cur = sym[romStr[i]];
        const next = sym[romStr[i + 1]];
    
    if(curr < next){
        result += next - current
        i++
    }else{
        result += current
    }
    }
    return result;
}