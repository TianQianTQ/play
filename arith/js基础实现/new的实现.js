// new  
// 创造一个实例对象，可访问构造函数的属性
// 可访问到构造函数prototype中的属性
// 结果是一个新对象

function new1() {
  let obj = new Object();
  Constructor = [].shift.call(arguments); // 构造函数
  obj._proto_ = Constructor.prototype; // 将obj的原型指向构造函数 =》obj可以访问到构造函数原型中的属性
  let res = Constructor.apply(obj, arguments);// 改变你构造函数this的指向
  return typeof res === 'object' ? res : obj;// 解决构造函数有返回值的问题 - 》 function a { return '1' }; let s = new a(); // 1;
}


function myNew(func, ...args) {
  if (typeof func !== 'function') {
    console.log('第一个参数必须为函数');
    return;
  }
  let obj = new Object(func.prototype);
  let res = func.apply(obj, args);
  return (res instanceof Object) ? res : obj;
}
