/**
 实现一个算法，确定一个字符串 s 的所有字符是否全都不同。

示例 1：

输入: s = "leetcode"
输出: false 
示例 2：

输入: s = "abc"
输出: true
限制：

0 <= len(s) <= 100
如果你不使用额外的数据结构，会很加分。
 */

/**
 * @param {string} astr
 * @return {boolean}
 */

 /** 解法
  * 1、双重循环暴力  O(n^2)
  * 2、使用set数据结构 
  * 3、使用string的indexOf与lastIndexOf方法
  * 4、位运算
  */
var isUnique = function(astr) {
  if (astr.length < 1) return  true;
  let  occ = new Set();
  for (let i = 0; i  < astr.length;  ++i)  {
    if (occ.has(astr.charAt(i))) return false;
    occ.add(astr.charAt(i))
  }
  return true;
};

var isUnique = function(astr) {
  if (astr.length < 2) return true;
  return new Set(astr).size === astr.length
};

var isUnique = function (astr) {
  if (astr.length < 2) return true;
  for (let i=0; i< astr.length; i++) {
    if (astr.indexOf(astr[i]) !== astr.lastIndexOf(astr[i])) return  false;
  }
  return true;
}
let s = "abc"
console.log(isUnique(s))

/**
 * 利用左移运算 1 << 3 是 8 转换二进制 是 '1000'

当遍历到0时，进行左移运算, 1 << 0 是 1 转换二进制 是 '0001'

每次都与上一次结果进行或运算，8 | 1 是 9 转换二进制 是 '1001',
这时可以看到我们用二进制中的位数是1来代表出现过。

那如何快速判断是否出现过呢，可以采用与运算（位数都是1才会是1）的特性。
如果之前没有出现过，那二进制中位数为1的位置对应不上，最后结果应该是0。
例如：9 & (1 << 3) 会等于8，说明倒数第四位数，也就是 3重复了。

我们将字母计算出左移的长度，即可像上述操作一样，检测是否只出现一次
 */

/**
 * @param {string} astr
 * @return {boolean}
 */
var isUnique = function(astr) {
  let mark = 0;
  for (let char of astr) {
    // 需要左移的位数
    const c = char.charCodeAt() - 97;
    // mark 与 左移结果进行与运算，如果不是0，说明其中有一位都是1，说明重复
    if ((mark & (1 << c)) !== 0) {
      return false;
    }
    // 不重复，mark 与 左移结果 进行或运算，相当于保存该值
    mark = mark | (1 << c);
  }
  return true;
};