/*剑指 Offer 50. 第一个只出现一次的字符
在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母。
示例:
s = "abaccdeff"
返回 "b"

s = "" 
返回 " "
 

限制：

0 <= s 的长度 <= 50000
*/
/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function(s) {
  for (let i = 0; i < s.length;  i++) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
      return s[i]
    }
  }
  return ' ';
};
// indexOf + lastIndexOf   
// 一遍遍历，使用数组或对象放置，最终取出数组或对象第一个值
//  一遍遍历，从a-z小写，一一对应放置个数，最终返回个数为1的字母