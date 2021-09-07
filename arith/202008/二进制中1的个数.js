/*剑指 Offer 15. 二进制中1的个数
请实现一个函数，输入一个整数，输出该数二进制表示中 1 的个数。
例如，把 9 表示成二进制是 1001，有 2 位是 1。因此，如果输入 9，则该函数输出 2。
*/
// 常规解法 先 转换为二进制，然后统计1的个数
var hammingWeight = function(n) {
  let num  = n.toString(2);
  console.log(num, typeof num)
  return num.split('').filter(i => {return i==='1'}).length
};

// 先转为二进制，再利用正则
const r =  n.toString(2).match(/1/g);
return r ? r.length : 0

// 利用n&(n-1) 消掉一个1的规律 
// 7的二进制位00111, 6的二进制位00110 ,那么00111&00110=00110,我们发现n&(n-1)每次可以消掉1个1,每次消掉一个1记录一下就可以统计出二进制中1的个数。
var hammingWeight = function(n) {
  let res=0;
  while(n){
    n=n&(n-1);
    res++;
  }
  return res;
};