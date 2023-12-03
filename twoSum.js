//faster  time complexity O(n)
const nums1= [2,3,4,5]
const target1 = 9;

function twoSum2(arr,target){
  const result = []
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length -1; j++){
      if(arr[i] + arr[j] === target){
        result.push(i,j)
      }
    }
  }
  return result
}
console.log(twoSum2(nums1,target1))

// function twoSum(nums, target) {
//     let mp = new Map()
    
//     for (let i = 0; i < nums.length; i++) {
//         let diff = target - nums[i]
//         if (mp.has(diff)) {
//             return [i, mp.get(diff)]
//         }
//         mp.set(nums[i], i)
//     }
// };
// console.log(twoSum(nums1, target1))


//brute force  timecomplexity O(n^2)
//             space complexity O(1)  since output is always the same fixed size and does not rely on size of input

    // var twoSum = function(nums, target) {
    //     let result = [];
      
    //     for (let i = 0; i < nums.length; i++) {
    //       for (let j = i + 1; i < nums.length; i++) {
    //         if (nums[i] + nums[j] === target) {
    //           result.push(i, j);
    //           return result;
    //         }
    //       }
    //     }
    //     return null;
    //   };



