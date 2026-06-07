// leetcode：https://leetcode.cn/problems/squares-of-a-sorted-array/
// 代码随想录：https://programmercarl.com/0977.%E6%9C%89%E5%BA%8F%E6%95%B0%E7%BB%84%E7%9A%84%E5%B9%B3%E6%96%B9.html
// 时间复杂度：O(n)
// 空间复杂度：O(1)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  // 思路：是非递减顺序数组，那就是按照 负数->0->正数来排列
  // 使用双指针，头尾进行判断，把最大的值找到，然后构建一个长度相等的新数组，往数组的末尾添加进去，这样就保证了最后的数组也是非递减顺序数组吗，使用一个变量 k 来保存新数组的下标，方便把数据存进新数组
  // 循环去查找数据，循环出口是 left <= right，在这个场景下，相等是有意义的
  let result = new Array(nums.length);
  let k = nums.length - 1;
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let leftValue = nums[left] ** 2;
    let rightValue = nums[right] ** 2;
    if (leftValue > rightValue) {
      result[k] = leftValue;
      k--;
      left++;
    } else {
      // 因为 leftValue = rightValue 是同一个值，把谁推进数组都一样，所以这里直接 else 判断即可
      result[k] = rightValue;
      k--;
      right--;
    }
  }
  return result;

  // // 使用双指针，头尾两个指针，找最大值，然后插入到新数组的末尾去
  // let result = new Array(nums.length);
  // let k = result.length - 1;
  // for (let i = 0, j = nums.length - 1; i <= j;) {
  //     if (nums[i] ** 2 > nums[j] ** 2) {
  //         result[k] = nums[i] ** 2;
  //         k--;
  //         i++;
  //     } else {
  //         result[k] = nums[j] ** 2;
  //         k--;
  //         j--;
  //     }
  // }
  // return result;
};
