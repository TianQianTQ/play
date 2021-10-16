
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



// 用js实现一个无限累加的函数
add(1); // 1
add(1)(2);  // 3
add(1)(2)(3); // 6
add(1)(2)(3)(4); // 10 
function add(a) {
  let  sum = (b) => {
    a = a + b;
    return sum;
  }
  sum.toString = function() { // 重写toString()方法
    return a;
  }
  return sum;
}

判断元素类型
let isType = type => obj => {
  return Object.prototype.toString.call(obj) === '[object ' + type + ']';
}
isType('String')('123');

/*
实现currying函数
*/

function currying(fn, length) {
  length = length || fn.length; // 第一次调用获取函数 fn 参数的长度，后续调用获取 fn 剩余参数的长度
  return function(...args) { // currying 包裹之后返回一个新函数，接收参数为 ...args
    //  新函数接收的参数长度是否大于等于 fn 剩余参数需要接收的长度
    // 满足要求，执行 fn 函数，传入新函数的参数
    // 不满足要求，递归 currying 函数，新的 fn 为 bind 返回的新函数（bind 绑定了 ...args 参数，未执行），新的 length 为 fn 剩余参数的长度
    return args.length >= length ? fn.apply(this, args) : currying(fn.bind(this, ...args), length - args.length);
  }
}
const currying = fn => 
  judge = (...args) => 
    args.length >= fn.length
      ? fn(...args)
      : (...arg) => judge(...args, ...arg);


const fn = currying(function(a, b, c) {
  console.log([a, b, c]);
});

fn("a", "b", "c")
fn("a", "b")("c")
fn("a")("b")("c")
fn("a")("b", "c")
