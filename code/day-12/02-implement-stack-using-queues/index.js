// leetcode：https://leetcode.cn/problems/implement-stack-using-queues/
// 代码随想录：https://programmercarl.com/0225.%E7%94%A8%E9%98%9F%E5%88%97%E5%AE%9E%E7%8E%B0%E6%A0%88.html
// 时间复杂度：TODO
// 空间复杂度：TODO

var MyStack = function () {
  this.stack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.stack.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  let size = this.stack.length;
  while (--size) {
    this.stack.push(this.stack.shift());
  }
  return this.stack.shift();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  const result = this.stack.pop();
  this.stack.push(result);
  return result;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.stack.length === 0;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
