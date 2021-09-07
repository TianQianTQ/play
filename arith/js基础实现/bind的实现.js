/* bind的实现
  bind方法会创建一个新函数，当新函数被调用时，第一个参数作为运行时的tihs,
  其他参数作为传递的实参

  tips: 考虑bind返回的函数作为构造函数情况:
    bind指定的this值会失效,但传入的参数依然生效
*/

// eg:
var foo = {
  value: 1
};

function bar(name, age) {
  this.habit = 'shopping';
  console.log(this.value); // this已经指向了obj
  console.log(name);
  console.log(age);
}

bar.prototype.friend = 'kevin';

var bindFoo = bar.bind(foo, 'daisy');

var obj = new bindFoo('18');
// undefined !!!
// daisy
// 18
console.log(obj.habit);
console.log(obj.friend);
// shopping
// kevin


Function.prototype.bind2 = function(context) {
  if (typeof this !== 'function') {
    throw new Error('xxx');
  }
  let self = this;
  // 获取bind2函数第二个以后的参数
  let args = Array.prototype.slice.call(arguments, 1);
  let fNOP = function() {}; // 进行中转，避免直接修改返回的函数，会直接修改函数的prototype
  let fbound = function() {
    // bind返回的函数的参数
    let bindArgs = Array.prototype.slice.call(arguments);
    // 当作为构造函数时，this指向实例，self指向绑定函数
    // 当作为普通函数时，this指向window,self指向绑定函数
    return self.apply(this instanceof fNOP ? this : context, args.concat(bindArgs));
  }
  fNOP.prototype = this.prototype;
  fbound.prototype = new fNOP();
  return fbound;
}


// 处理参数，返回一个闭包 判断是否为构造函数 拼接参数
Function.prototype.bind2 = function(context, args1) {
  if (typeof context !== 'function') return undefined;
  const _this = this;
  return function F(...args2) {
    if (this instanceof F) {
      return  new _this(...args1, ...args2)
    }
    return _this.apply(context, args1.concat(args2))
  }
}