// leetcode：https://leetcode.cn/problems/spiral-matrix-ii/
// 代码随想录：https://programmercarl.com/0059.%E8%9E%BA%E6%97%8B%E7%9F%A9%E9%98%B5II.html
// 时间复杂度：O(n^2)
// 空间复杂度：O(1)
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  // 定义初始位置
  let startX = 0;
  let startY = 0;
  // 要转的圈数
  let loop = n >> 1;
  // 使用左闭右开原则，增加 offset 记录转了几圈
  // 因为是左闭右开，所以初始值应该为 1，即最后一个数据不用处理，留给下一个方向进行处理
  let offset = 1;
  // 创建数组存储数据
  let arr = new Array(n).fill(0).map(() => new Array(n).fill(0));
  // 计数器
  let count = 1;
  // 开始转圈
  while (loop--) {
    // 定义转圈需要的行和列
    let row = startX;
    let col = startY;
    // 遵循固定不变量原则，左闭右开
    // 上行从左到右
    for (; col < n - offset; col++) {
      arr[row][col] = count++;
    }
    // 右列从上到下
    for (; row < n - offset; row++) {
      arr[row][col] = count++;
    }
    // 下行从右到左
    for (; col > startY; col--) {
      arr[row][col] = count++;
    }
    // 左列从下到上
    for (; row > startX; row--) {
      arr[row][col] = count++;
    }
    // 转了一圈之后 startX 和 startY 进行加一，把圈缩小
    startX++;
    startY++;
    // 边界也需要缩小
    offset++;
  }
  // 奇数会剩下中间位置，需要把其进行单独处理进行赋值
  if (n % 2 === 1) {
    arr[startX][startY] = count;
  }
  return arr;
};
