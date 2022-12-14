function groupAnagrams(strs: string[]): string[][] {
  strs.sort();
  // console.log(strs);

  let hash: object = {};
  strs.forEach((item: string) => {
    let sortedItem = item.split("").sort().join("");

    if (hash.hasOwnProperty(sortedItem)) {
      hash[sortedItem].push(item);
    } else {
      hash[sortedItem] = [];
      hash[sortedItem].push(item);
    }
  });
  let result: any = [];
  for (const key in hash) {
    result.push(hash[key]);
  }
  // console.log(hash);
  // console.log(result);

  return result;
}

// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// console.log(groupAnagrams([""]));
// Input: strs = [""]
// Output: [[""]]

console.log(groupAnagrams(["12", "21", "16", "80"]));
// console.log(groupAnagrams(["a"]));
// Input: strs = ["a"]
// Output: [["a"]]
