// leetcode：https://leetcode.cn/problems/group-anagrams/
// 代码随想录：
// 时间复杂度：O(nklogk)，其中 n 是 strs 中的字符串的数量，k 是 strs 中的字符串的的最大长度。需要遍历 n 个字符串，对于每个字符串，需要 O(klogk) 的时间进行排序以及 O(1) 的时间更新哈希表，因此总时间复杂度是 O(nklogk)。
// 空间复杂度：O(nk)，其中 n 是 strs 中的字符串的数量，k 是 strs 中的字符串的的最大长度。需要用哈希表存储全部字符串。
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let map = new Map();
  // 因为是字母异位词，那么排序之后一定相同
  for (let item of strs) {
    // 获取统一的字符串
    let newStr = item.split("").sort().join("");
    // 是否已经存在，不存在就添加一个 []
    if (!map.has(newStr)) {
      map.set(newStr, []);
    }
    // 直接往数组中添加内容
    map.get(newStr).push(item);
  }
  // 最后将 map 的值转换成数组返回
  return Array.from(map.values());
};
