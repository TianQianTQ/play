/*剑指 Offer 12. 矩阵中的路径
请设计一个函数，用来判断在一个矩阵中是否存在一条包含某字符串所有字符的路径。
路径可以从矩阵中的任意一格开始，每一步可以在矩阵中向左、右、上、下移动一格。
如果一条路径经过了矩阵的某一格，那么该路径不能再次进入该格子。
例如，在下面的3×4的矩阵中包含一条字符串“bfce”的路径（路径中的字母用加粗标出）。

[["a","b","c","e"],
["s","f","c","s"],
["a","d","e","e"]]

但矩阵中不包含字符串“abfb”的路径，因为字符串的第一个字符b占据了矩阵中的第一行第二个格子之后，路径不能再次进入这个格子。

示例 1：

输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
输出：true
示例 2：

输入：board = [["a","b"],["c","d"]], word = "abcd"
输出：false
提示：

1 <= board.length <= 200
1 <= board[i].length <= 200
*/
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  let m = board.length;
  let n = board[0].length;
  // DFS
  const dfs = function (i, j, index) {
    if (i < 0 || i >= m || j < 0 || j >n || board[i][j] !==  word[index]) return false; // 不满足条件直接返回false
    if (index === word.length - 1) return true; // 如果到重点 直接返回 true
    let tmp = board[i][j]
    board[i][j] = '-'  // 锁上，因为后续的递归是4个方向上的，无法保证上一个方向的值
    let res =  dfs(i - 1,j,index + 1) || dfs(i + 1,j,index + 1) || dfs(i,j - 1,index + 1) || dfs(i,j + 1,index + 1);
    board[i][j] = tmp; // 恢复现场    不懂 ？？？
    return res;
  }
  // 遍历整个board，找到初始位置
  for (let i=0; i<m; i++) {
    for (let j=0; j<n; j++) {
      if (dfs(i,j,0)) return true;
    }
  }
  return false;
};

