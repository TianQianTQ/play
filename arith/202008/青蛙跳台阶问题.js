/*剑指 Offer 10- II. 青蛙跳台阶问题
一只青蛙一次可以跳上1级台阶，也可以跳上2级台阶。求该青蛙跳上一个 n 级的台阶总共有多少种跳法。

答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。

示例 1：

输入：n = 2
输出：2
示例 2：

输入：n = 7
输出：21
示例 3：

输入：n = 0
输出：1
提示：

0 <= n <= 100
*/
/* 解析： 
  1、假定第一次跳的是一阶，那么剩下的是n-1个台阶，跳法是f(n-1);
  2、假定第一次跳的是二阶，那么剩下的是n-2个台阶，跳法是f(n-2);
  3、总结为sum=f(n-1)+f(n-2)
*/

/**
 * @param {number} n
 * @return {number}
 */
var numWays = function(n) {
  let a = 0, b = 1, sum;
  if (n===0) return 1;
  if (n===1 || n===2)  return n;
  for(let i=0;i<n;i++) {
      sum=(a+b)%1000000007;
      a=b;
      b=sum%1000000007; 
  }
  return b;
};
var numWays = function(n) {
  if (n<0) return -1;
  if (n<=2) return n;
  let arr = []
  arr[0] = 1;
  arr[1] = 2;
  for (let i=2; i<n; i++) {
    arr[i] = arr[i-1] + arr[i-2];
  }
  return arr[n-1];
};