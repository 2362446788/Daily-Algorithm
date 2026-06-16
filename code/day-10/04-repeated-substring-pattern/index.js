// leetcode：https://leetcode.cn/problems/repeated-substring-pattern/
// 代码随想录：https://programmercarl.com/0459.%E9%87%8D%E5%A4%8D%E7%9A%84%E5%AD%90%E5%AD%97%E7%AC%A6%E4%B8%B2.html
// 时间复杂度：TODO
// 空间复杂度：TODO
/**
 * @param {string} s
 * @return {boolean}
 */
// kmp 算法
var repeatedSubstringPattern = function (s) {
  // 先计算next数组，最长相同前后缀
  function getNext(s) {
    let next = [];
    let j = 0;
    next[0] = j;
    for (let i = 1; i < s.length; i++) {
      while (s[i] !== s[j] && j > 0) {
        j = next[j - 1];
      }
      if (s[i] === s[j]) {
        j++;
      }
      next[i] = j;
    }
    return next;
  }
  let next = getNext(s);
  let sLen = s.length;
  // 最长重复前后缀的数量
  let nextVal = next[next.length - 1];
  // 剩余的字串长度
  let repeatedLen = sLen - nextVal;
  // 有重复的前后缀并且字符串能够倍剩余的子串整除
  if (nextVal > 0 && sLen % repeatedLen === 0) {
    return true;
  }
  return false;
};

// S+S解法
var repeatedSubstringPattern2 = function (s) {
  // 如果一个字符串能够由子串重复组成，那么 s + s 的结果在去掉头尾字符的时候也能找到 s
  let str = s + s;
  return str.slice(1, str.length - 1).includes(s);
};

var repeatedSubstringPattern1 = function (s) {
  // 暴力解法
  // 子串的开头一定和字符串一样，不然没办法重复，并且子串一定小于等于字符串长度的一半，不让也没办重复构成
  // 那么就开始遍历，遍历到字符串的一半前半段，然后再来一个遍历后端段
  let len = s.length;
  // 第一个循环中 i 是子串的长度
  for (let i = 1; i <= len / 2; i++) {
    // 必须能够整除才继续
    if (len % i === 0) {
      // 一个标记
      let flag = true;
      for (let j = i; j < len; j++) {
        // 重复串，s[j] 和 s[j - i] 必须相等才可以
        // 不想等就是不匹配将 flag 改为 false
        if (s[j] !== s[j - i]) {
          flag = false;
          break;
        }
      }
      // 找到一个直接返回
      if (flag) {
        return true;
      }
    }
  }
  return false;
};
