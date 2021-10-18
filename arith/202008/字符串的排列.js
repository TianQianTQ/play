/*
剑指 Offer 38. 字符串的排列
输入一个字符串，打印出该字符串中字符的所有排列。
你可以以任意顺序返回这个字符串数组，但里面不能有重复元素。
示例:

输入：s = "abc"
输出：["abc","acb","bac","bca","cab","cba"]
*/

/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function(s) {
  let c = s.split('');
  let res = []
  let set = new Set();
  function dfs(x) {
    if (x === c.length - 1) {
      res.push(c);
      return;
    }
    for (let i = x; i < c.length; i++) {
      if (set.has(c[i])) continue;
      set.add(c[i]);
      [c[i], c[x]]  = [c[x], c[i]]
      dfs(x + 1);
      [c[i], c[x]]  = [c[x], c[i]]
    }
  }
  dfs(0);
  return res
};

console.log(permutation('abc'))