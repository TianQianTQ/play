/*
给定一个包含红色、白色和蓝色，一共 n 个元素的数组，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。

此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。

 

示例 1：

输入：nums = [2,0,2,1,1,0]
输出：[0,0,1,1,2,2]
示例 2：

输入：nums = [2,0,1]
输出：[0,1,2]
示例 3：

输入：nums = [0]
输出：[0]
示例 4：

输入：nums = [1]
输出：[1]
 

提示：

n == nums.length
1 <= n <= 300
nums[i] 为 0、1 或 2

*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    nums = nums.sort((a, b) => a-b);
};


var sortColors = function(nums) {
    let left = 0, right = nums.length-1;
    for (let i = 0; i <= right; i++) {
        // 从左到右遍历，如果遇到等于0的就与头指针交换数值，头指针往后移
        while(nums[i] === 2 && i <= right) {
            [nums[i], nums[right]] = [nums[right], nums[i]];
            right--;
        }
        if (nums[i] === 0) {
            [nums[i], nums[left]] = [nums[left], nums[i]];
            left++;
        }
    }
}
sortColors([1,2,0]);

// 题解:

// 1、建立双指针，left right
// 2、从头到尾遍历数组，如果当前值为2 则一直让尾指针从后往前和当前值交换，直到当前值不为2
// 3、如果当前值为0，将 当前值与头指针互换，将0放到数组最前面

