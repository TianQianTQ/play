/**
 * 415. 字符串相加
给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和。

提示：

num1 和num2 的长度都小于 5100
num1 和num2 都只包含数字 0-9
num1 和num2 都不包含任何前导零
你不能使用任何內建 BigInteger 库， 也不能直接将输入的字符串转换为整数形式 
*/

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let res = [];
  let i = num1.length - 1;
  let j = num2.length  - 1;
  let temp = 0;
  while (i >= 0 || j >=0) {
    let x = i >= 0 ? num1.charAt(i) - '0' : 0;
    let y = j >= 0 ? num2.charAt(j) - '0' : 0;
    let sum = x + y + temp;
    res.push(sum % 10);
    temp =  Math.floor(sum / 10);
    i -=1;
    j -= 1;
  }
  return res.reverse().join('');
}
let num1 = '402064';
let num2 = '50385';
console.log(addStrings(num1, num2));