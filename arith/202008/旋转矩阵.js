/*
  给你一幅由 N × N 矩阵表示的图像，其中每个像素的大小为 4 字节。请你设计一种算法，将图像旋转 90 度。
  不占用额外内存空间能否做到？
示例 1:

给定 matrix = 
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
],

原地旋转输入矩阵，使其变为:
[
  [7,4,1],
  [8,5,2],
  [9,6,3]
]
给定 matrix =
[
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
], 

原地旋转输入矩阵，使其变为:
[
  [15,13, 2, 5],
  [14, 3, 4, 1],
  [12, 6, 8, 9],
  [16, 7,10,11]
]
 */
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// 1 先将矩阵转置，再每一行倒序
var rotate = function(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix[i].length; j++) {
      console.log(matrix[i][j],  '===', matrix[j][i])
      [matrix[i][j],matrix[j][i]] = [matrix[j][i], matrix[i][j]]
    }
  }
  matrix.forEach(row=> row.reverse())
};
console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]));

// 暴力直接替换
var rotate = function(matrix) {
  var n = matrix.length;
  for (let i = 0; i < n / 2; i++) {
      for (let j = i; j < n - 1 - i; j++) {
          [matrix[n-1-j][i],matrix[i][j]]=[matrix[i][j], matrix[n-1-j][i]];
          [matrix[n-1-i][n-1-j],matrix[n-1-j][i]]=[matrix[n-1-j][i], matrix[n-1-i][n-1-j]];
          [matrix[j][n-1-i],matrix[n - 1 - i][n - 1 - j]]=[matrix[n - 1 - i][n - 1 - j], matrix[j][n-1-i]];
      }
  }
  return matrix;
};