// leetcode：https://leetcode.cn/problems/valid-parentheses/
// 代码随想录：https://programmercarl.com/0020.%E6%9C%89%E6%95%88%E7%9A%84%E6%8B%AC%E5%8F%B7.html
// 时间复杂度：O(n)
// 空间复杂度：O(n)
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const map = {
    "{": "}",
    "[": "]",
    "(": ")",
  };
  const stack = [];
  for (let item of s) {
    // 把左括号匹配的右括号放进栈中，后续方便匹配
    if (item in map) {
      stack.push(map[item]);
      continue;
    }
    // 1. 栈里面已经没有括号，说明右括号多余了
    if (stack.length === 0) {
      return false;
    }
    // 2. 栈里面的最后一个括号不匹配
    if (item !== stack[stack.length - 1]) {
      return false;
    }
    // 匹配上直接删除
    stack.pop();
  }
  // 3. 栈还有剩余数据，说明左括号多余了
  if (stack.length > 0) {
    return false;
  }
  return true;
};

// /**
//  * @param {string} s
//  * @return {boolean}
//  */
// var isValid = function(s) {
//     const mapping = {
//         '(': ')',
//         '{': '}',
//         '[': ']',
//     }
//     let stack = [];
//     for (const str of s) {
//         if (str in mapping) {
//             stack.push(mapping[str]);
//             continue;
//         }
//         // 1
//         if (str !== stack[stack.length - 1]) {
//             return false;
//         }
//         // 2
//         if (stack.length === 0) {
//             return false;
//         }
//         // 3
//         stack.pop();
//         // 简化写法：因为空数组 pop 也没问题，所以直接将栈里面的数据取出来进行比较，如果不相等就返回 false
//         // 这个写法满足了上面三个执行逻辑 1 2 3
//         // 其中 2 因为如果是空栈的话 pop 取到的是 undefined，和字符串也不匹配，也走到 false
//         // if (str !== stack.pop()) {
//         //     return false;
//         // }
//     }
//     if (stack.length > 0) {
//         return false;
//     }
//     return true;
// };
