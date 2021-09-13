/*给定数组 ['1a','2b','13c','5a'] ，输出出现次数最多的字母前数字之和 6。*/
function getSum(arr) {
  let sum = 0;
  let obj = {};
  let max = 0;
  let maxStr = '';
  for (let i = 0; i < arr.length; i++) {
      let num = arr[i].slice(0, arr[i].length - 1);
      let str = arr[i].slice(arr[i].length - 1);
      if (obj[str]) {
          obj[str].count +=1;
          obj[str].sum += parseInt(num);
      } else {
          obj[str] = {
              count: 1,
              sum: parseInt(num)
          }
      }
      if (obj[str].count > max) {
          maxStr = str;
      }
  }
  return obj[maxStr].sum;
}
let arr = ['1a','2b','13c','5a'];
console.log(getSum(arr));

