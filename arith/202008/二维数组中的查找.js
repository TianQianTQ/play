/*  剑指 Offer 04. 二维数组中的查找
  在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，
  每一列都按照从上到下递增的顺序排序。
  请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
示例:
现有矩阵 matrix 如下：
[
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]
给定 target = 5，返回 true。
给定 target = 20，返回 false。
限制：
0 <= n <= 1000
0 <= m <= 1000
*/
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function(matrix, target) {
  let n = matrix.length
  if (n===0) return false
  let m = matrix[0].length
  if (m===0) return false
  for(let i = 0; i < n; i++) {
      if(matrix[i].indexOf(target) !== -1) {
          return true
      }
  }
  return false
};
// 暴力破解   双循环去查找相等与否

var findNumberIn2DArray = function(matrix, target) {
  let n = matrix.length
  if (!n) return false;
  let m = matrix[0].length;
  if (!m) return;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] === target) return  true;
    }
  }
  return false;
};
// 从右上角 或 左下角 遍历寻找
var findNumberIn2DArray = function(matrix, target) {
  let n = matrix.length
  if (!n) return false;
  let m = matrix[0].length;
  if (!m) return;
  if (target < matrix[0][0]) return false;
  if (target > matrix[n-1][m-1]) return false;
  let i = 0, j = m - 1;
  while (i < n && j > -1) {
    if (target === matrix[i][j]) return true
    if (target < matrix[i][j]) {
      j--;
    } else {
      i++;
    }
  }
  return false;
};
 