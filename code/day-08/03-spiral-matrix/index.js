// leetcode：https://leetcode.cn/problems/spiral-matrix/
// 代码随想录参考：https://programmercarl.com/0059.%E8%9E%BA%E6%97%8B%E7%9F%A9%E9%98%B5II.html
// 说明：54. 螺旋矩阵 / LCR 146. 螺旋遍历二维数组都可复用这套循环不变量思路
// 时间复杂度：O(m*n)
// 空间复杂度：O(1)
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder1 = function (matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  const result = [];

  let top = 0,
    bottom = m - 1,
    left = 0,
    right = n - 1;

  // 只要还有未处理的圈
  while (top < bottom && left < right) {
    // 1. 上边：从左到右（不包含最右）
    for (let col = left; col < right; col++) {
      result.push(matrix[top][col]);
    }

    // 2. 右边：从上到下（不包含最下）
    for (let row = top; row < bottom; row++) {
      result.push(matrix[row][right]);
    }

    // 3. 下边：从右到左（不包含最左）
    for (let col = right; col > left; col--) {
      result.push(matrix[bottom][col]);
    }

    // 4. 左边：从下到上（不包含最上）
    for (let row = bottom; row > top; row--) {
      result.push(matrix[row][left]);
    }

    // 一圈结束，边界向内收缩
    top++;
    bottom--;
    left++;
    right--;
  }

  // 处理剩下的单行或单列
  if (top === bottom) {
    // 只剩一行（从左到右，需要包含最右）
    for (let col = left; col <= right; col++) {
      result.push(matrix[top][col]);
    }
  } else if (left === right) {
    // 只剩一列（从上到下，需要包含最下）
    for (let row = top; row <= bottom; row++) {
      result.push(matrix[row][left]);
    }
  }

  return result;
};

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const m = matrix.length; // 行数
  const n = matrix[0].length; // 列数
  const result = []; // 存放结果

  // 初始化四个边界
  let top = 0;
  let bottom = m - 1;
  let left = 0;
  let right = n - 1;

  // 只要边界还未交叉，就继续读取
  while (top <= bottom && left <= right) {
    // 1. 从左到右遍历上边界
    for (let col = left; col <= right; col++) {
      result.push(matrix[top][col]);
    }
    top++; // 上边界下移一行，因为这一行已经读完

    // 2. 从上到下遍历右边界
    for (let row = top; row <= bottom; row++) {
      result.push(matrix[row][right]);
    }
    right--; // 右边界左移一列

    // 3. 从右到左遍历下边界（需要先判断是否还有行）
    if (top <= bottom) {
      for (let col = right; col >= left; col--) {
        result.push(matrix[bottom][col]);
      }
      bottom--; // 下边界上移一行
    }

    // 4. 从下到上遍历左边界（需要先判断是否还有列）
    if (left <= right) {
      for (let row = bottom; row >= top; row--) {
        result.push(matrix[row][left]);
      }
      left++; // 左边界右移一列
    }
  }

  return result;
};
