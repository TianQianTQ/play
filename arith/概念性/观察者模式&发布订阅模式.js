/*
1、两者区别
观察者模式：观察者和目标直接交互
发布订阅模式：统一由调度中心进行处理，订阅者和发布者互不干扰。
    这样一方面实现了解耦，可以实现更细粒度的一些控制。比如发布者发布了很多消息，但不是所有订阅者都接收到，就可以在调度中心做一些处理，类似于权限控制，也可以做一些节流操作
*/
// 2、观察者模式实现

// 观察者
class Observer {
    constructor(cb) {
        if (typeof cb === 'function') {
            this.cb = cb;
        } else {
            throw  new  Error('xxx');
        }
    }
    update() {
        this.cb();
    }
}
// 目标对象
class Subject {
    constructor() {
        this.observerList = [] // 维护观察者列表
    }
    addObserver(observer) {
        this.observerList.push(observer);
    }
    notify() {
        this.observerList.forEach(observer => {
            observer.update()
        })
    }
}
const observerCallback = function() {}
const observer1 = new Observer(observerCallback);
const subject = new Subject()
subject.addObserver(observer1);
subject.notify();

// 3、发布订阅模式实现
class PubSub {
    constructor() {
        this.subscirbers = {}
    }
    subscribe(type, fn) {
        if (!Object.prototype.hasOwnProperty.call(this.subscirbers, type)) {
            this.subscirbers[type] = [];
        }
        this.subscirbers[type].push(fn);
    }
    unSubscribe(type, fn) {
        let listeners = this.subscirbers[type];
        if (!listeners || !listeners.length) return;
        this.subscirbers[type] = listeners.filter(v => v!== fn);
    }
    publish(type, ...args) {
        let listeners = this.subscirbers[type];
        if (!listeners || !listeners.length) return;
        listeners.forEach(fn => fn(...args));
    }
}
let ob = new PubSub();
ob.subscribe('add', (val) => console.log(val));
ob.publish('add', 1);

// 4、实现一个eventBus
class EventEmitter {
    constructor() {
        // 存储事件与回调之间的对应关系
        this.handlers = {}
    }
    // 安装监听事件
    on(eventName, cb) {
        if (!this.handlers[eventName]) {
            this.handlers[eventName] = []
        }
        this.handlers[eventName].push(cb);
    }
    // 触发目标事件
    emit(eventName, ...args) {
        if (this.handlers[eventName]) {
            // 做浅拷贝，避免通过 once安装的监听器在移除过程中出现顺序错乱问题
            const handlers = this.handlers[eventName].slice();
            handlers.forEach(fn => fn(...args));
        }
    }
    // 移除某个事件回调队列里的指定回调函数
    off(eventName, fn) {
        const callbacks = this.handlers[eventName];
        const index = callbacks.indexOf(cb);
        if (index !== -1) {
            callbacks.splice(index, 1);
        }
    }
    once(eventName, cb) {
        // 对回调函数进行包装，使其执行完毕自动被移除
        const wrapper = (...args) => {
            cb(...args);
            this.off(eventName, cb);
        }
        this.on(eventName, wrapper);
    }
}