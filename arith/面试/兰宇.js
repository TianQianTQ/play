function getJson(key = 'a.b.c', value = 2) {
    // return {
    //   a: {
    //     b: {
    //       c: 2
    //     }
    //   }
    // }
    let res = {};
    function transform(str, obj = {}) {
        let index = str.indexOf('.');
        if (index !== -1) {
            let key = str.slice(0, index);
            let value = str.slice(index+1);
            if (!Object.keys(obj).length) {
                obj[key] = transform(value, obj[key]);
            }
        } else {
            obj = str;
        }
        return obj;
    }
    transform(key, res);
    return res;
}
console.log(getJson());
