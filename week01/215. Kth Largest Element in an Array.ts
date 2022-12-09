function findKthLargest(nums: number[], k: number): number {
  nums.sort((a, b) => b - a); //reverse sort
  return nums[k - 1];
}

// console.log(findKthLargest([3, 4, 5, 6, 7], 2));
// console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));
// Input: nums = [3,2,1,5,6,4], k = 2
// Output: 5

console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));
// Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
// Output: 4
