function twoSum(nums: number[], target: number): any {
  let hashArray: any = {};
  for (let index = 0; index < nums.length; index++) {
    let diff = target - nums[index];
    if (hashArray[diff] !== undefined) {
      return [hashArray[diff], index];
    }
    hashArray[nums[index]] = index;
  }
}

// console.log(twoSum([3, 2, 3], 6));
// console.log(twoSum([2, 7, 11, 15], 9));
// console.log(twoSum([3, 2, 4], 6));
// console.log(twoSum([3, 3], 6));

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Input: nums = [3,3], target = 6
// Output: [0,1]
