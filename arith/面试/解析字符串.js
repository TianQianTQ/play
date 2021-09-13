/* 解析 "a=-0.1&b=hello&c=3&a=587.9"
返回
{
    a: ['-0.1', '587.9']
    b: 'hello',
    c: 3
}
*/
//line=readline()
//print(line)
//console.log('Hello World!');
function getRes(str) {
  if (!str) return  {};
  let obj = {};
  let arr = str.split('&');
  for (let i = 0; i < arr.length; i++) {
      let key = arr[i].split('=')[0];
      let value = arr[i].split('=')[1];
      if (obj[key]) {
          obj[key] = [].concat(obj[key], value);
      }  else {
          obj[key] = value;
      }
  }
  return obj;
}
let str = 'a=-0.1&b=hello&c=3&a=587.9&a=3'
console.log(getRes(str));