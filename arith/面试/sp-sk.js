// 靓号: 三个相同并且连续的数字
// 例如: 1111, 22222, 12222 ....

// 问题一: 判断字符串是否是靓号 
// 问题二: 给定两个数字区间: a,b; 返回两个数字之间的靓号的数量
  // 要求 复杂度不能为 O(n^n)

function getRes(str) {
    let flag = str.charAt(0), j = 0;
    for (let i = 1; i < str.length; i++) {
        if (str.charAt(i) !== flag) {
            flag = str.charAt(i);
            j = i;
        }
        if (i - j === 2) return true;
    }
    return false;
}
console.log(getRes('12333'));

function getRes(a, b) {
    if (b < 1000) return false;
    let start = a;
    if (a < 1000) {
        start = 1000;
    }
}