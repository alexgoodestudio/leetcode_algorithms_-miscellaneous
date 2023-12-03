     //Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.
     var removeElement = function (nums, val) {
        //iterate through nums
        let i = 0;
        for(let j = 0; j < nums.length; j++){
        //if nums[i] is equal to val then nums[i] is equal to nums j
            if(nums[j] !== val){
               nums[i] = nums[j]
               i++
            }
        }
        return  i
    };