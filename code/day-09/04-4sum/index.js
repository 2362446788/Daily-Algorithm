// leetcode：https://leetcode.cn/problems/4sum/
// 代码随想录：https://programmercarl.com/0018.%E5%9B%9B%E6%95%B0%E4%B9%8B%E5%92%8C.html
// 时间复杂度：O(n^3)
// 空间复杂度：O(logn)（排序的空间复杂度）
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  // 如果 nums 不满足四个数直接返回 []
  if (nums.length < 4) {
    return [];
  }
  // 最后的结果
  let result = [];
  // 最后不要求顺序，那就把数组先进行排序
  nums = nums.sort((a, b) => a - b);
  // 使用两层 for 循环获取到前两个值，后两个值使用双指针方法去获取
  for (let i = 0; i < nums.length; i++) {
    let itemI = nums[i];
    // 剪枝（剪枝不是必要的，只是能减少不必要的执行次数）
    // 必须大于 0，不然 nums = [-4, -1 ,0, 0] target = -5 这种情况下就剪枝剪错了
    if (itemI > target && itemI > 0) {
      break;
    }
    // 去重（需要和前一个进行去重对比）
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    for (let j = i + 1; j < nums.length; j++) {
      let itemJ = nums[j];
      let towSum = itemI + itemJ;
      // 剪枝（剪枝不是必要的，只是能减少不必要的执行次数）
      // 必须大于 0，不然 nums = [-4, -1 ,0, 0] target = -5 这种情况下就剪枝剪错了
      if (towSum > target && towSum > 0) {
        break;
      }
      // 去重（需要和前一个进行去重对比）
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        continue;
      }
      // 双指针
      let left = j + 1;
      let right = nums.length - 1;
      while (left < right) {
        let itemL = nums[left];
        let itemR = nums[right];
        let fourSum = towSum + itemL + itemR;
        if (fourSum < target) {
          left++;
        } else if (fourSum > target) {
          right--;
        } else {
          result.push([itemI, itemJ, itemL, itemR]);
          // 去重，需要满足 left < right 的前提
          while (left < right && itemL === nums[left + 1]) {
            left++;
          }
          // 去重，需要满足 left < right 的前提
          while (left < right && itemR === nums[right - 1]) {
            right--;
          }
          left++;
          right--;
        }
      }
    }
  }
  return result;
};
