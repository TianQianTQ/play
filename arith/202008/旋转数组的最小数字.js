/*剑指 Offer 11. 旋转数组的最小数字
把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。
输入一个递增排序的数组的一个旋转，输出旋转数组的最小元素。例如，数组 [3,4,5,1,2] 为 [1,2,3,4,5] 的一个旋转，该数组的最小值为1。  

示例 1：

输入：[3,4,5,1,2]
输出：1
示例 2：

输入：[2,2,2,0,1]
输出：0
*/
/**
 * @param {number[]} numbers
 * @return {number}
 */
// 正常循环
var minArray = function(numbers) {
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i-1] > numbers[i]) return  numbers[i];
  }
  return numbers[0];
};
const  nums = [1,2,3,4,5];
console.log(minArray(nums))
// ES6扩展符
var minArray = function(numbers) {
  return Math.min(...numbers)
};
// 二分法   (left+right)/2  == left+(right-left)/2 
//         左边的式子要考虑溢出问题 ，右边则用减法递归
var minArray = function(numbers) {
  let left = 0,
      right = numbers.length - 1;
  while (left < right) {
    const temp = Math.floor(left+(right-left)/2);
    if (numbers[temp] > numbers[left]) {
      left = temp + 1
    } else if (numbers[temp] < numbers[left]) {
      right = temp
    } else {
      right --;
    }
  }
  return numbers[left];
}
