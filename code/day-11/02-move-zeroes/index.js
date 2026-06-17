// leetcode：https://leetcode.cn/problems/move-zeroes/
// 代码随想录：
// 时间复杂度：O(n)
// 空间复杂度：O(1)
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  // 双指针法
  // 定义两个指针都指向开头
  // 然后快指针开始往右移动，查找值为 0 的下标，找到了就将快慢指针的值交换，然后慢指针往右移动，快指针也往右移动
  // 一直找到末尾，然后把新数组返回即可
  let slow = 0;
  let fast = 0;
  while (fast < nums.length) {
    if (nums[fast] !== 0) {
      [nums[slow], nums[fast]] = [nums[fast], nums[slow]];
      slow++;
    }
    fast++;
  }
  // for (let fast = 0; fast < nums.length; fast++) {
  //     if (nums[fast] !== 0) {
  //         [nums[slow], nums[fast]] = [nums[fast], nums[slow]];
  //         slow++;
  //     }
  // }
  return nums;

  // 暴力解法
  // 在数组内容删除数据，会造成数组塌陷，就需要将索引减1
  // 先查找需要有多少个零需要移动，不然没有约束后续如果出现多个零循环执行会死循环
  // 例如：[0, 0, 0] 找到第一个 0，然后在数组末尾新增一个 0，然后删除当前 0，索引减 1 ，那后续循环还是在走第一步，如果不加限制会一直循环下去，因此需要提前将 0 的数量获取，然后循环次数超过这个就停止
  // let zeroCount = 0;
  // for (let item of nums) {
  //     if (item === 0) {
  //         zeroCount += 1;
  //     }
  // }
  // for (let i = 0; i < nums.length && zeroCount > 0; i++) {
  //     let item = nums[i];
  //     if (item === 0) {
  //         nums.push(item);
  //         nums.splice(i , 1);
  //         i--;
  //         zeroCount--;
  //     }
  // }
};
