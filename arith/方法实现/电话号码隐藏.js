alert("13456789012".replace(/(\d{3})(\d{4})(\d{4})/,"$1****$3"));

//  start前面需要保留几位  end后面需要保留几位
function changeNum(str, start=3, end=4) {
  if (str.length < 11) return '****'
  let len = str.length-start-end;
  let xing = '';
  for (var i=0;i<len;i++) {
  xing +=  '*';
 }
  return str.substring(0,start)+xing+str.substring(str.length-end);
}
console.log(changeNum('13456789012'))

function changeNum(str, start=3, end=4) {
  return str.replace(/(\d{3})(\d{4})(\d{4})/, '$1****$3')
}