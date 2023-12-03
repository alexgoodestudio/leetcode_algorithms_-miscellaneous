// var fib = function(n) {
//   if(n<=1){
//       return n;
//   }
//   return fib(n-1) + fib(n-2)
// };


//----------------------------------------
var fib = function(n) {
  let arr = [0,1];
  for(let i = 2; i <= n; i++){
      arr.push(arr[i-1] + arr[i-2])
  }
  return arr[n];
};
console.log(fib(9))

//----------------------------------------
// var fib = function (n) {
//   if (n == 0) return 0;

//   let prev = 0,
//     cur = 1,
//     temp;

//   for (let i = 1; i < n; i++) {
//     temp = cur;
//     cur = cur + prev;
//     prev = temp;
//   }

//   return cur;
// };


