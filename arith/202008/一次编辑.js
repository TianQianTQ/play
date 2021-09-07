/** 一次编辑
 * 字符串有三种编辑操作:
 * 插入一个字符、删除一个字符或者替换一个字符。 给定两个字符串，编写一个函数判定它们是否只需要一次(或者零次)编辑。

示例 1:

输入: 
first = "pale"
second = "ple"
输出: True

示例 2:

输入: 
first = "pales"
second = "pal"
输出: False

 */

 /**
 * @param {string} first
 * @param {string} second
 * @return {boolean}
 */
var oneEditAway = function(first, second) {
  if (first === second) return true;
  const lengthAbs = first.length - second.length
  if (Math.abs(lengthAbs) > 1) return false;
  const arr1 = first.split('');
  const arr2 = second.split('');
  let num = 0;
  for (let i = 0; i < first.length; i++) {
    if (arr1[i] !== arr2[i]) {
      if (num > 0) return false;
      if (lengthAbs === 0) {
        num += 1;
      } else if (lengthAbs > 0) {
        arr2.unshift(arr1[i]);
        num += 1;
      } else {
        arr1.unshift(arr2[i]);
        num += 1;
      }
    }
  }
  return  true;
};
console.log(oneEditAway('intention', 'execution'))

/**
 * @param {string} first
 * @param {string} second
 * @return {boolean}
 */
var oneEditAway = function(first, second) {
  var arr1 = first.split('')
  var arr2 = second.split('');
  var flag = false

  if(Math.abs(arr1.length - arr2.length) > 1) return false

  for(var i = 0, j=0; i<arr1.length && j<arr2.length; i++,j++){
      if(arr1[i] != arr2[j]){
          if(flag) return false
          flag = true

          if(arr1.length != arr2.length){
              arr1.length > arr2.length ? i++ : j++
              i--;j--;
          }
      }
  }
  return true
};

