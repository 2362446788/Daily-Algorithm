# 前端算法面试够用版刷题计划

目标：**尽快把前端算法面试打到能用**

这版不追求完整通关代码随想录，也不按 170 题全刷，而是：
- 尽量贴合代码随想录的大模块顺序
- 只保留前端面试最高频、最常考、最值得讲清楚的主线题
- 默认每天 `4` 题，优先采用：
  - `3 Easy + 1 Medium`
  - 或 `2 Easy + 2 Medium`
  - 某些专题会出现 `3 Medium` 或 `4 Medium`
- `Hard` 题只作为**可选替换题**，不算必做
- 每周日固定为**复习日**

参考主线：
- 代码随想录模块顺序：数组 → 链表 → 哈希表 → 字符串 → 双指针法 → 栈与队列 → 二叉树 → 回溯 → 贪心 → 动态规划 → 单调栈 → 图论
- 参考页面：[代码随想录数组理论基础](https://programmercarl.com/%E6%95%B0%E7%BB%84%E7%90%86%E8%AE%BA%E5%9F%BA%E7%A1%80.html)
- 视频合集：[代码随想录 B 站视频](https://www.bilibili.com/video/BV1wx4y157nD/?vd_source=aaa1de005a801c13a1565eb31db9e5c7)

## 总量怎么估算

- 已完成：`Day 1 ~ Day 7`
- 已完成新题：`18` 题
- 后续新题：`16` 个新题日 × `4` 题 = `64` 题
- 全计划必做新题总量：`82` 题
- 复习日：`Day 7 / Day 14 / Day 21 / Day 26`
- 总周期：`26` 天

说明：
- `82` 题属于“前端面试更稳版”，不是最极限压缩版
- 如果后面时间突然变紧，可以优先保住每个模块里的前两天
- 文中的 `Hard` 题为可选，不计入必做题量

## 每天怎么刷

1. 先看 Carl 对应题解 10 到 15 分钟，只看思路、边界、模板。
2. 每题卡住 15 分钟还没有核心思路，就切题解，不死磕。
3. 每天刷完后固定做 10 分钟复盘：
   - 口述今天 4 题的核心思路
   - 记录 1 个最容易忘的边界
   - 记录 1 个模板关键词

## 复习日固定做什么

1. 重刷本周错题 2 到 3 题
2. 默写本周最核心的 2 个模板
3. 口述本周最热门的 3 题思路
4. 整理错因：
   - 边界没想到
   - 模板不熟
   - 题意读错
   - 复杂度判断失误

---

## 第 1 周｜已完成

### Day 1｜数组 + 哈希高频起手
1. [1. 两数之和](https://programmercarl.com/0001.%E4%B8%A4%E6%95%B0%E4%B9%8B%E5%92%8C.html) `E`
2. [704. 二分查找](https://programmercarl.com/0704.%E4%BA%8C%E5%88%86%E6%9F%A5%E6%89%BE.html) `E`
3. [15. 三数之和](https://programmercarl.com/0015.%E4%B8%89%E6%95%B0%E4%B9%8B%E5%92%8C.html) `M`

### Day 2｜数组双指针 + 滑动窗口
1. [27. 移除元素](https://programmercarl.com/0027.%E7%A7%BB%E9%99%A4%E5%85%83%E7%B4%A0.html) `E`
2. [977. 有序数组的平方](https://programmercarl.com/0977.%E6%9C%89%E5%BA%8F%E6%95%B0%E7%BB%84%E7%9A%84%E5%B9%B3%E6%96%B9.html) `E`
3. [209. 长度最小的子数组](https://programmercarl.com/0209.%E9%95%BF%E5%BA%A6%E6%9C%80%E5%B0%8F%E7%9A%84%E5%AD%90%E6%95%B0%E7%BB%84.html) `M`

### Day 3｜链表面试高频
1. [203. 移除链表元素](https://programmercarl.com/0203.%E7%A7%BB%E9%99%A4%E9%93%BE%E8%A1%A8%E5%85%83%E7%B4%A0.html) `E`
2. [206. 反转链表](https://programmercarl.com/0206.%E5%8F%8D%E8%BD%AC%E9%93%BE%E8%A1%A8.html) `E`
3. [19. 删除链表的倒数第 N 个结点](https://programmercarl.com/0019.%E5%88%A0%E9%99%A4%E9%93%BE%E8%A1%A8%E7%9A%84%E5%80%92%E6%95%B0%E7%AC%ACN%E4%B8%AA%E8%8A%82%E7%82%B9.html) `M`

### Day 4｜链表进阶
1. [面试题 02.07. 链表相交](https://programmercarl.com/%E9%9D%A2%E8%AF%95%E9%A2%9802.07.%E9%93%BE%E8%A1%A8%E7%9B%B8%E4%BA%A4.html) `E`
2. [142. 环形链表 II](https://programmercarl.com/0142.%E7%8E%AF%E5%BD%A2%E9%93%BE%E8%A1%A8II.html) `M`
3. [24. 两两交换链表中的节点](https://programmercarl.com/0024.%E4%B8%A4%E4%B8%A4%E4%BA%A4%E6%8D%A2%E9%93%BE%E8%A1%A8%E4%B8%AD%E7%9A%84%E8%8A%82%E7%82%B9.html) `M`

### Day 5｜字符串 + 栈高频
1. [20. 有效的括号](https://programmercarl.com/0020.%E6%9C%89%E6%95%88%E7%9A%84%E6%8B%AC%E5%8F%B7.html) `E`
2. [344. 反转字符串](https://programmercarl.com/0344.%E5%8F%8D%E8%BD%AC%E5%AD%97%E7%AC%A6%E4%B8%B2.html) `E`
3. [151. 翻转字符串里的单词](https://programmercarl.com/0151.%E7%BF%BB%E8%BD%AC%E5%AD%97%E7%AC%A6%E4%B8%B2%E9%87%8C%E7%9A%84%E5%8D%95%E8%AF%8D.html) `M`

### Day 6｜哈希 + 字符串高频
1. [242. 有效的字母异位词](https://programmercarl.com/0242.%E6%9C%89%E6%95%88%E7%9A%84%E5%AD%97%E6%AF%8D%E5%BC%82%E4%BD%8D%E8%AF%8D.html) `E`
2. [349. 两个数组的交集](https://programmercarl.com/0349.%E4%B8%A4%E4%B8%AA%E6%95%B0%E7%BB%84%E7%9A%84%E4%BA%A4%E9%9B%86.html) `E`
3. [454. 四数相加 II](https://programmercarl.com/0454.%E5%9B%9B%E6%95%B0%E7%9B%B8%E5%8A%A0II.html) `M`

### Day 7｜复习日
- 不刷新题
- 复习 Day 1 ~ Day 6 的错题、卡题、模板题
- 必做：
  - 手写一遍链表反转模板
  - 手写一遍双指针模板
  - 口述 `两数之和 / 三数之和 / 删除链表倒数第 N 个节点` 思路

---

## 第 2 周｜数组补强 → 哈希 → 字符串 → 窗口

### Day 8｜数组补强
1. [59. 螺旋矩阵 II](https://programmercarl.com/0059.%E8%9E%BA%E6%97%8B%E7%9F%A9%E9%98%B5II.html) `M`
2. [56. 合并区间](https://programmercarl.com/0056.%E5%90%88%E5%B9%B6%E5%8C%BA%E9%97%B4.html) `M`
3. [54. 螺旋矩阵](https://leetcode.cn/problems/spiral-matrix/) `M`
4. [238. 除自身以外数组的乘积](https://leetcode.cn/problems/product-of-array-except-self/) `M`

### Day 9｜哈希表补强
1. [202. 快乐数](https://programmercarl.com/0202.%E5%BF%AB%E4%B9%90%E6%95%B0.html) `E`
2. [383. 赎金信](https://programmercarl.com/0383.%E8%B5%8E%E9%87%91%E4%BF%A1.html) `E`
3. [49. 字母异位词分组](https://programmercarl.com/0049.%E5%AD%97%E6%AF%8D%E5%BC%82%E4%BD%8D%E8%AF%8D%E5%88%86%E7%BB%84.html) `M`
4. [18. 四数之和](https://programmercarl.com/0018.%E5%9B%9B%E6%95%B0%E4%B9%8B%E5%92%8C.html) `M`

### Day 10｜字符串主线
1. [541. 反转字符串 II](https://programmercarl.com/0541.%E5%8F%8D%E8%BD%AC%E5%AD%97%E7%AC%A6%E4%B8%B2II.html) `E`
2. [剑指 Offer 58-II. 左旋转字符串](https://programmercarl.com/%E5%89%91%E6%8C%87Offer58-II.%E5%B7%A6%E6%97%8B%E8%BD%AC%E5%AD%97%E7%AC%A6%E4%B8%B2.html) `E`
3. [28. 实现 strStr()](https://programmercarl.com/0028.%E5%AE%9E%E7%8E%B0strStr.html) `E`
4. [459. 重复的子字符串](https://programmercarl.com/0459.%E9%87%8D%E5%A4%8D%E7%9A%84%E5%AD%90%E5%AD%97%E7%AC%A6%E4%B8%B2.html) `E`

### Day 11｜双指针 + 滑动窗口
1. [26. 删除有序数组中的重复项](https://leetcode.cn/problems/remove-duplicates-from-sorted-array/) `E`
2. [283. 移动零](https://leetcode.cn/problems/move-zeroes/) `E`
3. [3. 无重复字符的最长子串](https://programmercarl.com/0003.%E6%97%A0%E9%87%8D%E5%A4%8D%E5%AD%97%E7%AC%A6%E7%9A%84%E6%9C%80%E9%95%BF%E5%AD%90%E4%B8%B2.html) `M`
4. [438. 找到字符串中所有字母异位词](https://programmercarl.com/0438.%E6%89%BE%E5%88%B0%E5%AD%97%E7%AC%A6%E4%B8%B2%E4%B8%AD%E6%89%80%E6%9C%89%E5%AD%97%E6%AF%8D%E5%BC%82%E4%BD%8D%E8%AF%8D.html) `M`
- 可选替换：
  - [239. 滑动窗口最大值](https://programmercarl.com/0239.%E6%BB%91%E5%8A%A8%E7%AA%97%E5%8F%A3%E6%9C%80%E5%A4%A7%E5%80%BC.html) `H`

### Day 12｜栈与队列
1. [232. 用栈实现队列](https://programmercarl.com/0232.%E7%94%A8%E6%A0%88%E5%AE%9E%E7%8E%B0%E9%98%9F%E5%88%97.html) `E`
2. [225. 用队列实现栈](https://programmercarl.com/0225.%E7%94%A8%E9%98%9F%E5%88%97%E5%AE%9E%E7%8E%B0%E6%A0%88.html) `E`
3. [1047. 删除字符串中的所有相邻重复项](https://programmercarl.com/1047.%E5%88%A0%E9%99%A4%E5%AD%97%E7%AC%A6%E4%B8%B2%E4%B8%AD%E7%9A%84%E6%89%80%E6%9C%89%E7%9B%B8%E9%82%BB%E9%87%8D%E5%A4%8D%E9%A1%B9.html) `E`
4. [150. 逆波兰表达式求值](https://programmercarl.com/0150.%E9%80%86%E6%B3%A2%E5%85%B0%E8%A1%A8%E8%BE%BE%E5%BC%8F%E6%B1%82%E5%80%BC.html) `M`

### Day 13｜二叉树入门
1. [104. 二叉树的最大深度](https://programmercarl.com/0104.%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E6%9C%80%E5%A4%A7%E6%B7%B1%E5%BA%A6.html) `E`
2. [226. 翻转二叉树](https://programmercarl.com/0226.%E7%BF%BB%E8%BD%AC%E4%BA%8C%E5%8F%89%E6%A0%91.html) `E`
3. [101. 对称二叉树](https://programmercarl.com/0101.%E5%AF%B9%E7%A7%B0%E4%BA%8C%E5%8F%89%E6%A0%91.html) `E`
4. [102. 二叉树的层序遍历](https://programmercarl.com/0102.%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E5%B1%82%E5%BA%8F%E9%81%8D%E5%8E%86.html) `M`

### Day 14｜复习日
- 不刷新题
- 复习 Day 8 ~ Day 13
- 必做：
  - 手写一遍滑动窗口模板
  - 手写一遍层序遍历模板
  - 口述 `最长无重复子串 / 合并区间 / 层序遍历` 思路

---

## 第 3 周｜树主线 → 链表补强 → 回溯 → 贪心 → DP 基础

### Day 15｜二叉树进阶
1. [111. 二叉树的最小深度](https://programmercarl.com/0111.%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E6%9C%80%E5%B0%8F%E6%B7%B1%E5%BA%A6.html) `E`
2. [112. 路径总和](https://programmercarl.com/0112.%E8%B7%AF%E5%BE%84%E6%80%BB%E5%92%8C.html) `E`
3. [257. 二叉树的所有路径](https://programmercarl.com/0257.%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E6%89%80%E6%9C%89%E8%B7%AF%E5%BE%84.html) `E`
4. [236. 二叉树的最近公共祖先](https://programmercarl.com/0236.%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E6%9C%80%E8%BF%91%E5%85%AC%E5%85%B1%E7%A5%96%E5%85%88.html) `M`

### Day 16｜二叉搜索树
1. [700. 二叉搜索树中的搜索](https://programmercarl.com/0700.%E4%BA%8C%E5%8F%89%E6%90%9C%E7%B4%A2%E6%A0%91%E4%B8%AD%E7%9A%84%E6%90%9C%E7%B4%A2.html) `E`
2. [530. 二叉搜索树的最小绝对差](https://programmercarl.com/0530.%E4%BA%8C%E5%8F%89%E6%90%9C%E7%B4%A2%E6%A0%91%E7%9A%84%E6%9C%80%E5%B0%8F%E7%BB%9D%E5%AF%B9%E5%B7%AE.html) `E`
3. [98. 验证二叉搜索树](https://programmercarl.com/0098.%E9%AA%8C%E8%AF%81%E4%BA%8C%E5%8F%89%E6%90%9C%E7%B4%A2%E6%A0%91.html) `M`
4. [235. 二叉搜索树的最近公共祖先](https://programmercarl.com/0235.%E4%BA%8C%E5%8F%89%E6%90%9C%E7%B4%A2%E6%A0%91%E7%9A%84%E6%9C%80%E8%BF%91%E5%85%AC%E5%85%B1%E7%A5%96%E5%85%88.html) `M`

### Day 17｜链表补强
1. [141. 环形链表](https://programmercarl.com/0141.%E7%8E%AF%E5%BD%A2%E9%93%BE%E8%A1%A8.html) `E`
2. [160. 相交链表](https://programmercarl.com/0160.%E7%9B%B8%E4%BA%A4%E9%93%BE%E8%A1%A8.html) `E`
3. [21. 合并两个有序链表](https://programmercarl.com/0021.%E5%90%88%E5%B9%B6%E4%B8%A4%E4%B8%AA%E6%9C%89%E5%BA%8F%E9%93%BE%E8%A1%A8.html) `E`
4. [2. 两数相加](https://programmercarl.com/0002.%E4%B8%A4%E6%95%B0%E7%9B%B8%E5%8A%A0.html) `M`

### Day 18｜回溯基础
1. [77. 组合](https://programmercarl.com/0077.%E7%BB%84%E5%90%88.html) `M`
2. [46. 全排列](https://programmercarl.com/0046.%E5%85%A8%E6%8E%92%E5%88%97.html) `M`
3. [78. 子集](https://programmercarl.com/0078.%E5%AD%90%E9%9B%86.html) `M`
4. [39. 组合总和](https://programmercarl.com/0039.%E7%BB%84%E5%90%88%E6%80%BB%E5%92%8C.html) `M`

### Day 19｜贪心高频
1. [455. 分发饼干](https://programmercarl.com/0455.%E5%88%86%E5%8F%91%E9%A5%BC%E5%B9%B2.html) `E`
2. [53. 最大子数组和](https://programmercarl.com/0053.%E6%9C%80%E5%A4%A7%E5%AD%90%E5%BA%8F%E5%92%8C.html) `M`
3. [55. 跳跃游戏](https://programmercarl.com/0055.%E8%B7%B3%E8%B7%83%E6%B8%B8%E6%88%8F.html) `M`
4. [45. 跳跃游戏 II](https://programmercarl.com/0045.%E8%B7%B3%E8%B7%83%E6%B8%B8%E6%88%8FII.html) `M`

### Day 20｜DP 基础
1. [509. 斐波那契数](https://programmercarl.com/0509.%E6%96%90%E6%B3%A2%E9%82%A3%E5%A5%91%E6%95%B0.html) `E`
2. [70. 爬楼梯](https://programmercarl.com/0070.%E7%88%AC%E6%A5%BC%E6%A2%AF.html) `E`
3. [121. 买卖股票的最佳时机](https://programmercarl.com/0121.%E4%B9%B0%E5%8D%96%E8%82%A1%E7%A5%A8%E7%9A%84%E6%9C%80%E4%BD%B3%E6%97%B6%E6%9C%BA.html) `E`
4. [198. 打家劫舍](https://programmercarl.com/0198.%E6%89%93%E5%AE%B6%E5%8A%AB%E8%88%8D.html) `M`

### Day 21｜复习日
- 不刷新题
- 复习 Day 15 ~ Day 20
- 必做：
  - 手写一遍二叉树 DFS/BFS 模板
  - 手写一遍回溯模板
  - 口述 `LCA / 两数相加 / 打家劫舍` 思路

---

## 第 4 周｜DP 进阶 → 单调栈 → 图论精选 → 冲刺复盘

### Day 22｜DP 进阶
1. [62. 不同路径](https://programmercarl.com/0062.%E4%B8%8D%E5%90%8C%E8%B7%AF%E5%BE%84.html) `M`
2. [63. 不同路径 II](https://programmercarl.com/0063.%E4%B8%8D%E5%90%8C%E8%B7%AF%E5%BE%84II.html) `M`
3. [322. 零钱兑换](https://programmercarl.com/0322.%E9%9B%B6%E9%92%B1%E5%85%91%E6%8D%A2.html) `M`
4. [300. 最长递增子序列](https://programmercarl.com/0300.%E6%9C%80%E9%95%BF%E9%80%92%E5%A2%9E%E5%AD%90%E5%BA%8F%E5%88%97.html) `M`

### Day 23｜单调栈 / 堆高频
1. [496. 下一个更大元素 I](https://programmercarl.com/0496.%E4%B8%8B%E4%B8%80%E4%B8%AA%E6%9B%B4%E5%A4%A7%E5%85%83%E7%B4%A0I.html) `E`
2. [347. 前 K 个高频元素](https://programmercarl.com/0347.%E5%89%8DK%E4%B8%AA%E9%AB%98%E9%A2%91%E5%85%83%E7%B4%A0.html) `M`
3. [739. 每日温度](https://programmercarl.com/0739.%E6%AF%8F%E6%97%A5%E6%B8%A9%E5%BA%A6.html) `M`
4. [503. 下一个更大元素 II](https://programmercarl.com/0503.%E4%B8%8B%E4%B8%80%E4%B8%AA%E6%9B%B4%E5%A4%A7%E5%85%83%E7%B4%A0II.html) `M`
- 可选替换：
  - [84. 柱状图中最大的矩形](https://programmercarl.com/0084.%E6%9F%B1%E7%8A%B6%E5%9B%BE%E4%B8%AD%E6%9C%80%E5%A4%A7%E7%9A%84%E7%9F%A9%E5%BD%A2.html) `H`

### Day 24｜图论精选
1. [200. 岛屿数量](https://leetcode.cn/problems/number-of-islands/) `M`
2. [994. 腐烂的橘子](https://leetcode.cn/problems/rotting-oranges/) `M`
3. [547. 省份数量](https://leetcode.cn/problems/number-of-provinces/) `M`
4. [207. 课程表](https://leetcode.cn/problems/course-schedule/) `M`

### Day 25｜冲刺高频题
1. [206. 反转链表（二刷）](https://programmercarl.com/0206.%E5%8F%8D%E8%BD%AC%E9%93%BE%E8%A1%A8.html) `E`
2. [3. 无重复字符的最长子串（二刷）](https://programmercarl.com/0003.%E6%97%A0%E9%87%8D%E5%A4%8D%E5%AD%97%E7%AC%A6%E7%9A%84%E6%9C%80%E9%95%BF%E5%AD%90%E4%B8%B2.html) `M`
3. [102. 二叉树的层序遍历（二刷）](https://programmercarl.com/0102.%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E5%B1%82%E5%BA%8F%E9%81%8D%E5%8E%86.html) `M`
4. [198. 打家劫舍（二刷）](https://programmercarl.com/0198.%E6%89%93%E5%AE%B6%E5%8A%AB%E8%88%8D.html) `M`
- 可选替换：
  - [42. 接雨水](https://programmercarl.com/0042.%E6%8E%A5%E9%9B%A8%E6%B0%B4.html) `H`

### Day 26｜总复习日
- 不刷新题
- 复盘全计划里的高频错题
- 必做：
  - 手写：双指针 / 滑动窗口 / 链表 / 二叉树 DFS+BFS / 回溯 / 一维 DP / 单调栈
  - 口述你最容易被问到的 10 题思路
  - 重新做一遍错题本里命中率最低的 3 题

## 这版计划的使用原则

- 如果当天状态一般，先保住前 3 题，第 4 题可以转题解精读。
- 如果某天出现 `4 Medium`，可以拆成两天刷：当天做 2 题，第二天补完。
- `Hard` 不要求独立秒出，重点是看懂套路，知道什么时候该用。
- 真正决定前端面试表现的，不是你“看过多少题”，而是你能不能把高频题稳定写出来、讲清楚、变种也能接住。
