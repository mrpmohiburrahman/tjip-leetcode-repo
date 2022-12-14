const getIsMatched = (tempArray, needleArray) => {
  //   console.log(tempArray);
  //   console.log(needleArray);

  //   console.log(tempArray.length);
  //   console.log(needleArray.length);

  if (tempArray.length !== needleArray.length) return false;
  for (let index = 0; index < tempArray.length; index++) {
    if (tempArray[index] !== needleArray[index]) return false;
  }
  return true;
};

const strStr = (haystack: string, needle: string): number => {
  let haystackArray = haystack.split("");
  let needleArray = needle.split("");
  for (let index = 0; index < haystackArray.length; index++) {
    if (haystackArray[index] === needleArray[0]) {
      let tempArray = haystackArray.slice(index, index + needleArray.length);
      //   console.log(tempArray);

      let isMatched = getIsMatched(tempArray, needleArray);
      if (isMatched) return index;
      //   console.log(isMatched);
    }

    // console.log(index);
  }
  return -1;
};

console.log(strStr("mississippi", "issip"));
// expected 4

console.log(strStr("sadbutsad", "sad"));
// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.

console.log(strStr("leetcode", "leeto"));
// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.
