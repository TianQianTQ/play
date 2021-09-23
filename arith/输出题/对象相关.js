function A() {};
function B() {};
A.prototype = {
    fun: function() {}
}
var a = new A();
console.log(a.constructor === A);
console.log(A.prototype.constructor === A);
console.log(a.hasOwnProperty('constructor'));
console.log(a instanceof A);

A.prototype = new B();
var b =  new A();
console.log(b.constructor === A);
console.log(B.prototype.constructor === A);
console.log(b.constructor.prototype.constructor === A);
console.log(b.hasOwnProperty('constructor'));
console.log(b instanceof A);
console.log(b instanceof B);


// 木易杨
function Parent(age) {
    this.age = age;
}

var p = new Parent(50);
p.constructor === Parent; // true
p.constructor === Object; // false
