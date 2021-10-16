// 先定义三个常量表示状态
// 正在进行中
const PENDING = 'pending';
// 已经完成
const FULFILLED = 'fulfilled';
// 失败/拒绝
const REJECTED = 'rejected';

// 判断是否是个函数
const isFunction = function (fn) {
  return typeof fn === "function";
};
// 判断是否是个对象
const isObject = function (value) {
  return value && typeof value === "object";
};

/**
 * 自定义的promise主体函数
 * @param {*} executor 传入函数, 这个函数接收两个参数resolve,和reject
 */
function MyPromise(executor) {
  const self = this
  self.status = PENDING; // 初始状态为pending
  self.value = null; // 初始化value
  self.error = null; // 初始化error
  self.onResolvedCallback = [] //  resolve时的回调函数集，在结束之前可能有多个cb添加
  self.onRejectedCallback = [] //  reject时的回调函数集，同上
  // resolve方法参数是value
  function resolve(value) {
    setTimeout(function () {
      if (self.status === PENDING) {
        // resolve 方法是将状态改为 `fulfilled`
        self.status = FULFILLED;
        // 存储返回值
        self.value = value;
        // resolve里面将所有成功的回调拿出来执行
        self.onResolvedCallback.forEach(cb => {
          cb(self.value);
        });
      }
    }, 0)
  }

  // reject方法参数是error
  function reject(error) {
    setTimeout(function () {
      if (self.status === PENDING) {
        // reject 是将状态改为 `rejected`
        self.status = REJECTED;
        self.error = error;
        // reject 里面将所有失败的回调拿出来执行
        self.onRejectedCallback.forEach(cb => {
          cb(self.error);
        });
      }
    }, 0)

  }
  try {
    // 调用传入的执行函数
    executor(resolve, reject);
  } catch (error) {
    reject(error);
  }
}


/**
 * promise then 函数- 接收两个从参数
 * @param {*} onResolved 成功时执行
 * @param {*} onRejected 失败时执行
 */
MyPromise.prototype.then = function (onResolved, onRejected) {
  const self = this;
  // 如果不传则给他们赋值为默认函数
  onResolved = isFunction(onResolved) ? onResolved : value => value;
  onRejected = isFunction(onRejected) ? onRejected : err => {
    throw err
  };

  // then 的返回值是一个 新的 promise, 所以创建一个新的promise, 并返回
  let newPromise = new MyPromise((resolve, reject) => {
    // 对所有函数包装一层 try...catch...如果有错就直接reject

    // 关于 包裹一层setTimeout, 确保 onResolved 和 onRejected 方法异步执行，且应该在 then 方法被调用的那一轮事件循环之后的新执行栈中执行

    // 成功
    if (self.status === FULFILLED) {
      setTimeout(() => {
        try {
          const promiseRes = onResolved(self.value);
          resolvePromise(newPromise, promiseRes, resolve, reject);
        } catch (error) {
          reject(error);
        }
      }, 0);
    }

    // 失败
    if (self.status === REJECTED) {
      setTimeout(() => {
        try {
          const promiseRes = onRejected(self.error);
          resolvePromise(newPromise, promiseRes, resolve, reject);
        } catch (error) {
          reject(error);
        }
      }, 0);
    }

    // 如果还是PENDING状态，将回调保存下来, 往对应的cb队列中添加
    if (self.status === PENDING) {
      self.onResolvedCallback.push(function () {
        setTimeout(() => {
          try {
            const promiseRes = onResolved(self.value);
            resolvePromise(newPromise, promiseRes, resolve, reject);
          } catch (error) {
            reject(error);
          }
        }, 0);
      });
      self.onRejectedCallback.push(function () {
        setTimeout(() => {
          try {
            const promiseRes = onRejected(self.error);
            resolvePromise(newPromise, promiseRes, resolve, reject);
          } catch (error) {
            reject(error);
          }
        }, 0);
      });
    }
  })
  return newPromise;
}

/**
 * Promise 解决流程函数
 *
 * @param {*} promise 主任务抛出
 * @param {*} promiseRes 返回的promise
 * @param {*} resolve 
 * @param {*} reject
 * @returns
 */
function resolvePromise(promise, promiseRes, resolve, reject) {
  // promise(主任务返回的) 不能与 内部onResolved/onRejected的返回值相同, 否则会引发循环引用的问题
  if (promise === promiseRes) return reject(new TypeError('循环引用了!'));
  // 如果是null，应该直接resolve
  if (promiseRes === null) return resolve(promiseRes);
  // 执行的状态, 表示是否调用过成功或者失败
  let called;
  // promiseRes 是不是一个promise promise应该是一个对象
  if (isObject(promiseRes) || isFunction(promiseRes)) {
    try {
      let then = promiseRes.then;
      // 校验 promiseRes.then 是否合规
      if (isFunction(then)) {
        then.call(promiseRes, (newPromise) => {
          // 如果 既走resolve又走reject, 或者被同一参数调用了多次, 则优先采用首次调用并忽略剩下的调用
          if (called) return;
          called = true; // 修改状态
          // 开始执行调用
          resolvePromise(promiseRes, newPromise, resolve, reject);
        }, (error) => {
          if (called) return;
          called = true;
          reject(error);
        });
      } else {
        // then 不是一个函数, 直接返回promiseRes
        resolve(promiseRes);
      }
    } catch (error) {
      if (called) return;
      called = true;
      reject(error);
    };
  } else {
    // 返回值不符合规定, 也是直接返回promiseRes
    resolve(promiseRes);
  }
}

MyPromise.defer = MyPromise.deferred = function () {
  const result = {};
  result.promise = new MyPromise((resolve, reject) => {
    result.resolve = resolve;
    result.reject = reject;
  });

  return result;
}
MyPromise.resolve = function (parameter) {
  if (parameter instanceof MyPromise) {
    return parameter;
  }
  return new MyPromise(function (resolve) {
    resolve(parameter);
  });
}
MyPromise.reject = function (reason) {
  return new MyPromise(function (resolve, reject) {
    reject(reason);
  });
}
// 测试用 
// const promise1 = new MyPromise((resolve) => {
//   resolve('promise1 success');
// });
MyPromise.resolve(1212).then(e => {
  console.log(e);
})
// const promise2 = new MyPromise((resolve, reject) => {
//   reject('promise2 failed');
// });

// promise1.then(function (value) {
//   console.log(value);
// });
// promise2.then(function (value) {
//   console.log(value);
// }, function (reason) {
//   console.log(reason);
// });

MyPromise.resolve().then(() => {
  console.log(0);
  return MyPromise.resolve(4);
}).then((res) => {
  console.log(res)
})

MyPromise.resolve().then(() => {
  console.log(1);
}).then(() => {
  console.log(2);
}).then(() => {
  console.log(3);
}).then(() => {
  console.log(5);
}).then(() => {
  console.log(6);
})
module.exports = MyPromise;