/ 节流思想 冷却cd
function throttle(fn,delay){
    return function (...args) {
        let context = this;
        if(!prev){
            fn.apply(context, ...args);
            setTimeout(()=>{
                prev = true;
            },delay)
        }
    }
}
// 防抖思想，后者会覆盖前者
function debounce(fn,delay){
    let timer;
    return function (...args) {
        let context = this;
        clearTimeout(timer);
        timer = setTimeout(()=>{
            fn.apply(this, ...args);
        }, delay)
    }
}
// new 的策略事 返回对象的结果则返回结果，不是结果返回当前实例子
function New(fn, ...args){
    if(typeof fn !== 'function') {
        return fn
    }
    let O = Object.create(obj)
    const res = obj.apply(O, args)
    return res instanceof Object ? res : O
}

// bind 1.绑定原型 2. 预设参数 3.为了new 的时候还是当前的，所以需要额外做一层处理
function bind(ctx, ...args) {
    let fn = this;
    let newFn = function(...args2) {
        ctx = this instanceof fn ? this:ctx;
        fn.apply(ctx, args.concat(args2))
    }
    newFn.prototype = Object.create(ctx.prototype)
    return newFn
}
// apply  主要给传入的上下文绑定，然后== fn 返回执行结果
function apply(ctx, args) {
    const symbol = Symbol()
    ctx[symbol] = this;
    let res =  ctx[symbol](...args)
    delete ctx[symbol]
    return  res
}
// call 和apply类似
function call(ctx, ...args) {
    const symbol = Symbol()
    ctx[symbol] = this;
    let res =  ctx[symbol](...args)
    delete ctx[symbol]
    return  res
}
// cloneDeep 判断是对象还是数组，进行递归处理
function cloneDeep(val) {
    if(typeof val !== 'object'){
        return val
    }
    let result = Array.isArray(val) ? [] : {}
    for(let i in val){
        result[i] = cloneDeep(val[i]);
    }
    return result
}
// flat利用toString思想进行分割
function flat1(arr) {
    return arr.toString().split(",")
}
// 利用es6的api
function flat2(a) {
    return arr.flat(Infinity)
}
// 利用递归的思想去处理
function flat3(arr, arr2 = []){
    for(let i = 0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            flat3(arr[i], arr2)
        }else{
           arr2.push(arr[i])
        }
    }
    return arr2
}


// cloneDeep 判断是对象还是数组，进行递归处理
function cloneDeep(val) {
    if(typeof val !== 'object'){
        return val
    }
    let result = Array.isArray(val) ? [] : {}
    for(let i in val){
        result[i] = cloneDeep(val[i]);
    }
    return result
}


function flat3(arr, arr2 = []){
    for(let i = 0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            flat3(arr[i], arr2)
        }else{
           arr2.push(arr[i])
        }
    }
    return arr2
}