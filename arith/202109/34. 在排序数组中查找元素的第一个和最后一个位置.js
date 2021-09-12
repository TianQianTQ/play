/*给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。

如果数组中不存在目标值 target，返回 [-1, -1]。

进阶：

你可以设计并实现时间复杂度为 O(log n) 的算法解决此问题吗？
 

示例 1：

输入：nums = [5,7,7,8,8,10], target = 8
输出：[3,4]
示例 2：

输入：nums = [5,7,7,8,8,10], target = 6
输出：[-1,-1]
示例 3：

输入：nums = [], target = 0
输出：[-1,-1]
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 const binarySearchLeft = (nums, target) => {
    let left = -1, right = nums.length;
    while (left+1 != right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] >= target) {
            right = mid;
        } else {
            left = mid;
        }
    }
    return right;
}

const binarySearchRight = (nums, target) => {
    let left = -1, right = nums.length;
    while (left+1 != right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] > target) {
            right = mid
        } else {
            left = mid;
        }
    }
    return left;
}

var searchRange = function(nums, target) {
    let ans = [-1, -1];
    const leftIdx = binarySearchLeft(nums, target);
    const rightIdx = binarySearchRight(nums, target);
    if (leftIdx <= rightIdx && rightIdx < nums.length && nums[leftIdx] === target && nums[rightIdx] === target) {
        ans = [leftIdx, rightIdx];
    } 
    return ans;
};

// 题解：
// 1、二分查找
// 2、左右查找对应数据条件不同
