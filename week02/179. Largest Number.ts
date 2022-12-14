function largestNumber(nums: number[]): string {
  if (!nums) return ``;
  if (nums.length === 1) return nums[0].toString();

  // nums.sort((a, b) => a - b).reverse();

  let result = nums[0].toString();

  for (let index = 1; index < nums.length; index++) {
    if (result + nums[index] > nums[index] + result) {
      result = result + nums[index];
    } else {
      result = nums[index] + result;
    }
  }

  // return nums.sort((a, b) => b + "" + a - (a + "" + b))[0] === 0
  //   ? "0"
  //   : nums.sort((a, b) => b + "" + a - (a + "" + b)).join("");

  return result;
}

console.log(largestNumber([10, 2, 9, 39, 17]));
// expected 93921710

// console.log(largestNumber([10, 2]));
// Input: nums = [10, 2];
// Output: "210";

// console.log(largestNumber([1, 2, 3, 4, 5]));
// console.log(largestNumber([3, 30, 34, 5, 9]));

// Input: nums = [3,30,34,5,9]
// Output: "9534330"
