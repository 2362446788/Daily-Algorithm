// leetcode：https://leetcode.cn/problems/find-all-anagrams-in-a-string/
// 代码随想录：
// 时间复杂度：O(n)
// 空间复杂度：O(1)
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  // s 长度比 p 还小直接返回 []
  if (s.length < p.length) {
    return [];
  }
  // 使用滑动窗口，结合数组来判断是否为异位词
  let res = [];
  // 因为全是小写字母，所以开辟一个数组来存储
  let sCount = new Array(26).fill(0);
  let pCount = new Array(26).fill(0);
  let base = "a".charCodeAt();
  // 先初始化第一个窗口
  for (let i = 0; i < p.length; i++) {
    // s[i].charCodeAt() - base 就是在数组的下标，例如：a - a = 0，b - a = 1
    sCount[s[i].charCodeAt() - base]++;
    pCount[p[i].charCodeAt() - base]++;
  }
  // 判断第一个窗口是不是符合条件
  if (sCount.toString() === pCount.toString()) {
    res.push(0);
  }
  // 开始滑动窗口
  for (let i = 0; i < s.length - p.length; i++) {
    // 把窗口的第一位删除
    sCount[s[i].charCodeAt() - base]--;
    // 把窗口的下一个值添加进来
    sCount[s[i + p.length].charCodeAt() - base]++;
    // 判断是否是异位词
    if (sCount.toString() === pCount.toString()) {
      res.push(i + 1);
    }
  }
  return res;
};

// 如果入参不是小写字母时，可以是用 map 来处理
// var findAnagrams = function(s, p) {
//     const sLen = s.length, pLen = p.length;
//     if (sLen < pLen) return [];

//     // 统计 p 中字符频次
//     const pCount = new Map();
//     for (const ch of p) {
//         pCount.set(ch, (pCount.get(ch) || 0) + 1);
//     }

//     // 初始化 s 的第一个窗口（前 pLen 个字符）
//     const sCount = new Map();
//     for (let i = 0; i < pLen; i++) {
//         const ch = s[i];
//         sCount.set(ch, (sCount.get(ch) || 0) + 1);
//     }

//     const ans = [];
//     // 比较两个 Map 是否相同（键和值都相等）
//     const isEqual = (map1, map2) => {
//         if (map1.size !== map2.size) return false;
//         for (const [key, val] of map1) {
//             if (map2.get(key) !== val) return false;
//         }
//         return true;
//     };

//     if (isEqual(sCount, pCount)) ans.push(0);

//     // 滑动窗口
//     for (let i = 0; i < sLen - pLen; i++) {
//         // 移除左字符
//         const leftChar = s[i];
//         sCount.set(leftChar, sCount.get(leftChar) - 1);
//         if (sCount.get(leftChar) === 0) sCount.delete(leftChar); // 删除值为0的键，便于比较

//         // 加入右字符
//         const rightChar = s[i + pLen];
//         sCount.set(rightChar, (sCount.get(rightChar) || 0) + 1);

//         // 比较
//         if (isEqual(sCount, pCount)) ans.push(i + 1);
//     }
//     return ans;
// };

// 这个暴力解法也没有跑通全部 case
// var findAnagrams = function(s, p) {
//     let res = [];
//     for (let i = 0; i < s.length - p.length + 1; i++) {
//         let str = s.slice(i, i + p.length);
//         if (isAnagram(str, p)) {
//             res.push(i);
//         }
//     }
//     return res;
// };
// var isAnagram = function (s, t) {
//     if (s.length !== t.length) return false;
//     const arr = new Array(26).fill(0);
//     // 获取 asill 码
//     const base = 'a'.charCodeAt();
//     for (const i of s) {
//         // 对应字符的 asill 码减去 a 的就是对应数组的下标，因为这 26 个字母是连续的
//         arr[i.charCodeAt() - base]++;
//     }
//     for (const j of t) {
//         // 如果在 arr 中都找不到数据，那就直接返回 false
//         if (!arr[j.charCodeAt() - base]) return false;
//         // 找了就减 1
//         arr[j.charCodeAt() - base]--;
//     }
//     return true;
// }
// 时间复杂度太高暴力解法不行
// const is = (a, b) => {
//     let map = new Map();
//     for (let item of a) {
//         if (!map.has(item)) {
//             map.set(item, 1);
//         } else {
//             map.set(item, map.get(item) + 1);
//         }
//     }
//     for (let item of b) {
//         if (map.has(item)) {
//             map.set(item, map.get(item) - 1);
//         } else {
//             return false;
//         }
//     }
//     return Array.from(map.values()).every(item => item === 0);
// }
