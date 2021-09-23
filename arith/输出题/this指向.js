var b = {x: 4};
function fn2(o) {
    this.x = o.x;
}
fn2.prototype = {
    init: function() {
        return this.x;
    }
}
var fn3 = new fn2({x: 5});
console.log(fn3.init());
console.log(fn3.init === fn2.init);
console.log(fn3.init.call(b));
var c = fn3.init;
console.log(c());