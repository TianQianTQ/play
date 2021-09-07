// 是鲜牛奶promise.all

Promise.prototype.myPromiseAll = (promises) => {
  if (!Array.isArray(promises)) return null;  // 迭代器
  let res = [];
  let count = 0;
  promises.forEach((promise, index) => {
    Promise.resolve(promise).then((re) => {
      res.push(re);
      res[index] = re
      count ++;
      if (count === promises.length) return res;
    }).catch(err => {
      return err;
    })
  })
  // for (let i of promises)
}

// 判断输出题
function Parent() {
  this.a = '1';
  this.b = '2';
  this.c = {
    name: 'c',
    age: '10'
  };
}

Parent.prototype.getA = function() {
  console.log(this.a)
};

function Child(a, b) {
  this.a = a;
  this.b = b;
}
Child.prototype = new Parent();
Child.prototype.constructor = Child;
//Child._proto_ = Parent.prototype;
Child.prototype = Parent.prototype;
let c1 = new Child(2,3);
let c2 = new Child(3,4);
console.log(c1.c, c2.c);
c1.c.name =  'd'
console.log(c1.c, c2.c);// 


console.log(Chind instanceof Parent);
// 防抖
function debounce(fn, time) {
  let timer = null;
  return function(...args) {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, time)
  }
}
function throttle(fn, gapTime) {
  let _lastTime = null;
  return function() {
      let _nowTime = + new Date();
      if (_nowTime - _lastTime > gapTime || !_lastTime) {
         fn();
         _lastTime = _nowTime;
      }
  }
}
// 节流
function throttle(fn, time) {
  let pre = 0;
  return function(...args) {
    let now = Date.now();
    if (now - pre > time) {
      fn.apply(this, args);
      pre = now;
    }
  }
}
function throttle(fn, time) {
  let timer = null;
  let pre = 0;
  return function(...args) {
    if (Date.now() - pre > time) {
      clearTimeout(timer);
      timer = null;
      pre = Date.now();
      fn.apply(this, args);
    } else if(!timer) {
      timer = setTimeout(() => {
        fn.apply(this, args);
      }, time)
    }
  }
}


function A() {}
function B() {}
A.prototype =  {
  fun:  function(){}
}
var a = new A();
console.log(a.constructor === A);
console.log(A.prototype.constructor  ===  A);
console.log(a.hasOwnProperty('constructor'));
console.log(a instanceof A);

A.prototype = new B();
var b = new A();
console.log(b.constructor === A);
console.log(B.prototype.constructor === A);
console.log(b.constructor.prototype.constructor ===  A);
console.log(b.hasOwnProperty('constructor'));
console.log(b instanceof A);
console.log(b instanceof B);


var b = {x: 4}
function fn2(o) {
  this.x = o.x;
}
fn2.prototype = {
  init: function() {
    return this.x;
  }
}
var fn3 = new fn2({x: 5});
console.log(fn3.init());
console.log(fn2.init === fn2.init);
console.log(fn3.init.call(b));
var c = fn3.init;
console.log(c());