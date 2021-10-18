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
// 先转置  再每一行倒序
var rotate = function(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = i; j < matrix[i].length; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
    matrix.map(row  => row.reverse())
};
// 找规律
var rotate = function(matrix) {
    let n = matrix.length;
    let matrix_new = new Array(n).fill(0).map(() => new Array(n).fill(0));
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            matrix_new[j][n - i - 1] = matrix[i][j];
        }
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            matrix[i][j] = matrix_new[i][j];
        }
    }
};

// 题解：
// 1、先把矩阵倒置  即 i 与 j 互换 再每行翻转过来 reverse
// 2、找规律 [j][n-i-1]=[i][j] 但是会使用 额外空间 用来保存新数据
