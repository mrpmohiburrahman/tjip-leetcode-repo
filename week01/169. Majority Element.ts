function majorityElement(nums: number[]): number {
  nums.sort((a, b) => a - b);
  return nums[Math.floor(nums.length / 2)];
}

majorityElement([2, 2, 1, 1, 1, 2, 2]);
// Input: nums = [3,2,3]
// Output: 3

// Input: nums = [2, 2, 1, 1, 1, 2, 2];
// Output: 2;
