/**
 * map实现 
 * @param {*} callbackFn map的第一个参数 函数 接收三个参数: value valueIndex, arr
 * @param {*} thisArg 函数的this指针 没有传递就是undefined
 * @return 函数执行后的数组
 */
Array.prototype.map = function(callbackFn, thisArg) {
    // 异常处理
    if (this == null) {
        throw new TypeError("Cannot read property 'map' of null or undefined");
    }
    // this指向数组 转换成数组对象，有length属性和K-V键值对
    let O = Object(this);
    //  无符号右移0位 ，左侧用0填充，结果非负
    let len = O.length >>> 0;
    // 第一个参数检测是否是函数
    if (typeof callbackFn !== 'function') {
        throw new Error(callbackFn + 'is not a function');
    }
    let T = thisArg;
    let A = new Array(len);
    let k = 0;
    while(k < len) {
        // 检查 O 及其原型链是否包含属性 k
        if (k in O) {
            let kValue = O[k];
            let mappedValue = callbackfn.call(T, kValue, k, O);
            A[k] = mappedValue;
        }
        k++;
    }
    return A;
}
/**
 * filter实现
 * @param {*} callbackfn  第一个参数为过滤用的函数  通过判断返回值true或false判断是否放进新的 数组
 * @param {*} thisArg  this指针
 * @returns 满足条件的数组
 */
Array.prototype.filter = function(callbackfn, thisArg) {
    // 异常处理
    if (this == null) {
        throw new TypeError("Cannot read property 'map' of null or undefined");
    }
    if (typeof callbackfn !== 'function') {
      throw new TypeError(callbackfn + ' is not a function')
    }
    let O = Object(this), len = O.length >>> 0,
        T = thisArg, A = new Array(len), k = 0;
    // 新增，返回数组的索引
    let to = 0
    while(k < len) {
      if (k in O) {
        let kValue = O[k]
        // 新增
        if (callbackfn.call(T, kValue, k, O)) {
          A[to++] = kValue;
        }
      }
      k++
    }
    // 新增，修改 length，初始值为 len
    A.length = to;
    return A;
}

/**
 * forEach
 * @param {*} callbackfn 执行函数
 * @param {*} thisArg
 * @return 没有return值
 */
Array.prototype.forEach = function(callbackfn, thisArg) {
    // 相同
    // ...
    while(k < len) {
      if (k in O) {
        let kValue = O[k]
   
        // 这部分是 map
        // let mappedValue = callbackfn.call(T, kValue, k, O)
        // A[k] = mappedValue
        // 这部分是 forEach
        callbackfn.call(T, kValue, k, O)
      }
      k++
    }
    // 返回 undefined
    // return undefined
}
/**
 * reduce实现
 * @param {*} callbackfn 每一步执行的函数
 * @param {*} initialValue 初始值 没有传递就默认是第一个
 * @returns 最终结果
 */
Array.prototype.reduce = function(callbackfn, initialValue) {
    // 异常处理
    if (this == null) {
        throw new TypeError("Cannot read property 'map' of null or undefined");
    }
    if (typeof callbackfn !== 'function') {
      throw new TypeError(callbackfn + ' is not a function')
    }
    let O = Object(this)
    let len = O.length >>> 0
    let k = 0, accumulator
    
    // 新增
    if (initialValue) {
      accumulator = initialValue
    } else {
        // 数组是空 也就没有值 报错
      if (len === 0) {
        throw new TypeError('Reduce of empty array with no initial value');
      }
      // 循环判断当O及其原型链上存在属性K时，accumulator=O[K]并推出uxunhuan
      let kPresent = false
      while(!kPresent && (k < len)) {
        kPresent = k in O
        if (kPresent) {
          accumulator = O[k] 
        }
        k++
      }
    }
    
    while(k < len) {
      if (k in O) {
        let kValue = O[k]
        accumulator = callbackfn.call(undefined, accumulator, kValue, k, O)
      }
      k++
    }
    return accumulator
  }