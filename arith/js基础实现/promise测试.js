/** promise  串行、并行、并发 */
//  串行 
Promise.serial = function (promiseGens, allowFail) {
  let seq = Promise.resolve();
  promiseGens.forEach(function (item) {
    seq = allowFail ? seq.then(item).catch(err => err) : seq.then(item);
  });

  return seq;
}

//单个promise reject后，继续执行 并行
Promise.parallel = function (promiseGens) {
  let allPromise = new Promise(function (resolve, reject) {
    let results = [];
    promiseGens.forEach(function (item) {
      item()
        .then(data => results.push(data))
        .catch(err => results.push(err))
        .finally(function () {
          if (results.length == promiseGens.length) {
            resolve(results);
          }
        })
    });
  });

  return allPromise;
}
// 并发 
Promise.concurrency = function (promiseGens, concurrency, allowFail) {
  let promiseGenCopys = [].concat(promiseGens);
  let concurrencyPromises = [];
  let res = [];
  while (concurrency--) {
    concurrencyPromises.push(recur(promiseGenCopys));
  }

  return Promise.all(concurrencyPromises).then(_ => res);

  // return Promise.parallel(concurrencyPromises);

  function recur(promiseGens) {
    if (!promiseGens.length) return Promise.resolve();

    let first = promiseGens.shift();
    return first().then(function (data) {
      res.push(data);
      return recur(promiseGens);
    }).catch(function (err) {
      res.push(err);
      return allowFail ? recur(promiseGens) : err;
    })
  }
}
// 异步函数a
var a = function () {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('resolve a');
      resolve('a');
    }, 500)
  })
}

// 异步函数b
var b = function (data) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log('reject b', data);
      reject(data || 'reject' + 'b');
    }, 500)
  })
}

// 异步函数c
var c = function (data) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('resolve c', data);
      resolve(data || 'reject' + 'c');
    }, 500)
  })
}

// 异步函数c
var d = function (data) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('resolve d', data);
      resolve(data || 'reject' + 'd');
    }, 500)
  })
}

// 异步函数c
var e = function (data) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('reject e', data);
      reject(data || 'reject' + 'e');
    }, 500)
  })
}

// 异步函数c
var f = function (data) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('reject f', data);
      reject(data || 'reject' + 'f');
    }, 500)
  })
}

//串行测试
// Promise.serial([a,b,c,d,e,f],true).then(function(data){
//     console.log(data);
// }).catch(function(err){
//     console.log('catch',err);
// });

//并行测试
// Promise.parallel([a,b,c,d,e,f]).then(function(data){
//     console.log(data);
// }).catch(function(err){
//     console.log(err);
// });

//并发测试
Promise.concurrency([a, b, c, d, e, f], 2, true).then(function (data) {
  console.log(data);
}).catch(function (err) {
  console.log(err);
})


let f1 = function(data) {
  return new Promise(function(resolve, reject) {
    set
  })
}


Promise.resolve(1)
  .then(res => {
    console.log(res) // => 1
    return 2 // 包装成 Promise.resolve(2)
  })
  .then(res => {
    console.log(res) // => 2
  })

  let pe = () => new Promise((resolve, reject) => {
    throw new Error('test');
  })
  new Promise((resolve, reject) => {
    console.log('new Promise')
    resolve('success1')
  })
  .then(res => {
    console.log('then1')
  })
  .then(res => {
    console.log('then2')
    return pe();
  })
  .then((res) => {
    console.log('正常：', res)
  }, (err)  => {
    console.log('异常：', err);
  })
  .catch(e => {
    console.log(e);
  })
  .then((res) => {
    console.log('resolve-end:', res)
  }, (e) => {
    console.log(e, 'reject-end')
  })

  const promise = new Promise(function(resolve, reject) {
    throw new Error('test');
  });
  promise.catch(function(error) {
    console.log(error);
  });

  const promise = new Promise(function(resolve, reject) {
    reject(new Error('test'));
  });
  promise.catch(function(error) {
    console.log(error);
  });