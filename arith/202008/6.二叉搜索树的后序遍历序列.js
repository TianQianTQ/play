/** 剑指 Offer 33. 二叉搜索树的后序遍历序列
输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历结果。如果是则返回 true，否则返回 false。假设输入的数组的任意两个数字都互不相同。

 

参考以下这颗二叉搜索树：

     5
    / \
   2   6
  / \
 1   3
示例 1：

输入: [1,6,3,2,5]
输出: false
示例 2：

输入: [1,3,2,6,5]
输出: true */
/**
 * @param {number[]} postorder
 * @return {boolean}
 */
/** 解析：
 * 1、后序遍历，最后一个元素是根节点 
 * 2、划分左右子树，左比根节点小，右比根节点大
 * 3、比较右子树是否都比根节点大
 * 4、递归左右子树
 */
var verifyPostorder = function(postorder) {
  const length = postorder.length
  if (length  < 2) return true;
  let root = postorder[length  -1];
  let  i = 0;
  for (; i< length -1; i++)  {
    if (postorder[i] > root) break;
  }
  let leftTree = postorder.slice(0, i);
  let rightTree = postorder.slice(i, length - 1);
  let result = rightTree.every(item => item > root);
  if (result) {
    return verifyPostorder(leftTree) && verifyPostorder(rightTree);
  }
  return false;
};