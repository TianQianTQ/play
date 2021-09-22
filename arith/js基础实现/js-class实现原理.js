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