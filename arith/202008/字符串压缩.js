/*字符串压缩。利用字符重复出现的次数，编写一种方法，实现基本的字符串压缩功能。
比如，字符串aabcccccaaa会变为a2b1c5a3。
若“压缩”后的字符串没有变短，则返回原先的字符串。你可以假设字符串中只包含大小写英文字母（a至z）。

示例1:

 输入："aabcccccaaa"
 输出："a2b1c5a3"
示例2:

 输入："abbccd"
 输出："abbccd"
 解释："abbccd"压缩后为"a1b2c2d1"，比原字符串长度更长。
提示：

字符串长度在[0, 50000]范围内。
*/
/**
 * @param {string} S
 * @return {string}
 */
//  1、多个比较放置
var compressString = function(S) {
    if (S.length < 2) return S;
    let arr = [];
    let obj = {};
    arr.push(S[0]);
    arr.push(1);
    obj[S[0]] = 1;
    for (let i = 1; i < S.length; i++) {
      if (S[i]!== S[i-1]) {
        obj[S[i]] = 1;
        arr.push(S[i]);
        arr.push(1);
      } else {
        obj[S[i]] += 1;
        arr.pop();
        arr.push(obj[S[i]]);
      }
    }
    const newStr = arr.join('');
    return newStr.length < S.length ? newStr : S;
};
console.log(compressString('abbccd'))
// 优化1
var compressString = function(S) {
    if (S.length < 2) return S;
    let res = '';
    let count = 1;
    for (let i = 1; i < S.length + 1; i++) {
        if (S[i] !== S[i-1]) {
            res += S[i-1] + count;
            count = 1;
        } else {
            count ++;
        }
    }
    return S.length > res.length ? res : S;
};
console.log(compressString('aabcccccaaa'))

// 2、正则替换字符串
var compressString = function(S) {
  let result = S
  new Set(S).forEach(item => {
      result = result.replace(
          new RegExp(item + '+', 'g'),
          str => item + str.length
      )
  })
  return result.length < S.length? result: S
};
console.log(compressString('aabcccccaaa'))
// 3、正则匹配相同的字符
var compressString = function(S) {
    let res = ''
    let sReg = S.match(/(.)\1*/g);
    // let sReg = S.match(/([A-z])\1*/g);
    if (sReg) {
        sReg.forEach((item) => {
            res += item.charAt(0) + item.length
        })
    }
    return  S.length > res.length  ? res : S;
};
// 4、一遍遍历
var compressString = function(S) {
    let res = ''
    let count = 1;
    for (let i = 1; i < S.length + 1; i++ ){
        if (S[i] === S[i - 1]) {
            count += 1;
        } else {
            res += S.slice(i-1,i) + count;
            count  = 1;
        }
    }
    return S.length > res.length  ? res : S;
};
console.log(compressString('aabcccccaaa'))
// 5、双指针
var compressString = function(S) {
    let i = 0;
    let j = 0;
    let res = '';
    while (j < S.length) {
        if (S[j] !== S[j+1]) {
            res += S[j] + (j+1-i);
            i = j + 1
        }
        j++;
    }
    return S.length > res.length  ? res : S;
};
console.log(compressString('aabcccccaaa'))
