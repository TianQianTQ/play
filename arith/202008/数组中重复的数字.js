/*  剑指 Offer 03. 数组中重复的数字
找出数组中重复的数字。
在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。
数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。
示例 1：
输入：
[2, 3, 1, 0, 2, 5, 3]
输出：2 或 3 
限制：
2 <= n <= 100000
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function(nums) {
  let a = [];
  while (i < nums.length) {
    if (a.includes(nums[i])) {
      return nums[i]
    }
    a.push(nums[i])
    i++;
  }
  return null;
};

// 时间复杂度 O(n)  空间复杂度O(n)
var findRepeatNumber = function(nums) {
  let obj = {};
  for (let i=0; i< nums.length;  i++) {
    if (obj[nums[i]]) {
      return nums[i]
    }
    obj[nums[i]] = 1;
  }
  return null;
};

const nums = [2, 3, 1, 0, 2, 5, 3];
console.log(findRepeatNumber(nums))

var findRepeatNumber = function(nums) {
  const length = nums.length;
  for (let i = 0; i < length; ++i) {
      //检测下标为i的元素是否放在了位置i上
      while ((num = nums[i]) !== i) {
          if (num === nums[num]) {
              return num;
          }
          [nums[i], nums[num]] = [nums[num], nums[i]];
      }
  }
};
// 利用去重原理  数组，对象， 时间控件复杂度都是o(n)， 因为所有数字都在 0 - n-1 范围，一个萝卜一个坑。第i个放为i的数字