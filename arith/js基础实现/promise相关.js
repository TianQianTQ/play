/** 1、promise在forEach中并行改为串行
 *   forEach中并行: forEach是不能阻塞的，并行
 *   1)使用for循环、while循环、for-of
 *   2)使用promise链式调用
 *  
 *   使用 promise链式调用 ，队列
 */
// eg:
function getA() { // 第一个promise
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(2);
      resolve(2);
    }, 1000);
  });
}

function getB() { // 第二个promise
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(3)
      resolve(3);
    }, 1000);
  });
}
[getA, getB].forEach((item) => item());  // 同时打印出 2和 3

let getResult = (arr) => {
  let res = [];
  function queue(arr) { // 使用队列
    let seq = Promise.resolve();  //  使用promise.then执行下一个 
    arr.forEach((item) => {
      seq = seq.then(item);
      res.push(seq)
    })
    return seq;
  }
  queue([getA, getB])
}
getResult()

[getA, getB].forEach(async (item) => await item());  // 同时打印出 2和 3


//  题 2：
const list = [1, 2, 3]
const square = num => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num * num)
    }, 1000)
  })
}

function test() {
  list.forEach(async x=> {
    const res = await square(x)
    console.log(res)
  })
}
test() //  顺序 输出1 4 9 
// for循环 每隔一秒输出一次
async function test() {
  for (let i = 0; i < list.length; i++) {
    let x = list[i]
    const res = await square(x)
    console.log(res)
  }
}
// for-of循环 ，每隔一秒输出一次
async function test() {
  for (let x of list) {
    const res = await square(x)
    console.log(res)
  }
}
//  利用promise本身链式
let promise = Promise.resolve()
function test(i = 0) {
  if (i === list.length) return
  promise = promise.then(() => square(list[i]))
  test(i + 1)
}
test()