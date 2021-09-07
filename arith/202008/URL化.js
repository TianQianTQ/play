/* 
  URL化。
  编写一种方法，将字符串中的空格全部替换为%20。假定该字符串尾部有足够的空间存放新增字符，并且知道字符串的“真实”长度。
示例1:

 输入："Mr John Smith    ", 13
 输出："Mr%20John%20Smith"
示例2:

 输入："               ", 5
 输出："%20%20%20%20%20"
 字符串长度在[0, 500000]范围内。
*/
/**
 * @param {string} S
 * @param {number} length
 * @return {string}
 */
// 常规想法 转数组再通过长度push进新的数组，最后转字符串输出
var replaceSpaces = function(S, length) {
  // const arr = S.split('');
  // const copArr = [];
  // let i = 0;
  // while (i < length) {
  //   if (arr[i] === ' ') {
  //     copArr.push('%20')
  //   } else {
  //     copArr.push(arr[i]);
  //   }
  //   i++;
  // }
  // return copArr.join('');
  const arr = S.split('').slice(0, length);
  for (let i = 0; i < length; i++) {
    if (arr[i]===' ') {
      arr[i] = '%20'
    }
  }
  return arr.join('');
};
/* 简化 */

console.log(replaceSpaces("               ", 5));
var replaceSpaces = function(S, length) {
  return encodeURI(S.substring(0,length))
};


var replaceSpaces = function(S, length) {
  return S.substr(0, length).split(' ').join('%20')
};

var replaceSpaces = function(S, length) {
  return S.substr(0, length).replace(/\s/g, '%20')
};
