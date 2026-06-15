// leetcode：https://leetcode.cn/problems/happy-number/
// 代码随想录：https://programmercarl.com/0202.%E5%BF%AB%E4%B9%90%E6%95%B0.html
// 时间复杂度：O(logn)
// 空间复杂度：O(1)
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  // 计算的过程可能无限次，所以需要记录每一次的值，一旦当有值发生了重复，那么就不用再计算下去直接返回 false
  // 使用 set 集合来保存数据，用于判断是否出现重复数据
  let set = new Set();
  while (true) {
    // 计算新的值
    let sum = getSum(n);
    // 等于 1 说明找到了是快乐数
    if (sum === 1) {
      return true;
    }
    // 如果之前的计算结果中找到了那么就直接返回 false，不再无限循环下去
    if (set.has(sum)) {
      return false;
    } else {
      // 否则将计算的结果添加进 set 中
      set.add(sum);
    }
    // 更新 n 为 sum 继续循环计算
    n = sum;
  }
};
// 计算一个数每一个位置平方后的值
var getSum = function (n) {
  let sum = 0;
  // 循环结束是当 n 为 0 的时候
  while (n) {
    // 获取个位数的平方
    sum += (n % 10) ** 2;
    // 去掉个位数，将十位数改成个位数，最后会把 n 变成 0，因为个位数除以 10 向下取整会变成0
    n = Math.floor(n / 10);
  }
  // 返回新的值
  return sum;
};
