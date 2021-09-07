/*剑指 Offer 16. 数值的整数次方
实现函数double Power(double base, int exponent)，求base的exponent次方。不得使用库函数，同时不需要考虑大数问题。
示例 1:
输入: 2.00000, 10
输出: 1024.00000
示例 2:
输入: 2.10000, 3
输出: 9.26100
示例 3:
输入: 2.00000, -2
输出: 0.25000
解释: 2-2 = 1/22 = 1/4 = 0.25
说明:
-100.0 < x < 100.0
n 是 32 位有符号整数，其数值范围是 [−231, 231 − 1] 。
*/
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
// 1.使用库函数  return Math.pow(x, n);
var myPow = function(x, n) {
  let res = 1;
  let i = 0;
  if (n > 0) {
    while (i < n) {
      res = res * x;
      i++;
    }
    return res;
  } else {
    while (i > n) {
      res =  res * x;
      i--;
    }
    return 1/res;
  }
};
console.log(myPow(2, -2))
// 2.二分法  时间复杂度是 O(logN)；由于采用递归结构，空间复杂度是 O(logN)。
var myPow = function(x, n) {
  const isNegative = n < 0; // 是否是负指数
  const result = absMyPow(x, Math.abs(n));
  return isNegative ? 1 / result : result;
};

function absMyPow(base, exponent) {
  if (exponent === 0) {
      return 1;
  }

  if (exponent === 1) {
      return base;
  }

  const subResult = absMyPow(base, Math.floor(exponent / 2));
  return exponent % 2 ? subResult * subResult * base : subResult * subResult;
}
// 3.二进制 ？？？？
