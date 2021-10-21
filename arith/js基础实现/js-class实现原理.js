class Parent {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    getName() {
        console.log(this.name);
    }
    static run() {} // 只能该类调用 实例无法调用
}
function Parent(name, age) {
    this.name = name;
    this.age = age;
}
Parent.prototype.getName = function() {
    console.log(this.name);
}
Parent.run = function() {} // 实例无法调用


function Base(name = "") {
    this.name = name;
}
Base.prototype.getName = function() {
    return this.name;
};
function Person(name = "") {
    Base.call(this, name);
}
Person.prototype = Object.create(Base.prototype);
Person.prototype.constructor = Person;

console.log(new Person("jkm"));

function inherits(sub, sup) {
    sub.prototype = Object.create(sup.prototype);
    sub.prototype.constructor=sup;
}
function Sub() {
    inherits(Sub, Sup);
    Sup.apply(this, arguments);
}
  