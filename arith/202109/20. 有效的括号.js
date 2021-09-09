/*给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
有效字符串需满足：
左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
示例 1：
输入：s = "()"
输出：true
示例 2：

输入：s = "()[]{}"
输出：true
示例 3：

输入：s = "(]"
输出：false
示例 4：

输入：s = "([)]"
输出：false
示例 5：

输入：s = "{[]}"
输出：true

提示：
1 <= s.length <= 104
s 仅由括号 '()[]{}' 组成
*/
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let n = s.length;
    // 排除单数情况
    if (n % 2 === 1) {
        return false;
    }
    let map = {
        "(":")",
        "{":"}",
        "[":"]"
    };
    let stack = [];
    for (let i of s) {
        // 碰到左边括号就放进去
        if (i in map) {
            stack.push(i);
            continue;
        }
        // 拿栈顶与当前括号比较 不同则false
        if (map[stack.pop()] !== i) return false;
    }
    return !stack.length;
};

// 题解：
// 1、使用栈结构
// 2、碰到左边就放进去
// 3、碰到右边弹出栈顶比较 不同false
// 4、判断最后栈长度，有长度 false
