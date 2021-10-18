class Parent {
    constructor() {}
    getName() {}
}
class Child extends Parent {
    constructor() {
        super()
    }
    //..
}
// 实现继承

function myExtends(sub, sup) {
    sub.prototype = Object.create(sup.prototype, {
        // 修改constructor
        constructor: {
            value: sub,
            writeable: true,
            enumable: false,
            //..
        }
    })
    Object.setPrototypeOf(sub, sup);
    sub.__proto__ = sup;
}
function sub(param) {
    sup.call(this, param);
}


interface Node {
    value: any;
    next: Node | null;
}

function judge(head) {
    if (!head) return false;
    let slow = head, fast = head;
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) return true;
    }
    return false;
}
