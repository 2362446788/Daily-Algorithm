// leetcode：https://leetcode.cn/problems/find-the-index-of-the-first-occurrence-in-a-string/
// 代码随想录：https://programmercarl.com/0028.%E5%AE%9E%E7%8E%B0strStr.html
// 时间复杂度：O(m+n)
// 空间复杂度：O(n)
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  // 使用 kmp 算法，能够减少回溯的过程
  // 先计算next数组存储最长相同前后缀
  function getNext(needle) {
    // 初始化第一项
    const next = [];
    let j = 0;
    next[0] = j;
    for (let i = 1; i < needle.length; i++) {
      // 值不相同的情况
      while (needle[i] !== needle[j] && j > 0) {
        j = next[j - 1];
      }
      // 值相同的情况
      if (needle[i] === needle[j]) {
        j++;
      }
      // 填充 next
      next[i] = j;
    }
    return next;
  }
  let next = getNext(needle);
  // 模式串 needle 的下标
  let j = 0;
  // 遍历文本串 haystack
  for (let i = 0; i < haystack.length; i++) {
    // 两个值不想等的情况
    while (haystack[i] !== needle[j] && j > 0) {
      // 往前移动，然后不移动到初始位置，移动到最长相同前后缀的值的索引位置
      j = next[j - 1];
    }
    if (haystack[i] === needle[j]) {
      // 移动 needle 的下标
      j++;
    }
    // 下标移动到模式串末尾了直接返回文本串的下标
    if (j === needle.length) {
      return i - (needle.length - 1);
    }
  }
  return -1;
};

// 时间复杂度：O(n^)
// 空间复杂度：O(n)
// 暴力解法
var strStr = function (haystack, needle) {
  // 获取两个字符串的长度
  let n = haystack.length;
  let m = needle.length;
  // 两层 for 循环，然后去一一比较对应的字符
  // 遍历到 n-m 就退出，再往后遍历就可能获取不到 haystack 的数据了
  for (let i = 0; i <= n - m; i++) {
    // 设置一个标识
    let flag = true;
    for (let j = 0; j < needle.length; j++) {
      // 找到一个不匹配的字符就把 flag 标识改成 false，并停止遍历
      if (haystack[i + j] !== needle[j]) {
        flag = false;
        break;
      }
    }
    // 如果都匹配了那就返回当前 i
    if (flag) {
      return i;
    }
  }
  return -1;
};
