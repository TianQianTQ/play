 

/*
                prototype
      Person   ------------>   Person.prototype
    （构造函数） <------------   (实例原型)
                constructor       ^
                                  |
      person    ------------------| _proto_
      (实例对象)                   |
                                  |
                prototype         *
      Objcet  ----------->  Object.prototype
              <-----------      |
                constructor     |
                                | _proto_
                               null
*/
/*
1、symbol 不能使用new创建，但symbol(23)实例可以获取constructor属性值，是Symbol原型上的
2、引用类型的constructor值可修改【原型链继承方案】，基本数据类型只读
3、null和undefined没有constructor属性
4、function Parent() {}
  var p = new Parent();
  p.__proto__ === Parent.prototype
  // true
5、p.__proto__  ===  Object.getPrototypeOf()
6、prototype是构造函数上的属性 ，实例不拥有  实例.constructor实际上是查找的原型链获取的
7、原型链：每个对象拥有一个原型对象，通过 __proto__ 指针指向上一个原型 ，
并从中继承方法和属性，同时原型对象也可能拥有原型，这样一层一层，最终指向 null，这就是原型链

*/