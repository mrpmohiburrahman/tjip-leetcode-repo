// @ts-ignore
function isValid(s: string): boolean {
  if (!s) return false;
  let closeMap = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  let stack: any = [];

  for (let index = 0; index < s.length; index++) {
    let currItem = s[index];
    if (closeMap[currItem]) {
      let topElement = stack.length === 0 ? `#` : stack.pop();
      if (topElement !== closeMap[currItem]) return false;
    } else stack.push(currItem);
  }
  // console.log(stack);
  return stack.length === 0;
}

// Input: s = "()"
// Output: true

console.log(isValid("()[]{}"));
// Input: s = "()[]{}"
// Output: true

// Input: s = "(]"
// Output: false
