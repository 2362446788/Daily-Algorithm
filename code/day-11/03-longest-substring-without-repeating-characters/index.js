// leetcode：https://leetcode.cn/problems/longest-substring-without-repeating-characters/
// 代码随想录：
// 时间复杂度：O(n)
// 空间复杂度：O(n)
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  // 定义两个指针来进行保存滑动窗口的位置
  let left = 0;
  let right = 0;
  // 定义一个 set 集合来存储判断是否出现重复的字符串
  let set = new Set();
  // 找到的满足条件的子串
  let length = 0;
  // 所有子串的最大长度
  let maxLength = 0;
  // 开始移动右指针
  while (right < s.length) {
    // 2. 出现重复元素的情况
    // 需要清理掉前面的数据，left 指针移动清理
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    // 1. 把元素加到 set 中，right ++，计算 length 和 maxLength 的值
    // 但是没有考虑出现重复字符串的情况，如果出现重复字符串，就是走到这里一定要是剩下的都是非重复元素，那就需要前置处理重复元素的情况
    set.add(s[right]);
    right++;
    length = right - left;
    maxLength = maxLength > length ? maxLength : length;

    // 下面这个处理方式更直观
    // 判断是否出现，没有就将其存入 set，并且移动 right，计算 length 和 maxLength 的值
    // 否则从 left 开始删除，直到把前面存进来的数据删除到没有重复的数据为止，因为外层使用的是 while 循环，不会自动给 right++，所以这里只做一次，下一次进来还接着做，不用再新增 while
    // if (!set.has(s[right])) {
    //   set.add(s[right]);
    //   right++;
    //   length = right - left;
    //   maxLength = maxLength > length ? maxLength : length;
    // } else {
    //   set.delete(s[left]);
    //   left++;
    //   // 使用 while 去删除也可以
    //   // while (set.has(s[right])) {
    //   //     set.delete(s[left]);
    //   //     left++;
    //   // }
    // }
  }
  return maxLength;
};
