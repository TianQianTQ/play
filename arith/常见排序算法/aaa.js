// 冒泡 
function sort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  return arr;
}
let arr = [3, 2, 5, 4, 6, 1];
console.log(sort(arr));


// 选择 
function sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let k = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[k] > arr[j]) {
        k = j;
      }
    }
    if (i !== k) {
      [arr[i], arr[k]] = [arr[k], arr[i]]
    }
  }
  return arr;
}
let arr = [3, 2, 5, 4, 6, 1];
console.log(sort(arr));
// 快速排序
function sort(arr, left, right) {
  if (left < right) {
    let key = arr[left];
    let i = left;
    let j = right;
    while (i < j) {
      while (i < j && arr[j] >= key) j--;
      while (i < j && arr[i] <= key) i++;
      [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    [arr[i], arr[left]] = [arr[left], arr[i]]
    sort(arr, left, i - 1);
    sort(arr, i + 1, right);
  }
  return arr;
}
let arr = [3, 2, 5, 4, 6, 1];
console.log(sort(arr, 0, arr.length - 1));

// 插入排序
function sort(arr) {
  let j, temp;
  for (let i = 1; i < arr.length; i++) {
    j = i - 1;
    temp = arr[i];
    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = temp;
  }
  return arr;
}
let arr = [3, 2, 5, 4, 6, 1];
console.log(sort(arr));
// 归并排序
function merge(left, right) {
  let res = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      res.push(left.shift())
    } else {
      res.push(right.shift())
    }
  }
  while (left.length) {
    res.push(left.shift())
  }
  while (right.length) {
    res.push(right.shift())
  }
  return res;
}
function sort(arr) {
  if (arr.length < 2) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  return merge(sort(left), sort(right));
}
let arr = [3, 2, 5, 4, 6, 1];
console.log(sort(arr));



// 数组扁平化

function flag(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'object') {
      res = res.concat(flag(arr[i]))
    } else {
      res.push(arr[i])
    }
  }
  return res;
}
const arr = [1, [2, 3], [4, 5, 6, [7]]]
console.log(flag(arr))
//  reduce
function flag(arr) {
  return arr.reduce((target, current) =>
    Array.isArray(current) ? target.concat(flag(current)) : target.concat(current)
    , [])
}
const arr = [1, [2, 3], [4, 5, 6, [7]]]
console.log(flag(arr))
// 指定深度的
function flag(arr, deep) {
  return arr.reduce((target, current) =>
    Array.isArray(current) && deep > 1 ? target.concat(flag(current), deep - 1) : target.concat(current), []
  )
}

function map(handler) {
  return this.reduce((pre, cur, index) => {
    pre.push(handler.call(this, cur, index));
    return pre
  } ,[])
}
function filter(handler) {
  return this.reduce((pre, cur, index) => {
    if (handler.call(this, cur, index)) {
      pre.push(cur)
    }
    return pre;
  }, [])
}