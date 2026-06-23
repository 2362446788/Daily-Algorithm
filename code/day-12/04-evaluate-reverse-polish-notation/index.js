// leetcode：https://leetcode.cn/problems/evaluate-reverse-polish-notation/
// 代码随想录：https://programmercarl.com/0150.%E9%80%86%E6%B3%A2%E5%85%B0%E8%A1%A8%E8%BE%BE%E5%BC%8F%E6%B1%82%E5%80%BC.html
// 时间复杂度：TODO
// 空间复杂度：TODO
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const stack = [];
  for (let i = 0; i < tokens.length; i++) {
    if (
      tokens[i] === "+" ||
      tokens[i] === "-" ||
      tokens[i] === "*" ||
      tokens[i] === "/"
    ) {
      // 取出前两个数据来计算
      // 计算一定是 right ? left
      const left = Number(stack.pop());
      const right = Number(stack.pop());
      if (tokens[i] === "+") {
        stack.push(right + left);
      }
      if (tokens[i] === "-") {
        stack.push(right - left);
      }
      if (tokens[i] === "*") {
        stack.push(right * left);
      }
      if (tokens[i] === "/") {
        stack.push((right / left) | 0);
      }
    } else {
      stack.push(Number(tokens[i]));
    }
  }
  return stack.pop();
};
