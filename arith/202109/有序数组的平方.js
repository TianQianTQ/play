/*给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。

 

示例 1：

输入：nums = [-4,-1,0,3,10]
输出：[0,1,9,16,100]
解释：平方后，数组变为 [16,1,0,9,100]
排序后，数组变为 [0,1,9,16,100]
示例 2：

输入：nums = [-7,-3,2,3,11]
输出：[4,9,9,49,121]
*/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    // let res = [];
    // for (let i = 0, j = nums.length - 1; i <= j;) {
    //     let left = Math.abs(nums[i]);
    //     let right = Math.abs(nums[j])
    //     if (right > left) {
    //         res.unshift(right * right);
    //         j--
    //     } else {
    //         res.unshift(left * left);
    //         i++
    //     }
    // }
    // while循环
    let res = [];
    let length = nums.length;
    let left = 0, right = length - 1;
    while (left <= right) {
        let leftNum = Math.abs(nums[left]),
            rightNum = Math.abs(nums[right]);
        if (leftNum < rightNum) {
            res.unshift(nums[right] * nums[right]);
            right--;
        } else {
            res.unshift(nums[left] * nums[left]);
            left ++;
        }
    }
    return  res;
};

// 题解：
// 比较头尾大小，利用unshift插入结果
