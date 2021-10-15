function splitByReg3(str) {
  var re = /(\d{1,3})(?=(\d{3})+(?:$|\.))/g;
  return str.replace(re, "$1,")
}

function split3str(num) {
  if (!num) return null;
  const str = num.toString();
  let newStr = [];
  let dot = '';
  let change = '';
  let count = 0;
  if (str.indexOf('.') !== -1) {
    const index = str.indexOf('.')
    dot = str.substring(index, str.length);
    change = str.substring(0, index);
  }
  for (let i = change.length -1; i  >=  0; i--) {
    if (count % 3 === 0 && count !== 0) {
      newStr.unshift(',');
      newStr.unshift(change[i])
    }  else {
      newStr.unshift(change[i])
    }
    count++;
  }
  return dot === '' ? newStr.join('') : newStr.join('') + dot
}
console.log(split3str("21987654321.999"))