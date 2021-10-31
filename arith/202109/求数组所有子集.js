/*
求数组所有子集 [1,2,3]-->[1] 、[2]、[1,2]、[3]、[1,2,3]、[1,3]、[2,3]
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let res = [];
    // 每遍历一个元素，将这个元素与前面所有元素进行拼接
    for (let num of nums) {
        let add = []; //  中转
        for (let arr of res) {
            add.push([...arr, num]); // 为了不修改到arr的原数据，我们通过拼接的方式进行
        }
        res = [...res, ...add];
    }
    return res;
};