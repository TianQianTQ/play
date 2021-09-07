
/*
  实现下面功能 ```js function sum() { //... }console.log(sum(2,3)); // 输出 5 console.log(sum(2)(3)); // 输出 5
*/

function sum(fn) {
  let args1  = [].slice.call(arguments, 1)
  return function() {
    let args2 =  [].slice.call(arguments);
    return fn.apply(this, [...args1, ...args2])
  }
}

function curry(fn) {
  // 保存预置参数
  const presetArgs = [].slice.call(arguments, 1)
  // 返回一个新函数
  function curried () {
    // 新函数调用时会继续传参
    const restArgs = [].slice.call(arguments)
    const allArgs = [...presetArgs, ...restArgs]
    return curry.call(null, fn, ...allArgs)
  }
  // 重写toString
  curried.toString = function() {
    return fn.apply(null, presetArgs)
  }
  return curried;
}

