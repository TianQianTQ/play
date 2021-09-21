// new  
// 创造一个实例对象，可访问构造函数的属性
// 可访问到构造函数prototype中的属性
// 结果是一个新对象

function new1() {
  let obj = new Object();
  // var obj = Object.create(Con.prototype);
  Constructor = [].shift.call(arguments); // 构造函数
  obj._proto_ = Constructor.prototype; // 将obj的原型指向构造函数 =》obj可以访问到构造函数原型中的属性
  let res = Constructor.apply(obj, arguments);// 改变你构造函数this的指向
  return typeof res === 'object' ? res : obj;// 解决构造函数有返回值的问题  // 优先返回构造函数返回的对象
}

// 优化实现new
function create() {
	// 1、获得构造函数，同时删除 arguments 中第一个参数
    Con = [].shift.call(arguments);
	// 2、创建一个空的对象并链接到原型，obj 可以访问构造函数原型中的属性
    var obj = Object.create(Con.prototype);
	// 3、绑定 this 实现继承，obj 可以访问到构造函数中的属性
    var ret = Con.apply(obj, arguments);
	// 4、优先返回构造函数返回的对象
	return ret instanceof Object ? ret : obj;
};


function myNew(func, ...args) {
  if (typeof func !== 'function') {
    console.log('第一个参数必须为函数');
    return;
  }
  let obj = new Object(func.prototype);
  let res = func.apply(obj, args);
  return (res instanceof Object) ? res : obj;
}


function Am() {
  return {
    a: 1
  };
}
let r = MyNew(Am);
console.log(r, 'r');
function MyNew() {
  let obj = new Object(),
      Constructor = [].shift.call(arguments);
  obj._proto_ = Constructor.prototype;
  let res = Constructor.apply(obj, arguments);
  return (res instanceof Object) ? res : obj;
}

// apply打平数组参数  bind 实现 柯里化
function foo(a, b) {
  connsole.log(`a: ${a}, b: ${b}`);
}
let ø = Object.create( null );
foo.apply(ø, [2,3]);
let bar = foo.bind(ø, 2);
bar(3); // a:2，b:3 


// 打印题1:

var name = 'window'

var person1 = {
  name: 'person1',
  show1: function () {
    console.log(this.name)
  },
  show2: () => console.log(this.name),
  show3: function () {
    return function () {
      console.log(this.name)
    }
  },
  show4: function () {
    return () => console.log(this.name)
  }
}
var person2 = { name: 'person2' }

person1.show1()
person1.show1.call(person2)

person1.show2()
person1.show2.call(person2)

person1.show3()()
person1.show3().call(person2)
person1.show3.call(person2)()

person1.show4()()
person1.show4().call(person2)
person1.show4.call(person2)()

// 打印题2：
var name = 'window'

function Person (name) {
  this.name = name;
  this.show1 = function () {
    console.log(this.name)
  }
  this.show2 = () => console.log(this.name)
  this.show3 = function () {
    return function () {
      console.log(this.name)
    }
  }
  this.show4 = function () {
    return () => console.log(this.name)
  }
}

var personA = new Person('personA')
var personB = new Person('personB')

personA.show1()
personA.show1.call(personB)

personA.show2()
personA.show2.call(personB)

personA.show3()()
personA.show3().call(personB)
personA.show3.call(personB)()

personA.show4()()
personA.show4().call(personB)
personA.show4.call(personB)()