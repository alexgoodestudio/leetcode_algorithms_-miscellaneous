const y = "racecar"
const x = "notpalindrome";
const z = 212
const w = "randomwords"

var isPalindrome = function(word) {
    const string = word.toString();
    const reversedStr = string.split('').reverse().join('');
    return string === reversedStr;
};
console.log(isPalindrome(z));


// comment out methods to view mods
var checker = function(word) {
    const string = word.toString();
    const split = string.split('')
    console.log(split)
    const reverse = split.reverse()
    const join = reverse.join('')
    return join
};
console.log(checker(w));