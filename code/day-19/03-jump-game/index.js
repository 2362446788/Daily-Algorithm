// leetcode：https://leetcode.cn/problems/jump-game/
// 代码随想录：https://programmercarl.com/0055.%E8%B7%B3%E8%B7%83%E6%B8%B8%E6%88%8F.html
// 时间复杂度：TODO
// 空间复杂度：TODO
/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 维护一个可跳跃的最大范围 cover（是数组下标），每一次遍历都增加这个范围，只要找到一次 cover 大于等于数组最后的下标就直接返回 true，否则最后返回 false
var canJump = function (nums) {
  let cover = 0;
  // 只在 cover 的范围进行循环
  for (let i = 0; i <= cover; i++) {
    // 更新 cover，i + nums[i] 就是能覆盖的最大下标
    cover = Math.max(cover, i + nums[i]);
    // 如果 cover 大于等于 nums.length - 1 直接返回 true
    if (cover >= nums.length - 1) {
      return true;
    }
  }
  return false;
};
