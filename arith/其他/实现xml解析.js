const xml = `
<list>
  <item>content1</item>
  <item>content2</item>
  <item>content3</item>
  <item>
    <name>hema</name>
    <value>frontend</value>
  </item>
</list>
`

// 目标 json
const json = {
  tag: 'list',
  children: [
    {
      tag: 'item',
      children: 'content1'
    },
    {
      tag: 'item',
      children: 'content2'
    },
    {
      tag: 'item',
      children: 'content3'
    },
    {
      tag: 'item',
      children: [
        {
          tag: 'name',
          children: 'hema'
        },
        {
          tag: 'value',
          children: 'frontend'
        }
      ]
    }
  ]
}

function xml2json (xml) {
  let result = {};
  let getRes = function(str) {
      let start = str.indexOf('<');
      let end = str.indexOf('>');
      let tag = str.slice(start+1, end);
      let ending = str.lastIndexOf('<');
      let connect = str.slice(end+1, ending);
      return {tag, connect};
  }
  let res = getRes(xml);
  result = {
      tag: res.tag,
      children: [],
  }
  while (res.connect.indexOf('<') !== -1) {
    
  }
  result = getRes(xml);
  
  return result
}
let  xml = `<span>123</span>`
console.log(xml2json(xml));

// console: true
console.log(JSON.stringify(xml2json(xml)) === JSON.stringify(json))