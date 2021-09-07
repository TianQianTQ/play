// 冒泡
function sort(arr) {
  for (let i = 0, flag = 1; i < arr.length - 1 && flag===1; i++) {
    flag = 0;
    for (j = 0; j < arr.length - i -1; j++) {
      if (arr[j] > arr[j+1] ) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
        flag = 1;
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
    let k  = i;
    for (let  j = i+1; j < arr.length;  j++) {
      if (arr[k] > arr[j]) {
        k = j
      }
    }
    if (i !== k) {
      [arr[k], arr[i]] = [arr[i], arr[k]]
    }
  }
  return arr;
}
let arr = [3, 2, 5, 4, 6, 1];
console.log(sort(arr));

// 快排 
function sort(arr, left, right) {
  if (left < right) {
    let i = left;
    let j = right;
    let key = arr[left];
    while (i < j) {
      while (i < j && arr[j] >= key)  j--;
      while (i < j && arr[i] <= key) i++;
      [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    [arr[i], arr[left]]  = [arr[left],  arr[i]];
    sort(arr, left, i-1);
    sort(arr, i+1, right);
  }
  return arr;
}
let arr = [3, 2, 5, 4, 6, 1];
console.log(sort(arr, 0, arr.length - 1));

//  插入排序
function sort(arr) {
  let j ,temp;
  for (let i = 1; i < arr.length; i++) {
    j = i -1;
    temp = arr[i]
    while ( j >= 0 && arr[j] > temp) {
      arr[j+1] = arr[j];
      j--;
    }
    arr[j+1] = temp
  }
  return arr;
}
let arr = [3, 2, 5, 4, 6, 1];
console.log(sort(arr));

// 归并
function merge(left, right) {
  let res  =  [];
  while (left.length && right.length) {
    if (left[0]  < right[0]) {
      res.push(left.shift());
    } else {
      res.push(right.shift())
    }
  }
  while (left.length) {
    res.push(left.shift());
  }
  while (right.length) {
    res.push(right.shift())
  }
  return res;
}
function sort(arr) {
  if (arr.length < 2)  return  arr;
  let mid = Math.floor(arr.length / 2) 
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  return merge(sort(left), sort(right));
}
let arr = [4,3,6,9,3,1,5];
console.log(sort(arr));



call 
function myCall(context) {
  if (typeof  this !== 'function')  {
    throw Error ('error')
  }
  if (typeof this ===  '')
  context = context || window
  const fn = Symbol();
  context[fn] = this;
  let args = [...arguments].slice(1);
  let res = context.fn(...args);
  delete context.fn;
  return res;
}
apply 
function myApply(context) {
  //  
  context = context || window;

}
bind 
function myBind(context) {
  //
  let that = this;
  let args = [...arguments].slice(1);
  return function F() {
    let args2 =  args.concat(...arguments)
    if (this instanceof F) {
      return new that(args2);
    }
    return that.apply(context, args2)
  }
}


/*
输入["t","h","e"," ","s","k","y"," ","i","s"," ","b","l","u","e"]
输出["b","l","u","e"," ","i","s"," ","s","k","y"," ","t","h","e"]
*/

function change(arr) {
  let str = arr.join('').trim();
  let str2 = str.split(' ');
  let newArr = []
  for (let i = str2.length-1; i>=0;  i--) {
    newArr.push(str2[i].toString())
  }
  let newStr = newArr.join(' ');
  return newStr.split('');
}
let arr = ["t","h","e"," ","s","k","y"," ","i","s"," ","b","l","u","e"]
console.log(change(arr))

let  arr = [];
for (var i = 0;  i< 9; i++) {
  arr.push(function() {
    return console.log(i)
  })
}
arr[0]()


class Parent {
  constructor() {
    this.x = 1
  }
  static getValue() {
    console.log(this.x, 'static-parent')
  }
  getValue() {
    console.log(this.x, 'prototype-parent')
  }
}
class Child extends Parent {
  constructor()  {
    super();
    this.x = 2
  }

  getValue() {
    console.log(this.x, 'child-prototype')
  }
  static getValue() {
    console.log(this.x, 'child-static')
  }
}
let child = new Child();
child.getValue()
Child.getValue()
