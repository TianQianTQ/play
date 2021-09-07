/** 回文排列
给定一个字符串，编写一个函数判定其是否为某个回文串的排列之一。
回文串是指正反两个方向都一样的单词或短语。排列是指字母的重新排列。
回文串不一定是字典当中的单词。

示例1：

输入："tactcoa"
输出：true（排列有"tacocat"、"atcocta"，等等）
📌
输入 ： 'a'
输出 true
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function(s) {
  if  (s.length < 2) return true;
  const obj = {};
  for (let i = 0; i < s.length; i++) {
    const str = s.charAt(i)
    if (obj[str]) {
      obj[str] += 1;
    } else {
      obj[str] = 1;
    }
  }
  const num = Object.values(obj).filter((item) => {return item % 2 !== 0}).length;
  if (num > 1) return false;
  return true;
};
console.log(canPermutePalindrome('tactcoa'));

var canPermutePalindrome = function(s) {
  const obj = {};
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if(obj[char]) {
      delete obj[char]
    } else  {
      obj[char] = 1;
    }
  }
  return Object.keys(obj).length <= 1;
};