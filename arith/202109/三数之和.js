/*
给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。

注意：答案中不可以包含重复的三元组。

 

示例 1：

输入：nums = [-1,0,1,2,-1,-4]
输出：[[-1,-1,2],[-1,0,1]]
示例 2：

输入：nums = []
输出：[]
示例 3：

输入：nums = [0]
输出：[]

*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let length = nums.length, res = [];
    if (nums.length < 3) return res;
    nums.sort((a, b) => a - b);
    if (nums[0] > 0) return  res;
    if (nums[length - 1] < 0) return res;
    // 中间的数字
    for (let i = 0; i < length; i++) {
        if (nums[i] > 0) break; // 当前数字大于0 ，三数之和一定大于0 结束循环
        if(i > 0 && nums[i] == nums[i-1]) continue; // 去重
        let left = i + 1, right = length - 1;
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                res.push([nums[i],nums[left],nums[right]]);
                while (left < right && nums[left] === nums[left+1]) left++;
                while (left < right && nums[right] === nums[right-1]) right--;
                left ++;
                right --;
            }
            if (sum < 0) left++;
            if (sum > 0) right--;
        }
    }
    return res;
};

// 题解
/*
1、考虑边缘情况
2、排序 双指针指向当前数据下一个和length - 1
3、当前数据>0直接返回
4、排除相同数据
*/
