// leetcode：https://leetcode.cn/problems/intersection-of-two-arrays/
// 代码随想录：https://programmercarl.com/0349.%E4%B8%A4%E4%B8%AA%E6%95%B0%E7%BB%84%E7%9A%84%E4%BA%A4%E9%9B%86.html
// 时间复杂度：O(n)
// 空间复杂度：O(n)
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  // 优化：交换数组，用小的数组进行遍历
  if (nums1.length < nums2.length) {
    let temp1 = nums1;
    nums1 = nums2;
    nums2 = temp1;
  }
  // 结果使用 set 去重
  let result = new Set();
  // 目标也是用 set 去重
  let newNums1 = new Set(nums1);
  for (let i of nums2) {
    // 如果找到一个值，那么就添加进结果中
    if (newNums1.has(i)) {
      result.add(i);
    }
  }
  // 最后将结果转换为数组返回
  return Array.from(result);
};
