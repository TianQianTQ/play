// 1、基本实现
const flat = (array) => {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      result = result.concat(flat(array[i]));
    } else {
      result.push(array[i]);
    }
  }
  return result;
}
// 2、使用reduce 简化
function flatten(array) {
  return array.reduce(
    (target, current) =>
      Array.isArray(current) ?
        target.concat(flatten(current)) :
        target.concat(current)
    , [])
}
// 3、根据指定 深度扁平数组
function flattenByDeep(array, deep = 1) {
  return array.reduce(
    (target, current) =>
      Array.isArray(current) && deep > 1 ?
        target.concat(flattenByDeep(current, deep - 1)) :
        target.concat(current)
    , [])
}


const flat = (arr) => {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'object') {
      res = res.concat(flat(arr[i])) // 拼接
    } else {
      res.push(arr[i]);
    }
  }
  return res;
}
// 记得 设置初始值
const flat = (arr) => {
  return arr.reduce((pre, cur) => Array.isArray(cur) ? pre.concat(flat(cur)) : pre.concat(cur), [])
}

function getRes(arr) {
  return arr.reduce((pre, cur) => {
      pre.push(typeof cur === 'object' ? getRes(cur) : cur)
  }, [])
}
function getRes(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
          res = res.concat(getRes(arr[i]))
      } else  {
          res.push(arr[i])
      }
  }
  return  res;
}

let arr = [1,2,[3,4,[5,6],'7'],'a,b]c'];
console.log(getRes(arr).length);

// 3、根据指定深度扁平数组
const flatByDeep = (arr, deep) => {
  return arr.reduce((pre, cur) => Array.isArray(cur) && deep > 1 ? pre.concat(flatByDeep(cur, deep - 1)) : pre.concat(cur), [])
}


/** reduce应用
 * 1、使用reduce实现map
 * 2、使用reduce实现filter
 */
// 使用reduce实现map
Array.prototype.reduceToMap = function (handler) {
  return this.filter((pre,cur, index) => {
    pre.push(handler.call(this, cur, index));
    return pre;
  }, [])
}
// 使用reduce实现filter
Array.prototype.reduceToFilter = function (handler) {
  return this.reduce((pre, cur, index) => {
    if (handler.call(this, cur, index)) {
      pre.push(cur)
    }
    return  pre;
  },[])
}

// 数组扁平化去重
/*
已知如下数组，编写一个程序将数组扁平化去并除其中重复部分数据，最终得到一个升序且不重复的数组
*/

var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];

// 方案一: 利用 es6的 flat(Infinity)
function flat2(arr) {
  return Array.from(new Set(arr.flat(Infinity))).sort((a, b) => a-b);
}
// 方案二: 利用toString
function flat3(arr) {
  return arr.toString().split(',').sort((a, b) => a-b).map(Number);
}
console.log(flat3(arr));
// 方案三： 重写flat函数 与unique函数 再排序
Array.prototype.flat = function() {
  return [].concat(...this.map(item => (Array.isArray(item) ? item.flat() : [item])));
}
Array.prototype.unique =  function() {
  return [...new Set(this)];
}
const sort = (a, b) => a - b;
console.log(arr.flat().unique().sort(sort)); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 ]

