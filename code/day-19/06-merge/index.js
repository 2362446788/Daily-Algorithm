// leetcode：https://leetcode.cn/problems/merge-intervals/
// 代码随想录：https://programmercarl.com/0056.%E5%90%88%E5%B9%B6%E5%8C%BA%E9%97%B4.html
// 时间复杂度：TODO
// 空间复杂度：TODO
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
// 就是遍历判断区间是否重叠，当前项左边界小于等于前一项的右边界
// 进行左边界排序
// 新增一个二维数组存放数据，然后后续更新也在这个数组，不去远数组进行操作
var merge = function (intervals) {
  if (intervals.length === 0) {
    return [];
  }
  // 左边界进行排序
  intervals = intervals.sort((a, b) => a[0] - b[0]);
  // 新数组存放结果，将第一项添加进去
  let result = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    let item = intervals[i];
    let last = result[result.length - 1];
    // 判断是否重叠
    // 当前项左边界小于等于前一项的右边界
    if (item[0] <= last[1]) {
      // 当前项合并到前一项中
      // 把前一项的右边界改为两项中的最右边界
      last[1] = Math.max(item[1], last[1]);
    } else {
      // 没有重叠直接加入到 result 中
      result.push(item);
    }
  }
  return result;
};
