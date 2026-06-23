// leetcode：https://leetcode.cn/problems/remove-all-adjacent-duplicates-in-string/
// 代码随想录：https://programmercarl.com/1047.%E5%88%A0%E9%99%A4%E5%AD%97%E7%AC%A6%E4%B8%B2%E4%B8%AD%E7%9A%84%E6%89%80%E6%9C%89%E7%9B%B8%E9%82%BB%E9%87%8D%E5%A4%8D%E9%A1%B9.html
// 时间复杂度：TODO
// 空间复杂度：TODO
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  // 直接使用栈来处理
  let stack = [];
  // 遍历字符串
  for (let item of s) {
    // 如果栈的末尾就存在相同的值，把栈中的值弹出，继续下一次循环
    if (item === stack[stack.length - 1]) {
      stack.pop();
    } else {
      // 不存在的话就加入到栈中
      stack.push(item);
    }
  }
  return stack.join("");

  // 双指针来处理
  // let arr = s.split('');
  // let slow = 0;
  // let fast = 0;
  // // 慢指针的值就是新数组
  // while (fast < arr.length) {
  //     // 先把 fast 的值赋值给 slow
  //     arr[slow] = arr[fast]
  //     // 如果 slow 和前一个值相同，那么将索引减一，不会相同的值更新到 slow，并且下一次循环还会把前一个值也更新成 fast 的最新值
  //     if (slow > 0 && arr[slow] === arr[slow - 1]) {
  //         slow--;
  //     } else {
  //         slow++;
  //     }
  //     fast++;
  // }
  // // 最后截取对应长度的数组然后构造成字符串输出
  // return arr.slice(0, slow).join('');
};
