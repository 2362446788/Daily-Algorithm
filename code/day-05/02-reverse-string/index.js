// leetcode：https://leetcode.cn/problems/reverse-string/
// 代码随想录：https://programmercarl.com/0344.%E5%8F%8D%E8%BD%AC%E5%AD%97%E7%AC%A6%E4%B8%B2.html
// 时间复杂度：O(n)
// 空间复杂度：O(1)
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    // 使用双指针，头尾指针往中间移动，然后交换位置，循环结束位置为 i < j，因为 i = j 没有意义，同一个值不需要交换
    for(let i = 0, j = s.length - 1; i < j; i++, j--) {
        let temp = s[i];
        s[i] = s[j];
        s[j] = temp;
    }
};
