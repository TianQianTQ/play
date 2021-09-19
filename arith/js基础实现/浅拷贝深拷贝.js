// 浅拷贝： concat() Object.assign();
// 深拷贝：
// 1、JSON.parse(JSON.stringify()) // 正常的json情况下 （对象的方法可能为undefined）
// 问题：会忽略undefined Symbol,不能序列化函数，不能解决循环引用的对象，不能处理date和正则
// 2、递归方法
注意点：1、递归实现深拷贝、参数校验、数组的兼容、循环引用的处理（使用map保存查询）

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
          // for-in循环遍历出所有可枚举的自由有属性
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


实现深拷贝:

// 判断是否是对象
function isObject(obj) {
  return typeof obj === 'object' && obj !== null;
}


function cloneDeep(source, hash = new WeakMap()) {
  // 不是对象直接返回自身
  if (!isObject(source)) return source;
  // 查询是否存在引用
  if (hash.has(source)) return hash.get(source);
  // 兼容数组
  let target = Array.isArray(source) ? [] : {};
  hash.set(source, target); //  添加哈希表设值

  let symKeys = Object.getOwnPropertySymbols(source); //查找 Symbol
  if (symKeys.length) {
    symKeys.forEach(symKey => {
      if (isObject(source[symKey])) {
          target[symKey] = cloneDeep4(source[symKey], hash); 
      } else {
          target[symKey] = source[symKey];
      }    
    });
  }

  for (let key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (isObject(source[key])) {
        target[key] = cloneDeep(source[key], hash);
      } else {
        target[key] = source[key];
      }
    }
  }
  return target;
}

// weakMap与map的区别：
// weakMap拥有set和get方法
// weakMap只接受对象作为键名(null)除外，不接受其他类型 的值作为键名 
// weakMap的键名所指向的对象，不计入垃圾回收机制
// weakMap的设计目的：在某个对象上面存放一些数据，会形成对于这个对象的引用
// WeakMap 就是为了解决这个问题而诞生的，它的键名所引用的对象都是弱引用，即垃圾回收机制不将该引用考虑在内。
// 因此，只要所引用的对象的其他引用都被清除，垃圾回收机制就会释放该对象所占用的内存。也就是说，一旦不再需要，WeakMap 里面的键名对象和所对应的键值对会自动消失，不用手动删除引用。
// 如果你要往对象上添加数据，又不想干扰垃圾回收机制，就可以使用 WeakMap。

// weakMap替代方案- 数组查询;
// [
//   {
//     source: source,
//     target: target
//   }
// ]

// 检测symbol 
// 1、Object.getOwnPropertySymbols(...)
// 2、Reflect.ownKeys(...)

// 破解递归爆栈： 循环 while(loopList.length) { 广度优先遍历  loopList.push（xx） }



