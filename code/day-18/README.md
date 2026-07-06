# Day 18

## 回溯算法

配合递归调用做回溯的
一般一下几种情况就要使用回溯算法：
1. 组合问题
2. 子集问题
3. 排列问题

回溯法的解决都可以抽象为树的结构，单层递归调用进去，然后再回溯出来

### 回溯算法模版

1. 参数以及返回值（没有返回值）

```js
function backtracking() {}
```

2. 回溯终止条件

```js
if (终止条件) {
    存放结果;
    return;
}
```

3. 回溯的遍历过程

```js
for (选择：本层集合中元素（树中节点孩子的数量就是集合的大小）) {
    处理节点;
    backtracking(路径，选择列表); // 递归
    回溯，撤销处理结果
}
```

## 题目列表

1. 77. 组合
   - LeetCode: https://leetcode.cn/problems/combinations/
   - 代码随想录: https://programmercarl.com/0077.%E7%BB%84%E5%90%88.html
2. 46. 全排列
   - LeetCode: https://leetcode.cn/problems/permutations/
   - 代码随想录: https://programmercarl.com/0046.%E5%85%A8%E6%8E%92%E5%88%97.html
3. 78. 子集
   - LeetCode: https://leetcode.cn/problems/subsets/
   - 代码随想录: https://programmercarl.com/0078.%E5%AD%90%E9%9B%86.html
4. 39. 组合总和
   - LeetCode: https://leetcode.cn/problems/combination-sum/
   - 代码随想录: https://programmercarl.com/0039.%E7%BB%84%E5%90%88%E6%80%BB%E5%92%8C.html
