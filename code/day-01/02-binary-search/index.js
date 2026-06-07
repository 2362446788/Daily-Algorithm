// leetcode：https://leetcode.cn/problems/binary-search/
// 代码随想录：https://programmercarl.com/0704.%E4%BA%8C%E5%88%86%E6%9F%A5%E6%89%BE.html
// 时间复杂度：O(log n)
// 空间复杂度：O(1)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  // 采用左闭右闭来处理 [left, right)
  let left = 0,
    right = nums.length,
    middle;
  // 左闭右闭的情况下这里 left = right 是没有有意义的，需要剔除，因此判断条件如下
  while (left < right) {
    middle = left + ((right - left) >> 1);
    let item = nums[middle];
    if (item > target) {
      // 说明应该往左缩小区间
      // 并且 right 是开区间，因此只需要把 middle 的位置给到 right 即可
      right = middle;
    } else if (item < target) {
      // 说明应该往右缩小区间
      // 闭区间应计算过了 middle，因此需要下一位
      left = middle + 1;
    } else {
      return middle;
    }
  }
  return -1;

  // // 采用左闭右闭来处理 [left, right]
  // let left = 0,
  //   right = nums.length - 1,
  //   middle;
  // // 左闭右闭的情况下这里 left = right 是有意义的因此判断条件如下
  // while (left <= right) {
  //   middle = left + ((right - left) >> 1);
  //   let result = nums[middle];
  //   if (result > target) {
  //     // 说明应该往左缩小区间
  //     right = middle - 1;
  //   } else if (result < target) {
  //     // 说明应该往右缩小区间
  //     left = middle + 1;
  //   } else {
  //     return middle;
  //   }
  // }
  // return -1;
};
