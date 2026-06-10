// leetcode：https://leetcode.cn/problems/reverse-string-ii/
// 代码随想录：https://programmercarl.com/0541.%E5%8F%8D%E8%BD%AC%E5%AD%97%E7%AC%A6%E4%B8%B2II.html
// 时间复杂度：O(n)
// 空间复杂度：O(1)
// 双指针写法
var reverseStr = function (s, k) {
  // js 中没办法对字符串进行翻转，需要借用数组
  let arr = s.split("");
  // 题目要求每 2k 个字符，那么就可以每次遍历 2k 个字符
  for (let i = 0; i < arr.length; i += 2 * k) {
    // 每次遍历了 2k 个字符，需要将前 k 个反转
    // 那么就使用双指针来反转
    let left = i;
    // 为什么是 i + k - 1 呢？
    // ['a', 'b', 'c'], i = 0, k = 3，此时要反转这三个，如果直接使用 i + k = 3，超过数组下标了，越界了，执行结果就不正确，因此需要判断是否越界，越界了 就需要只能访问数组最后一项
    let right = i + k - 1 > arr.length ? arr.length : i + k - 1;
    // 使用双指针移动交换位置进行反转
    while (left < right) {
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left++;
      right--;
    }
  }
  // 最后输出字符串
  return arr.join("");
};

// 条件判断写法
var reverseArr = function (arr, i, k) {
  let arr1 = arr.slice(0, i);
  let arr2 = arr.slice(i, k);
  let arr3 = arr.slice(k, arr.length);
  let left = 0;
  let right = arr2.length - 1;
  while (left < right) {
    let temp = arr2[right];
    arr2[right] = arr2[left];
    arr2[left] = temp;
    left++;
    right--;
  }
  // 这样写更方便
  // return [...arr.slice(0, i), ...arr2, ...arr.slice(k, arr.length)];
  return arr1.concat(arr2).concat(arr3);
};
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  // js 中没办法对字符串进行翻转，需要借用数组
  let arr = s.split("");
  // 题目要求每 2k 个字符，那么就可以每次遍历 2k 个字符
  for (let i = 0; i < arr.length; i += 2 * k) {
    // 每次遍历了 2k 个字符，需要将前 k 个反转
    // 取到的字符可能有 2k 个也可能小于 2k 个，但反转不关心是否有 2k 个字符
    // 只关心是否满足 k 个字符
    // 1. 如果前 k 个字符都存在，即 i + k <= arr.length，那么反转前 k 个字符
    if (i + k <= arr.length) {
      arr = reverseArr(arr, i, i + k);
    } else {
      // 2. 如果不满足 k 个，那么就将剩下的字符都反转
      arr = reverseArr(arr, i, arr.length);
    }
  }
  return arr.join("");
};
