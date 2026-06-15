// leetcode：https://leetcode.cn/problems/ransom-note/
// 代码随想录：https://programmercarl.com/0383.%E8%B5%8E%E9%87%91%E4%BF%A1.html
// 时间复杂度：O(n)
// 空间复杂度：O(1)
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  // 使用 map 来存储 magazine 出现的值
  let map = new Map();
  for (let item of magazine) {
    if (!map.has(item)) {
      map.set(item, 1);
    } else {
      map.set(item, map.get(item) + 1);
    }
  }
  // 遍历 ransomNote 去匹配 map 中的值，如果匹配并且值不是 0 的话就减一，否则就不匹配直接返回 false
  for (let item of ransomNote) {
    let result = map.get(item);
    if (result && result !== 0) {
      map.set(item, result - 1);
    } else {
      return false;
    }
  }
  // 最后都能匹配上返回 true
  return true;

  // 用数组也能计算
  // const strArr = new Array(26).fill(0),
  //     base = "a".charCodeAt();
  // for(const s of magazine) {  // 记录 magazine里各个字符出现次数
  //     strArr[s.charCodeAt() - base]++;
  // }
  // for(const s of ransomNote) { // 对应的字符个数做--操作
  //     const index = s.charCodeAt() - base;
  //     if(!strArr[index]) return false;  // 如果没记录过直接返回false
  //     strArr[index]--;
  // }
  // return true;
};
