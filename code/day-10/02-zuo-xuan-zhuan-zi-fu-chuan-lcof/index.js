// leetcode：https://leetcode.cn/problems/zuo-xuan-zhuan-zi-fu-chuan-lcof/
// 代码随想录：https://programmercarl.com/%E5%89%91%E6%8C%87Offer58-II.%E5%B7%A6%E6%97%8B%E8%BD%AC%E5%AD%97%E7%AC%A6%E4%B8%B2.html
// 时间复杂度：O(1)
// 空间复杂度：O(1)
/**
 * @param {string} password
 * @param {number} target
 * @return {string}
 */
var dynamicPassword = function (password, target) {
  // 只操作字符串的简单版本
  return password.slice(target) + password.slice(0, target);
  // return password.slice(target).concat(password.slice(0, target));

  // 使用数组来做翻转
  // 先整体翻转，然后在局部翻转
  let arr = password.split("");
  let newArr = arr.reverse();
  // 局部翻转的索引，因为先整体翻转了，所以一开始的索引为 target - 1，翻转之后的索引为 arr.length - target
  let index = arr.length - target;
  let pre = newArr.slice(0, index).reverse();
  let next = newArr.slice(index, arr.length).reverse();
  return [...pre, ...next].join("");
};
