/** 重建二叉树
 *  输入某二叉树的前序遍历和中序遍历的结果，请重建该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
  例如，给出

前序遍历 preorder = [3,9,20,15,7]
中序遍历 inorder = [9,3,15,20,7]
返回如下的二叉树：
    3
   / \
  9  20
    /  \
   15   7
限制：
0 <= 节点个数 <= 5000
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  if (!preorder.length || !inorder.length)  return null;
  const node = new TreeNode(preorder[0]);
  for (let i = 0; i < preorder.length; i++) {
    if (preorder[0] === inorder[i]) {
      node.left = buildTree(preorder.slice(1, i+1), inorder.slice(0, i));
      node.right = buildTree(preorder.slice(i+1), inorder.slice(i+1));
    }
  }
  return node;
};

var buildTree = function (preorder, inorder) {
  if (!preorder.length) return null
  var node = new TreeNode(preorder[0])
  var index = inorder.indexOf(preorder[0])
  node.left = buildTree(preorder.slice(1, index + 1), inorder.slice(0, index))
  node.right = buildTree(preorder.slice(index + 1), inorder.slice(index + 1))
  return node
};

const preorder = [3,9,20,15,7]
const inorder = [9,3,15,20,7]
console.log(buildTree(preorder,  inorder))

// 题解 ：分治法      临界点需要区分清楚