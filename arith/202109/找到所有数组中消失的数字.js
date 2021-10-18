/*
给你一个含 n 个整数的数组 nums ，其中 nums[i] 在区间 [1, n] 内。请你找出所有在 [1, n] 范围内但没有出现在 nums 中的数字，并以数组的形式返回结果。
示例 1：

输入：nums = [4,3,2,7,8,2,3,1]
输出：[5,6]
示例 2：

输入：nums = [1,1]
输出：[2]
 
提示：
n == nums.length
1 <= n <= 105
1 <= nums[i] <= n
进阶：你能在不使用额外空间且时间复杂度为 O(n) 的情况下解决这个问题吗? 你可以假定返回的数组不算在额外空间内。

*/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let res = new Array(nums.length).fill(1).map((item, index) => index +1);
    console.log(res);
    nums.forEach(item => {
        if (res.includes(item)) {
            res.splice(item-1, 1, 0);
        }
    })
    return res.filter(item => item !== 0);
};
console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]));

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findDisappearedNumbers = function(nums) {
    let set = new Set()
    for(let i = 0; i < nums.length; i++) {
            set.add(nums[i])
    }
    for (let j = 1; j <= nums.length; j++) {
        if(set.has(j)) set.delete(j)
        else set.add(j)
    }
    return Array.from(set);
};
var findDisappearedNumbers = function(nums) {
    let set = new Set();
    for (let i = 0; i < nums.length; i++) {
        set.add(i+1);
    }
    for (let j = 0; j < nums.length; j++) {
        if (set.has(nums[j])) {
            set.delete(nums[j]);
        }
    }
    return Array.from(set);

};