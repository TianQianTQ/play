/*
给你一个字符串 s，找到 s 中最长的回文子串。
示例 1：

输入：s = "babad"
输出："bab"
解释："aba" 同样是符合题意的答案。
示例 2：

输入：s = "cbbd"
输出："bb"
示例 3：

输入：s = "a"
输出："a"
示例 4：

输入：s = "ac"
输出："a"
*/

/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
    // s为空字符串或为长为1的字符串，返回字符串本身
    if (s.length < 2) return s;
  
    let res = '';
    // 遍历每个可能的中心点位，以左右指针模拟中心点
    for (let i = 0; i < s.length; i++) {
      // 双数情况
      getCenter(i, i);
      // 单数情况
      getCenter(i, i + 1);
    }
  
    // 本函数的作用为：获取最长的，以本中心点为中心的回文串
    function getCenter(left, right) {
      // 边界条件：左指针不小于0，右指针不超过数组的最长长度。
      // 进入循环条件：满足边界条件，且当前两个指针指向的字符相等
      while (left >= 0 && right < s.length && s[left] == s[right]) {
        // 左侧指针左移，右侧指针右移，开启下次字符相等的判断循环。当超出系统边界或两指针指向的字符不相等，则退出
        left--;
        right++;
      }
  
      // 循环结束，两指针目前指向的字符串中间其实是不满足回文串
      // 事实上本次while获得的回文串的左侧为left + 1，右侧为right - 1
      // 所以本次获得的回文串长度为 (right - 1) - (left + 1) + 1 = right - left - 1，与res长度判断后取最长的回文子串
      if (right - left - 1 > res.length) {
        // 记住这里需要截取的是正确的回文子串，所以要消除while循环中，最后一次不满足条件的left、right的影响
        /**
         * left => left + 1
         * right - 1 => right - 1 + 1 = right
         **/
        res = s.slice(left + 1, right);
      }
    }
    return res
  };


  /**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let res = [];
  for (let i = 0; i < s.length; i++) {
    getCenter(i, i);
    getCenter(i, i+1);
  }
  function getCenter(left, right) {
      while(left >= 0 && right <s.length && s[left] === s[right]) {
        left--;
        right++;
      }
      if (right - left - 1 > res.length) {
        res = s.slice(left + 1, right);
      }
      return res;
  }
  return res;
};