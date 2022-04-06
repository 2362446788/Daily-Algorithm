function removeDuplicates(nums) {
  const n = nums.length;
  // 1. 首先进行边界处理
  if (n === 0) return 0;
  // 2. 使用双指针
  let fast = 1,
    slow = 1;
  while (fast < n) {
    if (nums[fast] !== nums[fast - 1]) {
      nums[slow] = nums[fast];
      ++slow;
    }
    ++fast;
  }
  return slow;
}
