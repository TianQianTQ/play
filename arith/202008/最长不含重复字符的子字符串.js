/*剑指 Offer 48. 最长不含重复字符的子字符串
请从字符串中找出一个最长的不包含重复字符的子字符串，计算该最长子字符串的长度。

 

示例 1:

输入: "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
示例 2:

输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
示例 3:

输入: "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (s.length < 2) return s.length;
  let left = 0;
  let max = 0;
  let arr = s.split('');
  let sun = [s[0]];
  for (let i = 1; i < arr.length; i++) {
    if (sun.includes(arr[i])) {
      while (left < i && arr[left] !== arr[i]) {
        left++;
      }
      left +=1;
      sun = arr.slice(left, i+1);
    } else {
      sun.push(arr[i]);
    }
    let del = sun.length;
    max = max > del ? max : del
  }
  return max;
};
let str3 = 'pwwkew'
console.log(lengthOfLongestSubstring(str3))

var lengthOfLongestSubstring = function(s) {
  const len = s.length;
  let res = 0;
  let temp = '';
  for(let i = 0; i < len; i ++) {
      if(temp.indexOf(s[i]) === -1) {
          temp += s[i];
          res = Math.max(res, temp.length);
      } else {
          temp = temp.slice(temp.indexOf(s[i]) + 1);
          temp += s[i];
      }
  }
  return res;
};

var lengthOfLongestSubstring = function(s) {
  const len = s.length;
  let res = 0;
  let str = '';
  for (let i = 0; i < len; i++) {
    if (str.indexOf(s[i]) !== -1) {
      str = str.slice(str.indexOf(s[i]) + 1);
    }
    str += s[i];
    res = Math.max(res, str.length);
  }
  return res;
};