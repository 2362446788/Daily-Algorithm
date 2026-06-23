// leetcode：https://leetcode.cn/problems/implement-queue-using-stacks/
// 代码随想录：https://programmercarl.com/0232.%E7%94%A8%E6%A0%88%E5%AE%9E%E7%8E%B0%E9%98%9F%E5%88%97.html
// 时间复杂度：TODO
// 空间复杂度：TODO

var MyQueue = function () {
  // 使用两个数组来模拟
  this.stackIn = [];
  this.stackOut = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  // 推进栈
  this.stackIn.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  // 如果出栈有内容就弹出去
  const size = this.stackOut.length;
  if (size) {
    return this.stackOut.pop();
  }
  // 没有的话说明全部出栈了，那就把剩余的进栈的内容加进来
  while (this.stackIn.length) {
    this.stackOut.push(this.stackIn.pop());
  }
  // 最后再弹出一个值
  return this.stackOut.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  // 可以借用 pop 取到第一个值，然后再把值加入到栈中
  const result = this.pop();
  this.stackOut.push(result);
  return result;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  // 如果两个栈都为空那就为空
  return this.stackOut.length === 0 && this.stackIn.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
