function longestCommonPrefix(strs: string[]): string {
  strs.sort();
  //   console.log(strs);
  let firstString = strs[0];
  let lastString = strs[strs.length - 1];
  let result: any = [];
  let highestRang =
    firstString.length > lastString.length
      ? lastString.length
      : firstString.length;
  for (let index = 0; index < highestRang; index++) {
    if (firstString[index] === lastString[index]) {
      result.push(firstString[index]);
    } else break;
  }
  return result.join("");
}

console.log(longestCommonPrefix(["reflower", "flow", "flight"]));
// expected c

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

console.log(longestCommonPrefix(["dog", "racecar", "car"]));
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
