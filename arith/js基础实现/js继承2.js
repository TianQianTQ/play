/*------------------------------------------------------------------------------
1、原型链继承
Sup.prototype._proto_ = Sub.prototype; 通过_proto_指向Sub原型
------------------------------------------------------------------------------*/
Sup.prototype = new Sub();
let instance1 = new Sup();
// 缺点：多个实例对引用对象的操作会被篡改

/*------------------------------------------------------------------------------
 2、借用构造函数继承
 使用父类的构造函数来增强子类实例，等同于复制父类的实例给子类（不使用原型）
------------------------------------------------------------------------------*/
function Sub() {}
function Sup() {
    Sub.call(this);
}
let instance1 = new Sup();
// 缺点：
// 1、只能继承父类的实例属性和方法，不能继承原型属性/方法
// 2、无法实现复用，每个子类都有父类实例函数的副本，影响性能

/*------------------------------------------------------------------------------
3、组合继承
用原型实现对原型属性和方法的继承，用借用构造函数方式实现对实例的属性和方法继承。
------------------------------------------------------------------------------*/
function Sup(name) {
    this.name = name;
    this.color = ['red', 'blue', 'green'];
}
Sup.prototype.sayName = function() {
    console.log(this.color);
}
function Sub(name, age) {
    Sup.call(this, name); // 继承属性，第二次调用Sup
    this.age = age;
}
Sub.prototype = new Sup(); // 继承方法，构造原型链 第一次调用Sup
Sub.prototype.constructor = Sub; // 重写constructor属性，指向自己的构造函数
Sub.prototype.sayAge = function() {
    console.log(this.age);
}
let instance1 = new Sub('Nicholas', 29);
instance1.colors.push('black'); // "red,blue,green,black"
instance1.sayName(); //"Nicholas";
instance1.sayAge(); //29

var instance2 = new SubType("Greg", 27);
alert(instance2.colors); //"red,blue,green"
instance2.sayName(); //"Greg";
instance2.sayAge(); //27

// 缺点：
// 第一次调用SuperType()：给SubType.prototype写入两个属性name，color。
// 第二次调用SuperType()：给instance1写入两个属性name，color。
// 组合模式的缺点就是在使用子类创建实例对象时，其原型中会存在两份相同的属性/方法。

/*------------------------------------------------------------------------------
4、原型式继承-- Object.create()
利用一个空对象作为中介，将某个对象直接赋值给空对象构造函数的原型
------------------------------------------------------------------------------*/
function object(obj) {
    function F() {}
    F.prototype = obj;
    return new F();
}
let person = {
    name: 'zhangsan',
    friends: ['a', 'b', 'c'],
}
let person1 = object(person);
person1.name = 'lisi';
person1.friends.push('d');

let person2 = object(person);
person2.name = 'wangwu';
person2.friends.push('e');
console.log(person.friends); // ['a', 'b', 'c', 'd', 'e']
// 缺点：
// 1、原型链继承多个实例的引用类型属性指向相同，存在篡改的肯能
// 2、无法传递参数

/*------------------------------------------------------------------------------
5、寄生式继承
在原型式继承的基础上，增强对象，返回构造函数
------------------------------------------------------------------------------*/

// 函数的主要作用是为构造函数新增属性 和方法，以增强函数
function createAnother(ori) {
    let clone = object(ori); // 通过调用 object()函数 创建一个新对象
    clone.sayHi = function() { // 以某种你那个  方式来增强对象
        alert('hi');
    }
    return  clone;
}
var person = {
    name: "Nicholas",
    friends: ["Shelby", "Court", "Van"]
  };
var anotherPerson = createAnother(person);
anotherPerson.sayHi(); //"hi"

// 缺点: 同原型式继承
// 1、原型链继承多个实例的引用类型属性指向相同，存在篡改的肯能
// 2、无法传递参数

