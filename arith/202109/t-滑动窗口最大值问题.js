/*
给定一个数组 nums 和滑动窗口的大小 k，请找出所有滑动窗口里的最大值。
输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3
输出: [3,3,5,5,6,7] 
*/
let maxSlidingWindow = function(nums, k) {
    if  (k === 1) return nums;
    let result = [];
    let arr = [];
    for (let i = 0; i < nums.length; i++) {
        arr.push(nums[i]);
        if (i >= k - 1) {
            result.push(Math.max(...arr));
            arr.shift()
        }
    }
    return result;
}
// 时间复杂度：O(n*k) 空间复杂度 O(n)
let nums = [1,3,-1,-3,5,3,6,7], k = 3;
console.log(maxSlidingWindow(nums, k));
