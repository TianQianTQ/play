// 构造超类

function Super() {
  this.name = 'aaa'
}
Super.prototype.getName = function() {
  console.log(this.name)
}

// 原型继承
function Sub() {

}
Sub.prototype = new Super();
var sub = new Sub();
// call继承
function Sub() {
  Super.call(this);
}
let sub = new Sub();

// 对象冒充继承
function Sub() {
  let super1 = new Super;
  for (let key in super1) {
    this[key] = super1[key]
  }
  super1 =  null;
}
let sub = new Sub();

// 组合继承  call + 原型继承实现公有属性的继承
// 优点：构造函数可 传参，不会与父类共享属性，复用父类的函数
// 缺点 继承父类函数用了父类的构造函数，导致子类多了不必要的父类属性
function Parent(value) {
  this.value = value;
}
Parent.prototype.getValue = function() {
  console.log(this.value)
}
function Child(value) {
  Parent.call(this, value);
}
Child.prototype = new Parent()
let child =  new Child(1);
child.getValue() // 1
child instanceof Parent // true


// 中间类继承
function Sub() {}
Sub.prototype._proto_ = Super.prototype;
// 寄生组合 私有属性是私有的，公有的x在原型
function Sub() {}
Sub.prototype = Object.create(Super.prototype);
function objCreate(o) {
  function Temp () {}
  Temp.protytype = o;
  return  new Temp();
}
function Sub() {}
Sub.prototype = objCreate(Super.prototype);
let sub = new Sub();