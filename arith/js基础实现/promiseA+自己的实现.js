const PENDING = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'

function myPromise(fn) {
    const that = this;  // 获取正确的this值
    this.status = PENDING; // 保存当前状态
    this.value = null; // 保存resolve或者reject中传的值
    this.resolvedCallback = []; // promise resolve的回调函数集，因为在  promise结束之前可能有多个回调添加到它上面
    this.rejectedCallback = []; // 保存then中的回调，当执行完promise时状态可能还是等待中，这时候需要把then中的回调保存起来用于状态改变时使用
    // 在构造函数里创建resolve和reject两个函数，为了保证this的正确指向
    function resolve(value) {
        // 判断value是否是promise
        // 是 - return value.then(resolve, reject)
        // 否 setTimeout后执行-- 为了保证函数执行顺序
        if (value instanceof Promise) return value.then(resolve, reject);
        setTimeout(() => {
            if (that.state === PENDING) {
                that.status = RESOLVED;
                that.value = value
                that.resolvedCallback.map(cb => cb(that.value))
            }
        })
        
    }
    // 判断状态是否为等待态
    // 修改状态和value
    // 遍历回调数组并执行
    function reject() {
        setTimeout(() => {
            if (that.state === PENDING) {
                that.state = REJECTED
                that.value = value
                that.rejectedCallbacks.map(cb => cb(that.value))
            }
        })
        
    }
    // promise中传入的函数fn的处理 可能执行函数过程中会遇到错误需要捕获并执行reject
    try {
        fn(resolve, reject);
    }  catch (e) {
        reject(e);
    }
}
// 实现then
// 1、then返回一个新的promise实例（阮一峰的es6）
// 2、then里面执行onResolved或onRejected,并根据返回值x决定 promise2结果
    如果onResolved/onRejected返回一个promise,promise2将直接取这个promise的结果

// 1、判断参数是否是函数，如果是常量则直接返回，错误要抛出
// 2、判断 that.state状态
//     pending 两个callback队列 分别添加
//     resolved 执行第一个函数，并传that.value
//     rejected 执行第二个函数，并传参
myPromise.prototype.then = function(onResolved, onRejected) {
    const that = this,promise2;  // promise2的值依赖then执行的函数的返回值
    onResolved = typeof onResolved === 'function' ? onResolved : v => v;
    onRejected = typeof onRejected === 'function' ? onRejected : r => {throw r};
    return promise2 = new Promise(function(resolve, reject) {
        if (that.state === 'PENDING') {
            // that.resolvedCallback.push(onResolved);
            // that.rejectedCallback.push(onRejected);
            that.resolvedCallback.push(function(value) {
                try{
                    let x = onResolved(value);
                    resolvePromise(promise2,  x, resolve, reject);
                }catch(r) {
                    reject(r);
                }
            })
            that.rejectedCallback.push(function(value) {
                try{
                    let x = onRejected(value);
                    resolvePromise(promise2,  x, resolve, reject);
                }catch(r) {
                    reject(r);
                }
            })
        }
        if (that.state === 'RESOLVED') {
            setTimeout(() => {
                try{
                    let x = onResolved(that.value);
                    resolvePromise(promise2, x, resolve, reject);
                }catch(e) {
                    reject(e)
                }
            })
        }
        if (that.state === 'REJECTED') {
            setTimeout(() => {
                try{
                    let x = onRejected(that.value);
                    resolvePromise(promise2, x, resolve, reject);
                }catch(e) {
                    reject(e)
                }
            })
        }
    })
}
实现兼容多种版本的promise的函数
// promise2 then返回的promise 
// x then的第一个参数函数执行的结果
// 根据x的值来决定promise2的状态的函数
function resolvePromise(promise2, x, resolve, reject) {
    let then;
    let thenCalledOrThrow = false;
    // 判断promise2是否与x相等 相等抛出异常，不能循环引用
    if (promise2 === x) {
        return reject(new TypeError('Error'))
    }
    // 判断x的类型
    // 如果x是promise 则需要判断情况
    //     1、x处于等待态，保持等待直到有结果
    //     2、有结果，用相同的值处理promise
    if (x instanceof Promise) {
        if (x.status === 'PENNDING') {
            x.then(function(value) {
                resolvePromise(promise2, value, resolve, reject);
            }, reject);
        } else {
            x.then(resolve, reject);
        }
        return;
    }
    if ((x!==null) && ((typeof x === 'object') || (typeof x === 'function'))) {
        try {
            then = x.then;
            if (typeof then === 'function') {
                // 指定this值指向 x,哪个先执行就把状态改变了防止另一个执行
                // 如果既走resolve又走reject,或者被同一参数调用多次，则优先 采用首次调用并忽略剩下的调用
                then.call(x, function rs(y) {
                    if (thenCalledOrThrow) return;
                    thenCalledOrThrow = true;
                    return resolvePromise(promise2, y, resolve, reject);
                }, function rj(r) {
                    if (thenCalledOrThrow) return;
                    thenCalledOrThrow = true;
                    return reject(r);
                })
            } else {
                resolve(x);
            }
        } catch(e) {
            if (thenCalledOrThrow) return;
            thenCalledOrThrow = true
            return reject(e)
        }
    } else {
        resolve(x);
    }
}