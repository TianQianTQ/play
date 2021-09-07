/* 给定两个字符串 s1 和 s2，请编写一个程序，确定其中一个字符串的字符重新排列后，能否变成另一个字符串。

示例 1：

输入: s1 = "abc", s2 = "bca"
输出: true 
示例 2：

输入: s1 = "abc", s2 = "bad"
输出: false
说明：

0 <= len(s1) <= 100
0 <= len(s2) <= 100
*/

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
/* 转数组排序，再转字符串比较 */
var CheckPermutation = function(s1, s2) {
  if (s1.length !==  s2.length) return  false;
  const arr1 = s1.split('').sort();
  const arr2 = s2.split('').sort();
  if (arr1.join('') === arr2.join('')) return true;

  // return s1.split('').sort().toString()===s2.split('').sort().toString();
  return false;
};
console.log(CheckPermutation('abc', 'bac'))

/* 转数组，循环一个数组，从另一个数组中查询并删除查询到的值 */
var CheckPermutation = function(s1, s2) {
  if (s1.length !==  s2.length) return  false;
  const arr1 = s1.split('');
  const arr2 = s2.split('');
  for (let i = 0; i < arr1.length; i++) {
    let strIndex = arr2.indexOf(arr1[i]);
    // let strIndex = arr2.findIndex(s => { return s === arr1[i]})
    if (strIndex > -1) {
      arr2.splice(strIndex, 1);
    } else {
      return false;
    }
  }
  return true;
};
console.log(CheckPermutation('abc', 'bac'))
/* map存储比较 */