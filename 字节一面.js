function get() {
  getname = function() {
    console.log('3');
  }
  return this;
}
get.getname = function() {
  console.log('4');
}
get.prototype.getname = function() {
  console.log('5')
}
var getname = function() {
  console.log('6')
}
function getname () {
  console.log('7')
}

getname()
get().getname();
getname();
