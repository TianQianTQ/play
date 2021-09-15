/*
给定一个包含非负整数的 m x n 网格 grid ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。

说明：每次只能向下或者向右移动一步。
示例 1：
输入：grid = [[1,3,1],[1,5,1],[4,2,1]]
输出：7
解释：因为路径 1→3→1→1→1 的总和最小。

示例 2：
输入：grid = [[1,2,3],[4,5,6]]
输出：12

提示：

m == grid.length
n == grid[i].length
1 <= m, n <= 200
0 <= grid[i][j] <= 100
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    let m = grid.length, n = grid[0].length;
    let dp = new Array(m).fill(0).map(() => new Array(n).fill(0));
    dp[0][0] = grid[0][0];
    // 状态转移
    for (let i=0; i<m;i++) {
        for (let j=0; j<n; j++) {
            if (i==0 && j !=0) {
                dp[i][j] = grid[i][j] + dp[i][j-1];
            } else if (i !=0 && j==0) {
                dp[i][j] = grid[i][j] + dp[i - 1][j]
            } else if (i != 0 && j != 0) {
                dp[i][j] = grid[i][j] + Math.min(dp[i - 1][j], dp[i][j - 1])
            }
        }
    }
    return dp[m - 1][n - 1]
};
console.log(minPathSum([[1,3,1],[1,5,1],[4,2,1]]));

/**
 * @param {number[][]} grid
 * @return {number}
 */
 var minPathSum = function (grid) {
    const m = grid.length, n = grid[0].length;
    // 创建 dp 数组
    const f = new Array(m).fill(null).map(() => new Array(n).fill(0));

    // 矩阵 纵轴方向的路径和
    for (let i = 0; i < m; i++) {
        f[i][0] = i === 0 ? grid[i][0] : f[i - 1][0] + grid[i][0];
    };
    // 矩阵 横轴方向的路径和
    for (let j = 0; j < n; j++) {
        f[0][j] = j === 0 ? grid[0][j] : f[0][j - 1] + grid[0][j];
    }

    // 从 矩阵 grid[1][1] 开始，依次计算
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            f[i][j] = Math.min(f[i][j - 1], f[i - 1][j]) + grid[i][j];
        }
    }

    return f[m - 1][n - 1];
};
var minPathSum = function (grid) {
    let m = grid.length, n = grid[0].length;
    let dp =  new Array(m).fill(0).map(() => new Array(n).fill(0));
    // 初始化第一个值
    dp[0][0] = grid[0][0];
    for (let i = 1; i< m; i++) {
        dp[i][0] = grid[i][0] + dp[i-1][0];
    }
    for (let j = 1; j< n; j++) {
        dp[0][j] = grid[0][j] + dp[0][j-1];
    }
    for (let i=1; i<m;i++) {
        for(let j=1; j<n; j++) {
            dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1]) + grid[i][j];
        }
    }
    return dp[m-1][n-1];
}
console.log(minPathSum([[1,3,1],[1,5,1],[4,2,1]]));

// 题解：
// 1、找出状态转义方程式 f(i,j) = grid[i][j] + Math.min(f(i-1，j),f(i,j-1)）
// 2、初始化横竖第一排数据