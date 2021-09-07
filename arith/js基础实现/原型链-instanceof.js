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