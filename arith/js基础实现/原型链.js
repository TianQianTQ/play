 

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