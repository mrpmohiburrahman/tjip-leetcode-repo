const getStartEndIndex = (str) => {
  console.log(str);
  for (let index = 0; index < str.length; index++) {
    if (str[index] === `]`) {
      console.log(index - 1);
      return { endIndex: index - 1 };
    }
  }
};

const getMultipliedStringArray = (str, numberOfMultiplications) => {
  let strArray = str.split("");
  let result: any = [];
  for (let index = 0; index < numberOfMultiplications; index++) {
    result.push(...strArray);
  }
  return result;
};

function decodeString(s: string): string {
  let result: any = [];
  let sArray = s.split("");

  // store all the characters untill any number detected
  for (let index = 0; index < sArray.length; index++) {
    //   @ts-ignore
    if (isNaN(sArray[index])) {
      console.log(sArray[index]);
      result.push(sArray[index]);
    }
    //   @ts-ignore
    else if (!isNaN(sArray[index])) {
      let numberOfMultiplications = sArray[index];
      let startIndex = index + 2;
      console.log(startIndex);
      let { endIndex }: any = getStartEndIndex(sArray.slice(index + 2));
      console.log(endIndex + startIndex);
      let multipliedStringArray: any = getMultipliedStringArray(
        s.slice(startIndex, endIndex + startIndex + 1),
        numberOfMultiplications
      );
      console.log(multipliedStringArray);
      index = endIndex + startIndex + 1;
      result.push(...multipliedStringArray);
    }
  }
  console.log(result.join(""));
  // multiply and store on result string
  return result.join("");
  return ``;
}

// console.log(decodeString("3[a]2[bc]"));
// Input: s = "3[a]2[bc]"
// Output: "aaabcbc"

// Input: s = "3[a2[c]]"
// Output: "accaccacc"

console.log(decodeString("2[abc]3[cd]ef"));
// Input: s = "2[abc]3[cd]ef"
// Output: "abcabccdcdcdef"
