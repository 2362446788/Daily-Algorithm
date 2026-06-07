// leetcode：https://leetcode.cn/problems/two-sum/
// 代码随想录：https://programmercarl.com/0001.%E4%B8%A4%E6%95%B0%E4%B9%8B%E5%92%8C.html
// 时间复杂度：O(n)
// 空间复杂度：O(1)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // 使用对象把访问过的数据存下里，遍历的时候就去查找是否存在
  const result = {};
  for (let i = 0; i < nums.length; i++) {
    let item = nums[i];
    // 找对对应的数据就说明有符合的直接返回
    let resValue = result[target - item];
    if (resValue !== undefined) {
      return [resValue, i];
    }
    // 把访问过的数据存下里，用数组的值存为 key，下标存为 value
    result[item] = i;
  }
};
