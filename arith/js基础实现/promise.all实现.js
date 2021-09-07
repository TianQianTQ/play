
// promise.all Promise.resolve()将参数变为Promise
function myPromiseAll (arr) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(arr)) {
      throw Error('xxx');
    }
    let result = [];
    let count = 0;
    arr.forEach((promise, index) => {
      promise.then((res) => {
        // resolve(promise).then((res) => )
        result[index] = res;
        count++;
        count === arr.length && resolve(result)
      }, (err) => {
        reject(err);
      })
    })
  })
}



// Promise.race  Promise.resolve()将参数变为promise
// 只要有一个改变状态，p就跟着改，且返回值就是先改变的回调函数
Promise._race = promises => new Promise((resolve, reject) => {
  promises.forEach((item) => {
    item.then(resolve, reject);
  })
})

// promise.finally 
// 不管成功或失败都会执行的方法 
Promise.prototype.finally = function (callback) {
  let P = this.constructor;
  return this.then(
    value  => P.resolve(callback()).then(() => value),
    reason => P.resolve(callback()).then(() => { throw reason })
  );
};


// 实现 Promise.retry，成功后 resolve 结果，失败后重试，尝试超过一定次数才真正的 reject
Promise.retry = function(fn, maxTime) {
  let count  = 0;
  function executeFn() {
    return  new Promise((resolve, reject) => {
      console.log(`尝试第${count}`);
      resolve(fn())
    }).then(res => {
      return Promise.resolve(res)
    }).catch((e) => {
      count++;
      if (count >= maxTime) {
        return Promise.reject(e)
      } else {
        return executeFn()
      }
    })
  }
  return executeFn();
}
