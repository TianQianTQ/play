const data =  [
    {
      "id": "1897e132-e98e-4d33-9ca4-b884d4079567",
      "name": "分组-1",
      "parent_id": null,
    },
    {
      "id": "fb88c694-df36-42db-9890-429b58674877",
      "name": "分组-2",
      "parent_id": null
    },
    {
      "id": "685a99b5-f8dd-427f-a6df-e43766358e68",
      "name": "分组-1-1",
      "parent_id": "1897e132-e98e-4d33-9ca4-b884d4079567"
    },
    {
      "id": "7c93d559-8c20-4480-83aa-c9fc51c066f0",
      "name": "分组-3",
      "parent_id": null
    },
    {
      "id": "703faaa2-c3ae-49a4-9ebd-c152adc6f91c",
      "name": "分组-1-2",
      "parent_id": "1897e132-e98e-4d33-9ca4-b884d4079567"
    },
    {
      "id": "b22a266d-9e6a-4ab4-ab6d-4d3fad1e41f0",
      "name": "分组-1-3",
      "parent_id": "1897e132-e98e-4d33-9ca4-b884d4079567"
    },
    {
      "id": "08b7bf26-51f9-43f6-bb46-892397d5f210",
      "name": "分组-1-1-1",
      "parent_id": "685a99b5-f8dd-427f-a6df-e43766358e68",
    }
  ]
  /**
   * 实现数组转树
   * 根据parent_id 组装多级菜单树, parent_id是null为最上层
   */

function fn(data) {
  let childrens = [];
  let values = data.reduce((map, e) => {
    let target, parent;
    target = map[e.id] = map[e.id] ? Object.assign(map[e.id], e) : {...e, children: []};
    if (e.parent_id) {
      parent = map[e.parent_id] || {children: []}
      parent.children.push(target);
      childrens.push(e.id);
    }
    return map;
  }, {})
  childrens.forEach(id => delete values[id]);
  return Object.values(values);
}
fn(data);

