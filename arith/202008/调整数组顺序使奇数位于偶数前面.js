/*剑指 Offer 21. 调整数组顺序使奇数位于偶数前面
输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有奇数位于数组的前半部分，所有偶数位于数组的后半部分。

 

示例：

输入：nums = [1,2,3,4]
输出：[1,3,2,4] 
注：[3,1,2,4] 也是正确的答案之一。
 

提示：

1 <= nums.length <= 50000
1 <= nums[i] <= 10000
*/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 1.区分奇数和偶数分别放在两个数组中，最后拼接返回
var exchange = function (nums) {
  let arr1 = [];
  let arr2 = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      arr1.push(nums[i]);
    } else {
      arr2.push(nums[i])
    }
  }
  nums = arr2.concat(arr1);
  return nums;
};
// 2. 循环数组使用push和unshift
var exchange = function (nums) {
  var arr = []
  for (let item of nums) {
    item % 2 == 0 ? arr.push(item) : arr.unshift(item)
  }
  return arr
};
// 3.双指针，left维护奇数 right维护偶数
var exchange = function(nums) {
  if (!nums.length) return nums;
  let left = 0,
      right = nunms.length - 1;
  while (left < right) {
    if (left % 2 === 0) { // nums[left] & 1 
      left ++;
    } else {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      right--;
    }
  }
}