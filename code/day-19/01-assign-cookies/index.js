// leetcode：https://leetcode.cn/problems/assign-cookies/
// 代码随想录：https://programmercarl.com/0455.%E5%88%86%E5%8F%91%E9%A5%BC%E5%B9%B2.html
// 时间复杂度：TODO
// 空间复杂度：TODO
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
// 思路
// 使用贪心算法，用大饼干满足大胃口的孩子，这样就能更多的满足孩子的胃口
var findContentChildren = function (g, s) {
  g = g.sort((a, b) => a - b);
  s = s.sort((a, b) => a - b);
  // 记录满足了几个孩子
  let result = 0;
  // 记录饼干移动的下标
  let index = s.length - 1;
  for (let i = g.length - 1; i >= 0; i--) {
    // 如果有大饼干能满足孩子就往前移动
    if (index >= 0 && s[index] >= g[i]) {
      index--;
      result++;
    }
  }
  return result;
};
