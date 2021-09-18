// 类数组对象转换为数组

let arr = [].slice.call(arguments);
let arr = Array.from(arguments); // Array.from 可以将类数组对象和可遍历对象（map  set）转换为真正的数组
let arr = [...arguments];
