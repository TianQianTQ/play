/*剑指 Offer 14- I. 剪绳子
给你一根长度为 n 的绳子，请把绳子剪成整数长度的 m 段（m、n都是整数，n>1并且m>1），
每段绳子的长度记为 k[0],k[1]...k[m-1] 。
请问 k[0]*k[1]*...*k[m-1] 可能的最大乘积是多少？
例如，当绳子的长度是8时，我们把它剪成长度分别为2、3、3的三段，此时得到的最大乘积是18。
示例 1：

输入: 2
输出: 1
解释: 2 = 1 + 1, 1 × 1 = 1
示例 2:

输入: 10
输出: 36
解释: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36
提示：

2 <= n <= 58
*/
/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function(n) {
  // 先找出每种和为n的数列 
  // 找出乘积最大的组合并返回乘积
  
};
// 解法
// ====  贪心法
/*n 除 3 的结果为 a，余数是 b
当 b 为 0，直接将 a 个 3 相乘
当 b 为 1，将（a-1）个 3 相乘，再乘以 4
当 b 为 2，将 a 个 3 相乘，再乘以 2
*/
// 时间复杂度为O(1) 空间复杂度为O(1)
var cuttingRope = function(n) {
  if (n === 2) return 1;
  if (n === 3) return 2;
  // a的含义：n能拆成的3的个数
  const a = Math.floor(n / 3);
  const b = n % 3;

  // n是3的倍数
  if (b === 0) return Math.pow(3, a);
  // n是 3k + 1，例如7。拆成3、3、1。由于有1对结果无法有贡献，所以最后的3、1换成4
  if (b === 1) return Math.pow(3, a - 1) * 4;
  return Math.pow(3, a) * 2;
};

// 动态规划
// 空间复杂度是 O(N)时间复杂度是 O(N^2)
/*状态数组dp[i]表示：数字 i 拆分为至少两个正整数之和的最大乘积。为了方便计算，dp 的长度是 n + 1，值初始化为 1。
显然dp[2]等于 1，外层循环从 3 开始遍历，一直到 n 停止。
内层循环 j 从 1 开始遍历，一直到 i 之前停止，
它代表着数字 i 可以拆分成 j + (i - j)。但 j * (i - j)不一定是最大乘积，
因为i-j不一定大于dp[i - j]（数字i-j拆分成整数之和的最大乘积），这里要选择最大的值作为 dp[i] 的结果。
*/

/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function(n) {
    const dp = new Array(n + 1).fill(1);

    for (let i = 3; i <= n; ++i) {
        for (let j = 1; j < i; ++j) {
            dp[i] = Math.max(dp[i], j * (i - j), j * dp[i - j]);
        }
    }

    return dp[n];
};