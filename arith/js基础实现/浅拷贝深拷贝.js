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


