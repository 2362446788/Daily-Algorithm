// leetcode：https://leetcode.cn/problems/valid-anagram/
// 代码随想录：https://programmercarl.com/0242.%E6%9C%89%E6%95%88%E7%9A%84%E5%AD%97%E6%AF%8D%E5%BC%82%E4%BD%8D%E8%AF%8D.html
// 时间复杂度：O(n)
// 空间复杂度：O(n)
/**
 * @param {...any} args
 * @return {any}
 */
// 使用数组
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const arr = new Array(26).fill(0);
  // 获取 asill 码
  const base = "a".charCodeAt();
  for (const i of s) {
    // 对应字符的 asill 码减去 a 的就是对应数组的下标，因为这 26 个字母是连续的
    arr[i.charCodeAt() - base]++;
  }
  for (const j of t) {
    // 如果在 arr 中都找不到数据，那就直接返回 false
    if (!arr[j.charCodeAt() - base]) return false;
    // 找了就减 1
    arr[j.charCodeAt() - base]--;
  }
  return true;
};

// 使用对象间的解法
// var isAnagram = function (s, t) {
//   // 使用对象将 s 的数据存下来，每个字符就增加 1 计数
//   let result = {};
//   // extra 是 t 遍历的时候如果找到了不再 s 中的字符，就增加 1 计数
//   let extra = 0;
//   // 将 s 转换为对象存储，例如：{ a: 3, n: 1, g: 1 }
//   for (let i of s) {
//     if (i in result) {
//       result[i]++;
//     } else {
//       result[i] = 1;
//     }
//   }
//   // 遍历 t 去匹配 result 中的属性
//   for (let j of t) {
//     // 匹配到属性
//     if (j in result) {
//       // 将对应的值减 1
//       result[j]--;
//       // 如果减到 0 了就直接删除这个属性
//       if (result[j] === 0) {
//         delete result[j];
//       }
//       // 没有找到对应的属性，那么 extra 加 1
//     } else {
//       extra++;
//     }
//   }
//   // 最后判断 result 中是不是完全匹配完删除掉所有属性，并且没有额外的没有匹配到的属性
//   return Object.keys(result).length === 0 && extra === 0;
// };