/*------------------------------------------------------------------------------
6、寄生组合式继承
结合借用构造函数传递参数和寄生模式实现继承
------------------------------------------------------------------------------*/
function inheritPrototype(subType, supType) {
    let prototype = Object.create(supType.prototype); // 创建对象，创建父类原型的副本
    prototype.constructor = subType; // 增强对象，弥补因重写原型失去默认的constructor
    subType.prototype = prototype;  // 指定对象，将新创建的对象赋值给子类的原型
}
function SuperType(name) {
    this.name = name;
    this.color = ["red", "blue", "green"];
}
SuperType.prototype.sayName = function(){
    console.log(this.name);
};
// 借用构造函数传递增强子类实例属性（支持传参和避免篡改）
function SubType(name, age){
    SuperType.call(this, name);
    this.age = age;
}
// 将父类原型指向子类
inheritPrototype(SubType, SuperType);
// 新增子类原型属性
SubType.prototype.sayAge = function(){
    console.log(this.age);
}
var instance1 = new SubType("xyc", 23);
var instance2 = new SubType("lxy", 23);
instance1.colors.push("2"); // ["red", "blue", "green", "2"]
instance1.colors.push("3"); // ["red", "blue", "green", "3"]
// 特点：
// 1、只调用了一次SuperType构造函数 ，避免SubType.prototype上创建不必要的属性，原型链保持不变

/*------------------------------------------------------------------------------
7、混入方式继承多个对象
------------------------------------------------------------------------------*/
function MyClass() {
    SuperClass.call(this);
    OtherSuperClass.call(this);
}
// 继承一个类
MyClass.prototype = Object.create(SuperClass.prototype);
// 混合其它
Object.assign(MyClass.prototype, OtherSuperClass.prototype);
// 重新指定constructor
MyClass.prototype.constructor = MyClass;

MyClass.prototype.myMethod = function() {
    // do something
};
// 特点：
// Object.assign会把OtherSuperClass原型上的函数拷贝到 MyClass原型上，使 MyClass 的所有实例都可用 OtherSuperClass 的方法。



/*------------------------------------------------------------------------------
8、es6类继承 extends
    核心代码和寄生式组合继承相同，分为两条线
    1、子类的prototype的__proto__指向父类的prototype  即sub.prototype=Object.create(sup.prototype, {constructor: sub});
    2、子类的__proto__指向父类 即Object.setPrototypeof(sub,sup); 子类是构造函数，需借助父类的构造函数
    super()相当于 sbp.prototype.constructor();

    继承:通过父类的构造函数构造子类、继承父类原型的属性和方法、继承父类的属性和方法
------------------------------------------------------------------------------*/
class Rectangle {
    // constructor
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    // Getter
    get area() {
        return this.calcArea()
    }
    // Method
    calcArea() {
        return this.height * this.width;
    }
}

const rectangle = new Rectangle(10, 20);
console.log(rectangle.area);
// 输出 200
// 继承
class Square extends Rectangle {
  constructor(length) {
    super(length, length);
    // 如果子类中存在构造函数，则需要在使用“this”之前首先调用 super()。
    this.name = 'Square';
  }
  get area() {
    return this.height * this.width;
  }
}
const square = new Square(10);
console.log(square.area);
// 输出 100
// extends继承的核心 代码与 寄生组合式继承方式一样
function _inherits(subType, superType) {
    // 子类prototype属性的__proto__属性，表示方法的继承，总是指向父类的prototype属性
    subType.prototype = Object.create(superType && superType.prototype, {
        constructor: {
            value: subType,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superType) {
        // subType.__proto__ = superType 子类的__proto__属性，表示构造函数的继承，总是指向父类。（把子类构造函数(Child)的原型(__proto__)指向了父类构造函数(Parent)，）
        Object.setPrototypeOf ? Object.setPrototypeOf(subType, superType) : subType.__proto__ = superType;
    }
}

// es5继承和es6继承区别
// es5继承实质是先创建子类的实例对象，再将父类的方法添加到this上 parent.call(this);
// es6继承实质是先创建父类的实例对象this,然后再用子类的构造函数修改this ,因为子类没有自己的this,所以 必须先调用父类的super()方法，否则新建实例报错

