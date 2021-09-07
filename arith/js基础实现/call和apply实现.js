/** call和apply实现
 * call: 第一个参数为指定this的对象，第二个参数是传参
 */
// eg:
let value = 2;
let foo = {
  value: 1,
}
function bar() {
  console.log(this.value);
}
bar.call(foo); // 1
// 步骤
// --判断当前this是否为函数
// 1、将函数设为对象的属性
// 2、执行该函数
// 3、删除该函数
// 注意： this参数可传null,此时指向window

// 实现call
Function.prototype.call2 = function (context) {
  let context = context || window;
  context.fn = this;
  let args = [];
  for (let i = 1; i < arguments.length; i++) {
    args.push('arguments[' + i + ']'); // eval解析
  }
  let result = eval('context.fn(' + args + ')'); // 函数传参不能直接是数组，使用join会改变参数属性
  delete context.fn;
  return result;
}
// 实现apply
Function.prototype.apply2 = function (context, arr) {
  let context = context || window;
  context.fn = this;
  let result;
  if (!arr) {
    result = context.fn();
  } else {
    let args = [];
    for (let i = 0; i < arr.length; i++) {
      args.push('arr[' + i + ']');
    }
    result = eval('context.fn(' + args + ')')
  }
  delete context.fn;
  return result;
}



Function.prototype.call2 = function(context) {
  if (typeof this !== 'function') {
    throw Error('not a function')
  }
  context = context || window;
  context.fn = this;
  let args = [];
  for (let i = 1; i < arguments.length; i++) {
    args.push('arguments[' + i + ']')
  };
  let result = eval('context.fn(' + args + ')')
  delete context.fn;
  return result;
}

// 优化call实现 symbol保证函数不会重名，参数直接使用...args

Function.prototype.call2 = function(context, ...args) {
  if (typeof this !== 'function') return undefined;
  context = context || window;
  const fn = Symbol();
  context[fn] = this;
  const result = context[fn](...args);
  delete context[fn];
  return result;
}
// 优化apply实现
Function.prototype.apply2 = function(context, args) {
  if (typeof this !== 'function') throw Error('xxx');
  context = context || window;
  const fn = Symbol();
  context[fn] = this;
  let result;
  if (Array.isArray(args)) {
    result = context[fn](...args);
  } else {
    result = context[fn];
  }
  delete context[fn];
  return result;
}

