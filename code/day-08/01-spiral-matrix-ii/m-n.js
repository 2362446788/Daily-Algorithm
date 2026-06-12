// 支持 m✖️n 矩阵，相较于正方形矩阵就多了圈数判断和后面剩余未填充位置的处理
var generateMatrix = function (m, n) {
  // 初始化 m x n 矩阵
  const matrix = Array.from({ length: m }, () => new Array(n).fill(0));

  let startX = 0,
    startY = 0; // 每一圈的起始点
  let loop = Math.min(m, n) >> 1; // 圈数
  let offset = 1; // 边界收缩量（左闭右开依赖）
  let count = 1;

  while (loop--) {
    let row = startX;
    let col = startY;

    // 上行：从左到右（左闭右开：不包含最右列）
    for (; col < n - offset; col++) {
      matrix[row][col] = count++;
    }
    // 右列：从上到下（不包含最下行）
    for (; row < m - offset; row++) {
      matrix[row][col] = count++;
    }
    // 下行：从右到左（不包含最左列）
    for (; col > startY; col--) {
      matrix[row][col] = count++;
    }
    // 左列：从下到上（不包含最上行）
    for (; row > startX; row--) {
      matrix[row][col] = count++;
    }

    startX++;
    startY++;
    offset++; // 每圈缩进 1
  }

  // 处理剩余部分（中间行、中间列或中心点）
  // 剩余情况：当 min(m, n) 为奇数时
  if (Math.min(m, n) % 2 === 1) {
    if (m > n) {
      // 剩一列，列索引 = startY，行从 startX 到 m - offset
      for (let i = startX; i <= m - offset; i++) {
        matrix[i][startY] = count++;
      }
    } else if (n > m) {
      // 剩一行，行索引 = startX，列从 startY 到 n - offset
      for (let j = startY; j <= n - offset; j++) {
        matrix[startX][j] = count++;
      }
    } else {
      // 正方形剩中心点
      matrix[startX][startY] = count;
    }
  }

  return matrix;
};
