/** 剑指 Offer 32 - II. 从上到下打印二叉树 II
从上到下按层打印二叉树，同一层的节点按从左到右的顺序打印，每一层打印到一行。

 

例如:
给定二叉树: [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
返回其层次遍历结果：

[
  [3],
  [9,20],
  [15,7]
] */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if(!root) return [];
    var queue = [root];
    var res = []
    while(queue.length){
        var tmp = [];
        var next = [];
        for(var i = 0; i< queue.length; i++){
            var item = queue[i];
            tmp.push(item.val);

            if(item.left){
                next.push(item.left)
            }
            if(item.right){
                next.push(item.right)
            }
        }
        queue = next;
        res.push(tmp);
    }
    return res;
};
var levelOrder = function(root) {
  if (!root)  return [];
  let queue = [root];
  let res = [];
  while (queue.length) {
    let temp = [];
    let next = [];
    for (let i =0; i < queue.length; i++) {
      let item = queue[i];
      temp.push(item.val);
      if (item.left) {
        next.push(item.left);
      }
      if (item.right) {
        next.push(item.right);
      }
    }
    queue = next;
    res.push(temp);
  }
  return res;
}
//  每次循环置空数组 ，循环结束放入res中
