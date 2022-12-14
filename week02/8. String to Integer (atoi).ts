const isNumber = (char) => {
  console.log(char);
  if (char.charCodeAt(0) - 48 >= 0 && char.charCodeAt(0) - 48 <= 9) {
    return true;
  }
  return false;
};

function myAtoi(s: string): number {
  s = s.trim();

  let index = 0;
  let sign = 1;
  let num = 0;
  let max = 2 ** 31 - 1;
  let min = 2 ** 31 * -1;
  console.log(s[index]);
  if (s[index] === `-` || s[index] === `+`) {
    sign = s[index] === `-` ? -1 : 1;
    index++;
  }
  console.log(s[index]);
  console.log(isNumber(s[index]));
  while (s[index] && isNumber(s[index])) {
    num = num * 10 + (s[index].charCodeAt(0) - 48);
    console.log(num);
    index++;
  }
  num *= sign;
  console.log(num);
  return num <= min ? min : num >= max ? max : num;
}

// console.log(myAtoi("42"));
// Input: s = "42"
// Output: 42

console.log(myAtoi("   -42"));
// Input: s = "   -42"
// Output: -42

// console.log(myAtoi("4193 with words"));
// Input: s = "4193 with words"
// Output: 4193
