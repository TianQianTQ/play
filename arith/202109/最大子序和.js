/*给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

示例 1：
输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
输出：6
解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。

示例 2：
输入：nums = [1]
输出：1
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (nums.length === 1) return nums[0];
    let max = nums[0], total = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (total > 0) {
            total += nums[i];
        } else {
            total = nums[i];
        }
        max = Math.max(max, total);
    }
    return max;
};

// 题解
// 1、先存储第一个值 赋值给最大值
// 2、如果和>0 则继续往后加 否则赋予新的值  
// 3、拿出来最大值赋值给max