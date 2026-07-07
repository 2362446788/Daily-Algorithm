// leetcode：https://programmercarl.com/0435.%E6%97%A0%E9%87%8D%E5%8F%A0%E5%8C%BA%E9%97%B4.html
// 代码随想录：https://programmercarl.com/0435.%E6%97%A0%E9%87%8D%E5%8F%A0%E5%8C%BA%E9%97%B4.html
// 时间复杂度：TODO
// 空间复杂度：TODO
/**
 * @param {number[][]} intervals
 * @return {number}
 */
// 首先进行左边界进行排序
// 然后从第二项开始遍历，判断当前项的左边界和前一项的右边界，如果小于的话，那么就说明重叠了，把重叠数量加 1
// 接着需要改变当前项的右边界，获取当前项和前一项右边界中的最小项，这样再继续下一次判断，为什么要取最小值，因为两个区间重叠，两个都可能移除，那么移除哪一个呢？就是把右边界更长的移除，保留小的那个
var eraseOverlapIntervals = function (intervals) {
  // 左边界排序
  intervals = intervals.sort((a, b) => a[0] - b[0]);
  let count = 0;
  for (let i = 1; i < intervals.length; i++) {
    // 当前项的左边界小于上一项的右边界
    if (intervals[i][0] < intervals[i - 1][1]) {
      count++;
      // 更新当前项的右边界
      intervals[i][1] = Math.min(intervals[i][1], intervals[i - 1][1]);
    }
  }
  return count;
};
