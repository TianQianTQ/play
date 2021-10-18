/** 剑指 Offer 34. 二叉树中和为某一值的路径
输入一棵二叉树和一个整数，打印出二叉树中节点值的和为输入整数的所有路径。
从树的根节点开始往下一直到叶节点所经过的节点形成一条路径。
示例:
给定如下二叉树，以及目标和 sum = 22，

              5
             / \
            4   8
           /   / \
          11  13  4
         /  \    / \
        7    2  5   1
返回:

[
   [5,4,11,2],
   [5,8,4,5]
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
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function (root, sum) {
  if (!root) return [];
  let res  = [];
  let path = [];
  function recur(root, sum) {
    path.push(root.val); // 函数开头，函数入栈执行
    if (!root.left && !root.right && root.val === sum) {
      res.push(path.slice());
    }
    if (root.left) {
      recur(root.left, sum - root.val)
    }
    if (root.right) {
      recur(root.right, sum - root.val)
    }
    path.pop(); // 函数末尾， 函数执行结束准备出栈
  }
  recur(root, sum);
  return res;
}
var pathSum = function (root, sum) {
  if (!root) {
    return [];
  }
  const pathes = [];
  __pathSum(root, sum, pathes, []);
  return pathes;
};

function __pathSum(root, sum, pathes, path) {
  if (!root) {
    return;
  }

  path = [...path, root.val]; // 深拷贝

  if (!root.left && !root.right && root.val === sum) {
    pathes.push(path);
    return;
  }

  __pathSum(root.left, sum - root.val, pathes, path);
  __pathSum(root.right, sum - root.val, pathes, path);
}

var pathSum = function (root, sum) {
  let res = [];
  let path = [];
  if (!root) return [];
  recur(root, sum)
  function recur(root, sum) {
    // 函数开头，函数入栈执行
    path.push(root.val);
    if (!root.left && !root.right && root.val === sum) {
      res.push(path.slice());
    }
    if (root.left) {
      recur(root.left, sum - root.val)
    }
    if (root.right) {
      recur(root.right, sum - root.val)
    }
    path.pop();
    // 函数末尾， 函数执行结束准备出栈
  }
  return res;
};
