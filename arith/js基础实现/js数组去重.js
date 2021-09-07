let arr = [2,3,5,4,3,4,5,8];
// 1、 obj +  filter
function unique (arr) {
  let obj = {}
  return  arr.filter((item, index) => obj[item] ? false : obj[item]=true)
}
console.log(unique(arr))

//  2、 set
function unique (arr) {
  let set = new Set(arr);
  return Array.from(set);
}
const unique = arr => Array.from(new Set(arr));
const unique = arr => [...new Set(arr)];
// 3、 indexOf + filter
function unique(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}
// 4. 排序
const unique = (arr) => {
  arr.sort((a,b) => a-b);
  let pre = 0;
  let result = [];
  for (let i=0;i<arr.length;i++) {
    if (!i ||  arr[i]  !== arr[pre]) {
      result.push(arr[i])
    }
    pre = i;
  }
  return result;
}

// 5、去除重复的值   indexOf + lastIndexof
const filterNonUnique = arr => arr.filter(i => 
  arr.indexOf(i) === arr.lastIndexOf(i)
)

let arr = [2,3,5,4,3,4,5,8];
console.log(unique(arr))