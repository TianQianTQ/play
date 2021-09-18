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
// slice 将 Array-like 对象通过下标操作放进了新的 Array 里面

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


// 简单的辅助绑定函数

function bind(fn, obj) {
  return function() {
    return fn.apply(obj, arguments);
  }
}

function foo(something) {
  console.log( this.a, something );
  return this.a + something;
}

var obj = {
  a: 2
};

var bar = bind( foo, obj );

var b = bar( 3 ); // 2 3
console.log( b ); // 5

// call使用场景 
// 1、通过call实现继承
function Parent() {
  this.color = ['red'];
}
function Child() {
  Parent.call(this);
}
let instance1 = new Child();
instance1.color.push('blue');
console.log(instance1.color); // red blue
let instance2 = new Child()
console.log(instance2.color) // red
// 缺点：
// 1、只能继承父类的实例的属性和方法，不能继承原型上的属性和方法
// 2、每个子类都复制了一份父类实例函数的副本，影响性能

Function.prototype.call = function(context) {
  // 先判断this
  // 添加函数与 参数
  // 执行结果
  // 删除函数
  context = context ? Object(context) : winndow;
  context.fn = this;
  let args = [];
  for (let i = 1; i < arguments.length; i++) {
    args.push('arguuments['+i+']');
  }
  var result = eval('context.fn(' + args +')');
  delete context.fn;
  return result;
}
Function.prototype.call = function(context) {
  context = context ? Object(context) : window;
  context.fn = this;
  let args = [...arguments].slice(1);
  let res = context.fn(...args);
  delete context.fn;
  return  res;
}
Function.prototype.apply = function(context) {
  context = context ? Object(context) : window;
  context.fn = this;
  let args = [...arguments].slice(1);
  let result = context.fn(args);
  delete context.fn;
  return result;
}

