// leetcode：https://leetcode.cn/problems/remove-element/
// 代码随想录：https://programmercarl.com/0027.%E7%A7%BB%E9%99%A4%E5%85%83%E7%B4%A0.html
// 时间复杂度：O(n)
// 空间复杂度：O(1)
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  // 思路：题目只要求最后的 nums 的前面几个数据满足要求，后面的不管，因此只需要将前面的数据维护好即可，然后返回满足的数据的个数
  // 暴力解法不推荐，因此考虑双指针法
  // 使用快慢指针，slow 指向更新后的数组的真实下标，fast 移动去寻找目标（这个目标是符合新数组的内容，而不是对应的 val），指向目标的下标
  // 然后把 fast 的值赋值给到 slow，接着 slow 往后移动
  // 最后 fast 遍历结束，slow 的下标也即是找到的个数，将其返回即可
  let slow = 0;
  for (let fast = 0; fast < nums.length; fast++) {
    if (nums[fast] !== val) {
      nums[slow] = nums[fast];
      slow++;
    }
  }
  return slow;

  // 暴力解法：使用一个 size 来存储具体满足的数据有多少个，使用两层循环，第一层如果找到了 val 值，第二层循环遍历将这个值一直往后移动，移动之后第一层循环的下标需要往左移动一位重新计算新的值，然后也 size 也减 1
  // let size = nums.length;
  // for (let i = 0; i < size; i++) {
  //   if (nums[i] === val) {
  //     for (let j = i + 1; j < size; j++) {
  //       nums[j - 1] = nums[j];
  //     }
  //     i--;
  //     size--;
  //   }
  // }
  // return size;
};
