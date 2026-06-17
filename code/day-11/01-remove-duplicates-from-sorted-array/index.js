// leetcode：https://leetcode.cn/problems/remove-duplicates-from-sorted-array/
// 代码随想录：
// 时间复杂度：O(n)
// 空间复杂度：O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  // 数组长度为 0 直接返回
  if (nums.length === 0) {
    return 0;
  }
  // 使用双指针，快慢指针
  // 因为第一项肯定是会留下的，所以从第二项开始找
  let slow = 1;
  let fast = 1;
  // 遍历剩下的数据
  while (fast < nums.length) {
    let item = nums[fast];
    // 如果 fast 指针的前一个数据和当前数据相同，那就跳过，fast 往后移动
    if (nums[fast] === nums[fast - 1]) {
      fast++;
    } else {
      // 如果不相同，就是符合要求的值，那就把 slow 指针的位置修改为 fast 指针位置的值，并把值写入 set 中
      nums[slow] = nums[fast];
      // 两个指针同时往右移动
      slow++;
      fast++;
    }
  }
  // 返回 slow 指针的位置就是数组的数量
  return slow;
};
