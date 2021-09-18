// 浅拷贝： concat() Object.assign();
// 深拷贝：
// 1、JSON.parse(JSON.stringify()) // 正常的json情况下 （对象的方法可能为undefined）
// 2、递归方法

function deepClone (data) {
  if (typeof data !== 'object'  || data == null) return data;
  let result;
  if (data instanceof Array) {
    result = []
  } else {
    result = {}
  }
  for (let key in data) {
    // 保证key不是原型的属性
    if (data.hasOwnProperty(key)) {
      result[key] = deepClone(data[key])
    }
  }
  return result;
}
let arr =  [1,2,3,4,5,6];
let b = deepClone(arr);
arr[3] = 'd';
console.log(b)
console.log(arr);

// 实现Object.assign(a,b);
// 1、判断原生Object是否支持该函数
// 2、判断参数是否使用正确
// 3、使用Object()转换为对象  // b为常量，则转换为对象
// 4、使用for-in循环遍历出可枚举的自有属性并复制给新的目标对象（使用hasOwnProperty获取自有属性）

if (typeof Object.assign2 !== 'function') {
  // Object.assign不可枚举 defineProperty  enumerable默认为false
  Object.defineProperty(Object, 'assign2', {
    value: function(target) {
      if (!target) {
        throw new TypeError('cannot convert undefined or null to object');
      }
      let to = Object(target);
      // 处理参数
      for (let  i = 1; i < arguments.length; i++) {
        // 赋值对象 值放在目标对象to上
        let source = arguments[i];
        if (source !== null) {
          for (let key in source) {
            // 检查下source上是否含有属性key 过滤原型链上的属性
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              to[key] = source[key];
            }
          }
        }
      }
      return to;
    },
    writable: true, // 可写
    configurable: true,  // 属性描述符是否可被删除
  });
}


