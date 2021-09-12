/*
给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。
示例 1：

输入：nums = [1,2,3]
输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
示例 2：

输入：nums = [0,1]
输出：[[0,1],[1,0]]
示例 3：

输入：nums = [1]
输出：[[1]]
 
提示：
1 <= nums.length <= 6
-10 <= nums[i] <= 10
nums 中的所有整数 互不相同
*/
var permute = function(nums) {
    let res = [];
    function dfs(arr, index) {
        if (index === nums.length) {
            // if (arr.length === nums.length) {
            //     res.push(arr);
            // }
            res.push(arr);
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            let minArr = [...arr];
            if (!minArr.includes(nums[i])) {
                minArr.push(nums[i]);
                dfs(minArr, index + 1);
            }
            // dfs(minArr, index + 1);
        }
    }
    dfs([], 0);
    return res;
};
console.log(permute([1,2,3]))

// 题解:
// 1、回溯法
// 2、不能有 重复项