/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let zeroPointer = 0;
  let fastPointer = 1;
  for (let index = fastPointer; index < nums.length; index++) {
    if (nums[zeroPointer] === 0) {
      if (nums[index] !== 0) {
        [nums[zeroPointer], nums[index]] = [nums[index], nums[zeroPointer]]; // swap
        zeroPointer++;
      } else if (nums[index] === 0) {
        continue;
      }
    } else {
      zeroPointer++;
    }
  }
}

moveZeroes([0, 1, 0, 3, 12]);
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
