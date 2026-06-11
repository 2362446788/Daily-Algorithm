// leetcode：https://leetcode.cn/problems/4sum-ii/
// 代码随想录：https://programmercarl.com/0454.%E5%9B%9B%E6%95%B0%E7%9B%B8%E5%8A%A0II.html
// 时间复杂度：O(n^2)
// 空间复杂度：O(n^2)
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function (nums1, nums2, nums3, nums4) {
  // 题意只需要记录有哪几个元组满足，所以只用统计数量
  // 四个元组，可以拆分为两两匹配，那就可以简化为两个数组来做匹配
  // 先计算前两个数组的内容，使用 map 记录下 a + b 值的重复次数，然后再计算后两个数组，使用 0 - (c + d) 去匹配对应的 map value，这样就是满足的元组数量了
  const map = {};
  let count = 0;
  // 将前两个数组每个下标的值相加保存到 map 中
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      const target = nums1[i] + nums2[j];
      if (map[target]) {
        map[target]++;
      } else {
        map[target] = 1;
      }
    }
  }
  // 将后两个数组每个下标的值相加，然后计算 target = 0 - (c + d)，使用这个 target 去 map 中查找
  // 找到就将 count 的值加上 map[target] 的值
  for (let i = 0; i < nums3.length; i++) {
    for (let j = 0; j < nums4.length; j++) {
      const target = 0 - (nums3[i] + nums4[j]);
      if (map[target]) {
        count += map[target];
      }
    }
  }
  // 最后返回 count
  return count;
};
