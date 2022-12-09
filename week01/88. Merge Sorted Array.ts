/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let mergArrayLength = m + n - 1;
  let firstArrayPos = m - 1;
  let secondArrayPos = n - 1;
  while (secondArrayPos >= 0) {
    if (nums1[firstArrayPos] > nums2[secondArrayPos]) {
      nums1[mergArrayLength] = nums1[firstArrayPos];
      firstArrayPos--;
    } else {
      nums1[mergArrayLength] = nums2[secondArrayPos];
      secondArrayPos--;
    }
    mergArrayLength--;
  }
}

// merge([1, 2, 3, 0, 0, 0], 3, [4, 5, 6], 3);
merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
