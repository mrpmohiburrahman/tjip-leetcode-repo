function singleNumber(nums: number[]): any {
  let hashTable: any = {};
  nums.forEach((item) => {
    if (item in hashTable) hashTable[item] += 1;
    else hashTable[item] = 1;
  });
  for (const item in hashTable) {
    if (hashTable[item] === 1) return parseInt(item);
  }
  //   hashTable;
  //   return nums.reduce((prev, curr) => prev ^ curr);
  //   return 0;
}
console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([4, 1, 2, 1, 2]));
console.log(singleNumber([1]));

// Input: nums = [2,2,1]
// Output: 1;

// Input: nums = [4,1,2,1,2]
// Output: 4

// Input: nums = [1]
// Output: 1
