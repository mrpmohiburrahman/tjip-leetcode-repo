function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  let firstArrry = s.split("").sort();
  let secondArrry = t.split("").sort();

  console.log(firstArrry);
  console.log(secondArrry);
  for (let index = 0; index < firstArrry.length; index++) {
    if (firstArrry[index] !== secondArrry[index]) return false;
  }

  return true;
}
// console.log(isAnagram("anagram", "nagaram"));
// Input: s = "anagram", t = "nagaram"
// Output: true

// console.log(isAnagram("rat", "car"));
// Input: s = "rat", t = "car"
// Output: false
