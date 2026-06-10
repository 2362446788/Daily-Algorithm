// leetcode：https://leetcode.cn/problems/reverse-words-in-a-string/
// 代码随想录：https://programmercarl.com/0151.%E7%BF%BB%E8%BD%AC%E5%AD%97%E7%AC%A6%E4%B8%B2%E9%87%8C%E7%9A%84%E5%8D%95%E8%AF%8D.html
// 时间复杂度：O(n)
// 空间复杂度：O(1)
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let arr = Array.from(s);
  // 先移除无效的空格
  let newArr = removeSpace(arr);
  // 先整体反转字符串
  reverse(arr, 0, arr.length - 1);
  // 获取每一个单词进行反转
  // 记录单词的开始下标 start
  let start = 0;
  // 记录单词结束下标 i
  for (let i = 0; i <= arr.length; i++) {
    // 找到单词中的空字符串或者遍历到了数组结尾，都需要进行这个单词反转
    if (arr[i] === " " || i === arr.length) {
      reverse(arr, start, i - 1);
      // 反转之后start指向剩下需要反转的内容
      start = i + 1;
    }
  }
  return arr.join("");
};
// function removeSpace(arr) {
//     let slow = 0;
//     let fast = 0;
//     while (fast < arr.length) {
//         if (arr[fast] === ' ' && (arr[fast-1] === ' ' || fast === 0)) {
//             fast++;
//         } else {
//             arr[slow] = arr[fast];
//             fast++;
//             slow++;
//         }
//     }
//     // '  he  wo  '
//     // 移除末尾空格
//     // 因为 slow 目前循环之后就是数组的长度，指向数组下一个要写入的位置，所以 slow - 1才是才是最后一个数组的下标
//     arr.length = arr[slow - 1] === ' ' ? slow - 1 : slow;
//     return arr;
// }
function removeSpace(arr) {
  let slow = 0;
  let fast = 0;
  while (fast < arr.length) {
    // 如果不是空字符串，那么就把fast的值赋值给slow，两者同时加一
    if (arr[fast] !== " ") {
      // 这里还需要保留单子中的一个空字符串，只需要单词中的增加一个
      if (slow !== 0) {
        arr[slow] = " ";
        slow++;
      }
      // 然后把所有连续的非空字符串的字符都赋值给slow，两者同时加一，往右移动
      while (fast < arr.length && arr[fast] !== " ") {
        arr[slow] = arr[fast];
        fast++;
        slow++;
      }
    } else {
      fast++;
    }
  }
  // 最后数组长度就是 slow 的长度，因为循环完之后slow是指向下一个要写入的位置，但是fast遍历完了，就没有要写入的
  arr.length = slow;
  return arr;
}
// 翻转从 start 到 end 的字符
function reverse(strArr, start, end) {
  let left = start;
  let right = end;
  while (left < right) {
    // 交换
    [strArr[left], strArr[right]] = [strArr[right], strArr[left]];
    left++;
    right--;
  }
}
