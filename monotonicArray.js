// 896. Monotonic Array

// An array is monotonic if it is either monotone increasing or monotone decreasing.

// An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. An array nums is monotone decreasing if for all i <= j, nums[i] >= nums[j].

// Given an integer array nums, return true if the given array is monotonic, or false otherwise.

 

// Example 1:

// Input: nums = [1,2,2,3]
// Output: true
// Example 2:

// Input: nums = [6,5,4,4]
// Output: true
// Example 3:

// Input: nums = [1,3,2]
// Output: false

/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var isMonotonic = function(nums) {
    const same = nums[0] === nums[nums.length - 1];
    const increase = nums[0] < nums[nums.length -1];
    const decrease = nums[0] > nums[nums.length -1];
    
    if(same){
        for(let i = 1; i < nums.length; i++){
            if(nums[i - 1] !== nums[i]) return false;
        }
        return true;
    }
    else if(increase){
        for(let i = 1; i < nums.length; i++){
            if(nums[i - 1] > nums[i]) return false;
        }
        return true;
    }
    else{
        for(let i = 1; i < nums.length; i++){
            if(nums[i - 1] < nums[i]) return false;
        }
        return true;
    }
};
 