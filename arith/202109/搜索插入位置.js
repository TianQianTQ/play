/*
给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

请必须使用时间复杂度为 O(log n) 的算法。

 

示例 1:

输入: nums = [1,3,5,6], target = 5
输出: 2
示例 2:

输入: nums = [1,3,5,6], target = 2
输出: 1
示例 3:

输入: nums = [1,3,5,6], target = 7
输出: 4
示例 4:

输入: nums = [1,3,5,6], target = 0
输出: 0
示例 5:

输入: nums = [1], target = 0
输出: 0

*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let length = nums.length;
    let left = 0, right = length - 1;
    let res = length;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let num = nums[mid];
        if (num < target) {
            left = mid + 1;
        } else {
            res = mid;
            right = mid - 1;
        }
    }
    return res;
};
// console.log(searchInsert([1], 0));
console.log(searchInsert([1,3,5,6], 7));
console.log(searchInsert([1,3,5,6], 0));
