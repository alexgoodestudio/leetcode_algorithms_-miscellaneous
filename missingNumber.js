function missingNumberSum(arr){
//get length +1
let n = arr.length + 1;
//get sum of that accumulated value
let exp = n *( n+1 )/ 2
////get sum of actual arr
let act = arr.reduce((acc,cur) => acc + cur)
//the missing value is equal to expect minus the actual
let missing = exp -act;
//return
return missing
}

console.log(missingNumberSum([1,3,2,4,7,5,6,8,10]))