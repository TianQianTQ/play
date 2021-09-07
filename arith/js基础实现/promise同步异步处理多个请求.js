// 同步
function fn(arr) {
  Promise.all(arr).then((res) => {
    return res;
  })
}

// 异步：
async function go (arr) {
    for (let i=0; i<arr.length; i++) {
        await arr[i];
    }
}
function go(arr) {
  arr.reduce((pre, cur) => {
    return pre.then(() => cur);
  }, Promise.resolve())
}

let p = new Promise((resolve, reject) => {
  resolve();
})
p.then(promise1)
.then(promise2)
.then(promise3)
.then((res) => {
  console.log(res, '是什么')
})
function fn(arr) {
  arr.reduce((pre, cur) => {
    Promise.resolve(pre).then(cur)
  })
}

let pro1 = new Promise((resolve) => {
  setTimeout(() => {
    console.log(1);
    resolve(1);
  }, 1000)
})
let pro2 = new Promise((resolve) => {
  setTimeout(() => {
    console.log(2);
    resolve(2);
  }, 2000)
})
let pro3 = new Promise((resolve) => {
  setTimeout(() => {
    console.log(3);
    resolve(3);
  }, 3000)
})
let arr = [pro1, pro2, pro3];

function fn2(arr) {
  Promise.all(arr).then((resolve) => {
    console.log(resolve);
  })
}


function fn(arr) {
  arr.reduce((pre, cur) => {
    Promise.resolve(pre).then(cur)
  })
}
fn(arr);