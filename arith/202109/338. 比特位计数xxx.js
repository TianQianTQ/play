/*
给你一个整数 n ，对于 0 <= i <= n 中的每个 i ，计算其二进制表示中 1 的个数 ，返回一个长度为 n + 1 的数组 ans 作为答案。

 

示例 1：

输入：n = 2
输出：[0,1,1]
解释：
0 --> 0
1 --> 1
2 --> 10
示例 2：

输入：n = 5
输出：[0,1,1,2,1,2]
解释：
0 --> 0
1 --> 1
2 --> 10
3 --> 11
4 --> 100
5 --> 101

*/
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    const dp = [0];
    for(let i=1;i<=n;i++){
    // i&i-1  用来去掉低位1 然后就计算其他高位的1
    // 因为n-(n-1)=1 多1 如何去掉低位1呢 使用&
    // 也就是你求2 可以由1推出
    dp[i]=dp[i&i-1]+1
    }
    return dp;
};