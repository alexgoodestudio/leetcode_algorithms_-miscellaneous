const a = '{}[]';
const b = [];
const c = '{]'
const d = '{}[)'

var isValid = function (s) {
  let Parenthesis = {
    "(": ")",
    "[": "]",
    "{": "}"
  }

  let stack = [];
  for (let i = 0; i < s.length; i++) {
    let value = s[i]
    if(Parenthesis[value]){
      stack.push(value)
    }else{
      let top = stack.pop();
      if(value !== Parenthesis[top]){
        return false
      }
    }
  } 
  return stack.length === 0;
};

console.log(isValid(c))


//-----------------------
var isValid = function(s) {
  let Parenthesis = { 
 "(": ")",
 "[": "]",
 "{": "}"
}

let stack = []

for(let char of s){
if(Parenthesis[char]){
  stack.push(char);
}else{
  let top = stack.pop()

  if(char !== Parenthesis[top]){
    return false
  }
}
}
return stack.length === 0;
};
