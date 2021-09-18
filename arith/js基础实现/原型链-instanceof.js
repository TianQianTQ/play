/**instanceof */

a  instanceof  B
/*检查a的原型链（_proto_）上是否有B.prototype
若有返回true 无返回false
*/

const instance_of  = (l, r) => {
  let o = r.prototype; // 取r的显式原型
  l = l._proto_;  // 取l的隐式原型
  while(true) {
    if (l === null) return false;
    if (l === o) return true;
    l = l._proto_;
  }
}

/*
function instanceof Function  // true
function instanceof Object // true
*/


function myInstanceof(obj, Constructor) {
  let leftProp = obj._proto_;
  let rightProp = Constructor.prototype;
  if (leftProp === rightProp) return true;
  if (leftProp === null) return false;
  return myInstanceof(leftProp, Constructor);
}

//  in 操作符会检查属性是否存在对象及其 [[Prototype]] 原型链中。
var obj = {
  a: 2
};
Object.prototype.b = function() {
 return "hello b";
}
("a" in obj);     // true
("b" in obj);     // true
// hasOwnProperty(...)只会检查属性是否存在对象中，不会向上检查其原型链。
obj.hasOwnProperty("a");     //true
obj.hasOwnProperty("b");     //false