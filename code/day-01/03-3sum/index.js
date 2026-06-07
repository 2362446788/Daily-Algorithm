// leetcode：https://leetcode.cn/problems/3sum/
// 代码随想录：https://programmercarl.com/0015.%E4%B8%89%E6%95%B0%E4%B9%8B%E5%92%8C.html
// 时间复杂度：O(n^2)
// 空间复杂度：O(1)
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  // 思路：不要求返回具体的下标，可以先把数组升序排序来处理
  // 假设获取到的值是 [first, second, three]，一个新数组 result 存放结果
  // 第一层遍历获取到 first 的值，如果 first 直接大于 0 了，直接返回 result
  // 然后为了不使用三层暴力解法，想到了使用双指针，对于剩下的值进行一前一后进行处理
  // left 指向剩余数据的第一位，right 指向最后一位
  // 然后获取对应的值进行三个数相加和 0 比较，如果大于 0 ，说明 right 需要缩小往左移动，小于 0 ，说明 left 需要增大往右移动
  // 最后移动的结束条件是 left < right，不能等于，因为要找两个数，等于了就只能找得到一个数，不合法
  // 把找到的结果存进 result，最后遍历完成返回 result
  // 剩下的是去重，有两处，第一去重 first，第二去重 second 和 three
  // 去重 first：因为是顺序排序的，所以前一个如果已经计算过了，后续相同的值就不用再计算了，因此增加判断，如果当前值和前一位相同就跳过计算
  // 去重 second 和 three：因为需要最少计算一次获取到一个正确结果，后续的可以跳过，所以需要在把结果 push 到 result 中后去做去重；left 如果和下一位相同就继续下一位 left++，right 如果和前一位相同就继续前一位 right--
  const result = [];
  nums = nums.sort((a, b) => a - b);
  // 因为要找三个数，所以只能遍历到倒数第三个值
  for (let i = 0; i < nums.length - 2; i++) {
    let first = nums[i];
    if (first > 0) {
      return result;
    }
    let left = i + 1;
    let right = nums.length - 1;
    // first 去重
    if (i > 0 && first === nums[i - 1]) {
      continue;
    }
    while (left < right) {
      let second = nums[left];
      let three = nums[right];
      let sum = first + second + three;
      if (sum > 0) {
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        result.push([first, second, three]);
        // second 去重，需要满足 left < right 的前提
        while (left < right && second === nums[left + 1]) {
          left++;
        }
        // three 去重，需要满足 left < right 的前提
        while (left < right && three === nums[right - 1]) {
          right--;
        }
        left++;
        right--;
      }
    }
  }
  return result;

  // // 存放数据结果
  // const result = [];
  // const length = nums.length;
  // // 因为对下标没有要求，所以可以先将数组进行排序处理
  // nums = nums.sort((a, b) => a - b);
  // // 采用第一个 for 循环获取 i，然后剩下的内容实用两个指针，分别指向头和尾
  // for (let i = 0; i < length - 2; i++) {
  //     // 如果排序后的第一个数据都大于零，那么后续就不可能存在三元组满足条件
  //     let item = nums[i];
  //     let left = i + 1;
  //     let right = length - 1;
  //     if (item > 0) {
  //         return result;
  //     }
  //     // 针对第一个值去重
  //     // 要把当前一位的进行去重判断，因为前一位已经经过计算了，如果和前一个相同，那么就不需要再计算了
  //     // 为什么不和后一位计算呢？因为后一位还没有计算过，例如 [-1, -1, 2]，如果和后一位比较，那么 -1 === -1 就会跳过了，计算错误
  //     if (i > 0 && item === nums[i - 1]) {
  //         continue;
  //     }
  //     while (left < right) {
  //         let leftValue = nums[left];
  //         let rightValue = nums[right];
  //         let threeSum = item + leftValue + rightValue;
  //         if (threeSum > 0) {
  //             // 说明值大了，需要缩小值，只能把 right 往左移动
  //             right--;
  //         } else if (threeSum < 0) {
  //             // 说明值小了，需要增大值，只能把 left 往右移动
  //             left++;
  //         } else {
  //             // 等于 0 说明找到了，将结果加入新数组中
  //             result.push([item, leftValue, rightValue]);
  //             // 这里去重 left 和 right，因为如果剩下的 left 都是同样的值，就没有必要继续计算了，因为不能重复
  //             while (left < right && leftValue === nums[left + 1]) {
  //                 left++;
  //             }
  //             while (left < right && rightValue === nums[right - 1]) {
  //                 right--;
  //             }
  //             left++;
  //             right--;
  //         }
  //     }
  // }
  // return result;
};
