/** promise对象
 *  概念：
 *  promise是一个对象，从它可获取异步操作的消息
 *  提供统一 的API，各种一步操作都可以用同样的方法进行处理
 *  特点：
 *  1、对象的状态不受外界影响：pending(进行中) fulfilled(已成功) rejected(已失败)
 *  2、一旦状态改变，就不会再变
 *  缺点：
 *  无法取消、不设置回调函数内部的错误外部无法获取、pending状态无法得知进行到哪个阶段
 *  基本用法：
 *  Promise是构造函数，用来生成Promise实例
 *  const promise  = new Promise((resolve, reject) {})
 *  promise构造函数接受一个函数作为参数，该函数的参数分别是resolve和reject,由js引擎提供
 *  then 接收两个回调函数作为参数
 *  catch 接收异常
 */


// 异步加载图片
function loadImgAsync(url) {
  return new Promise(function (resolve, reject) {
    const image = new Image();
    image.onload = function () {
      resolve(image);
    }
    image.onerror = function () {
      reject(new Error('could not load image'))
    }
    image.url = url;
  })
}
// 使用Promise实现Ajax
const getJSON = function (url) {
  const promise = new Promise(function (resolve, reject) {
    const handler = function () {
      if (this.readyState !== 4) return;
      if (this.status === 200) {
        resolve(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    }
    const client = new XMLHttpRequest();
    client.oprn('GET', url);
    client.onreadystatechange = handler;
    client.responseType = 'json';
    client.setRequestHeader('Accept', 'application/json');
    client.send();
  })
  return promise;
}
getJSON('/post.json').then(function (response) {
  console.log(response)
}, function (error) {
  console.log('出错', error);
});

/** 重要概念
 * Promise新建后会立即执行
 */
let promise = new Promise(function (resolve, reject) {
  console.log('Promise');
  resolve();
});

promise.then(function () {
  console.log('resolved.');
});

console.log('Hi!');

// Promise
// Hi!
// resolved

/** 重要概念
 * 调用resolve或reject并不会终结Promise的参数函数的执行
 */
new Promise((resolve, reject) => {
  resolve(1);
  console.log(2);
}).then(r => {
  console.log(r);
});
// 2
// 1
/** 重要概念
 * Promise对象的错误具有“冒泡”性质，会一直向后传递，直到被捕获位置
 */

/** Promise.prototype.finally()
 * 指定不管 Promise对象最后状态如何，都会执行的操作
 */
// 实现
Promise.prototype.finally = function (callback) {
  let p = this.constructor;
  return this.then(
    value => p.resolve(callback()).then(() => value),
    reason => p.resolve(callback()).then(() => { throw reason })
  )
}
/** Promise.call
 * 将多个Promise实例，包装成一个新的Promise实例p
 * 只有所有Promise都变成resolve结果才是resolve
 * 有一个被rejected，状态就变为reject,第一个reject实例返回的值会传递给p的回调函数
 * 单个实例自己定义catch，一旦你被reject不会触发Promise.all的catch
 */

/** Promise.race
 * 将多个Promise包装成一个新的Promise实例p
 * 只要单个实例有一个率先改变状态，P的状态就跟着改变
 * 率先改变的Promise的返回值传递给P的回调函数
 */

/** Promise.allSettled()
 *  将多个Promise包装成一个新的Promise实例p
 *  等所有实例都返回结果才结束
 *  结果总是fulfilled,回调函数的参数是一个数组
 */

 /** Promise.resolve()  -- Promise.reject()
  * 将现有对象转换为Promise对象
  * 1、参数是一个Promise实例，不做任何操作，返回这个实例
  * 2、参数是一个thenable对象，转为promise对象，立即执行thenable对象的then方法
  * 3、参数不是thenable对象，或根本不是对象 返回一个新的Promise对象，状态位resolved;
  * 4、不带任何参数，返回一个resolved装那台的参数
  */
