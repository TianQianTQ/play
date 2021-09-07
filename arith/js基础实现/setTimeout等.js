// setTimeout实现setInterval
setTimeout(function() {
  setTimeout(arguments.callee, time)
}, time)
