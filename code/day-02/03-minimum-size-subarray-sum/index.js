// leetcode：https://leetcode.cn/problems/minimum-size-subarray-sum/
// 代码随想录：https://programmercarl.com/0209.%E9%95%BF%E5%BA%A6%E6%9C%80%E5%B0%8F%E7%9A%84%E5%AD%90%E6%95%B0%E7%BB%84.html
// 时间复杂度：O(n)
// 空间复杂度：O(1)
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  // 使用双指针滑动窗口：维护一个窗口，这个窗口一旦满足条件就把数据记录下来，然后就开始从左边缩小窗口直到不满足，不满足后开始右移窗口继续计算，直到循环结束
  // 定义 result 存储结果，sum 存储窗口总和，subLength 记录窗口长度，定义起始位置 i（初始值为 0，只有需要缩小窗口时才移动）
  // 开始循环，定义结束位置为循环的下标，在循环过程中不断更新窗口
  // 最后把 result 返回
  let result = Infinity;
  let sum = 0;
  let subLength = 0;
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    sum += nums[j];
    while (sum >= target) {
      subLength = j - i + 1;
      result = result < subLength ? result : subLength;
      // 缩小窗口减去起始位置的值，移动起始位置
      sum -= nums[i];
      i++;
    }
  }
  return result === Infinity ? 0 : result;

  // 暴力解法：
  // 定义一个 result 来存放最小数组的长度，sum 来存放综合，subLength 存放长度
  // 第一层循环获取第一个值，就只是用来做循环，再来一层循环获取值，累加计算，如果小于 result，更新 subLength 和 result
  // 最后判断 result 进行返回
  // let result = Infinity;
  // let sum = 0;
  // let subLength = 0;
  // for (let i = 0; i < nums.length; i++) {
  //     sum = 0;
  //     for (let j = i; j < nums.length; j++) {
  //         sum += nums[j];
  //         if (sum >= target) {
  //             subLength = j - i + 1;
  //             result = result > subLength ? subLength : result;
  //             break;
  //         }
  //     }
  // }
  // return result === Infinity ? 0 : result;
};
