/*剑指 Offer 13. 机器人的运动范围
地上有一个m行n列的方格，从坐标 [0,0] 到坐标 [m-1,n-1] 。
一个机器人从坐标 [0, 0] 的格子开始移动，它每次可以向左、右、上、下移动一格（不能移动到方格外），
也不能进入行坐标和列坐标的数位之和大于k的格子。
例如，当k为18时，机器人能够进入方格 [35, 37] ，
因为3+5+3+7=18。但它不能进入方格 [35, 38]，因为3+5+3+8=19。
请问该机器人能够到达多少个格子？
示例 1：
输入：m = 2, n = 3, k = 1
输出：3
示例 2：
输入：m = 3, n = 1, k = 0
输出：1
提示：
1 <= n,m <= 100
0 <= k <= 20
*/


// 广度优先遍历
/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
function getSum(num) {
  let stringAry = num.toString().split('');
  return stringAry.reduce((a, b) => Number(a) + Number(b), 0);
}

function getSum(num) {
  let answer = 0;
  while (num) {
    answer += num % 10;
    // 向下取整，因为可能出现小数
    num = Math.floor(num / 10);
  }
  return answer;
}
var movingCount = function (m, n, k) {
  let total = 0;
  let obj = {};
  function running(i, j){
    if (i < 0 || j < 0 || i >= m || j >= n) return
    let sum = (i + '' + j).split('').reduce((a, b) => Number(a) + Number(b));
    let axis = JSON.stringify([i,j]);
    if (sum <=k && !obj[axis]) {
      total++;
      obj[axis] = true;
      running(i - 1, j);
      running(i + 1, j);
      running(i, j - 1);
      running(i, j + 1);
    }
  }
  running(0, 0);
  return total;
};
console.log(movingCount(2, 3, 1))


/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function (m, n, k) {
  function getSum(num) {
    let answer = 0;
    while (num) {
      answer += num % 10;
      num = Math.floor(num / 10);
    }
    return answer;
  }
  const directionAry = [
    [-1, 0], // 上
    [0, 1], // 右
    [1, 0], // 下
    [0, -1] // 左
  ];
  let set = new Set(['0,0']);
  let queue = [[0, 0]];
  while (queue.length) {
    let [x, y] = queue.shift();
    for (let i = 0; i < 4; i++) {
      let offsetX = x + directionAry[i][0];
      let offsetY = y + directionAry[i][1];
      if (offsetX < 0 || offsetX >= m || offsetY < 0 || offsetY >= n || getSum(offsetX) + getSum(offsetY) > k || set.has(`${offsetX},${offsetY}`)) {
        continue;
      }
      set.add(`${offsetX},${offsetY}`);
      queue.push([offsetX, offsetY]);
    }
  }
  return set.size;
};