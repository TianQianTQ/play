/*剑指 Offer 17. 打印从1到最大的n位数
输入数字 n，按顺序打印出从 1 到最大的 n 位十进制数。比如输入 3，则打印出 1、2、3 一直到最大的 3 位数 999。

示例 1:

输入: n = 1
输出: [1,2,3,4,5,6,7,8,9]

说明：
用返回一个整数列表来代替打印
n 为正整数
*/

// while循环判断当前i的长度
/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function(n) {
  let arr = [];
  let i = 1;
  while (i.toString().length <= n) {
    arr.push(i);
    i++;
  }
  return arr;
};
// 利用es6的 **求次方，使用Array.from直接打印
// 10**n 相当于  Math.pow(10, n)
var printNumbers = function(n) {
  return Array.from({length:10**n -1 },(item, index) => index+1)
};

// ac地址：https://leetcode-cn.com/problems/da-yin-cong-1dao-zui-da-de-nwei-shu-lcof/
// 原文地址：https://xxoo521.com/2020-02-17-from-one-to-n/

// 利用位运算，执行时间低 ？？？？
var printNumbers = function(n) {
  let max = 1;
  let x = 10;
  while (n) {
      if (n & 1) {
          max = max * x;
      }
      x = x * x;
      n = n >> 1;
  }

  const res = [];
  for (let i = 1; i < max; ++i) {
      res.push(i);
  }
  return res;
};