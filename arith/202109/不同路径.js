/*
一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。

机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。

问总共有多少条不同的路径？

输入：m = 3, n = 2
输出：3
解释：
从左上角开始，总共有 3 条路径可以到达右下角。
1. 向右 -> 向下 -> 向下
2. 向下 -> 向下 -> 向右
3. 向下 -> 向右 -> 向下
示例 3：

输入：m = 7, n = 3
输出：28
示例 4：

输入：m = 3, n = 3
输出：6
 

提示：

1 <= m, n <= 100
题目数据保证答案小于等于 2 * 109

*/
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// 深度优先遍历 超出时间限制
var uniquePaths = function(m, n) {
    if (m <= 1 || n <= 1) return 1;
    return uniquePaths(m-1, n) + uniquePaths(m, n-1);
}
var uniquePaths = function (m, n) {
    let arr = new Array(m).fill(0).map(() => new Array(n).fill(0));
    // 竖轴首轴为1
    for (let i = 0; i< m; i++) {
        arr[i][0] = 1;
    }
    // 横轴首轴为1
    for (let j = 0; j < n; j++) {
        arr[0][j] = 1;
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            arr[i][j] = arr[i-1][j] + arr[i][j-1];
        }
    }
    return arr[m-1][n-1];
}

// 题解：
// 1、找规律
// 2、横轴和竖轴第一排都为1，其他每个位置 f(i,j) = f(i-1,j) + f(i, j-1)
// 3、获取右下角位置的数据 并返回

// 1、递归每一种可能性