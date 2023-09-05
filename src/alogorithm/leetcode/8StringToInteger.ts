// Constraints:
// 0 <= s.length <= 200
// s consists of English letters (lower-case and upper-case), digits (0-9), ' ', '+', '-', and '.'.

// link :
// https://leetcode.com/problems/string-to-integer-atoi/

function main() {
  // input
  const s = "   -42";
  // excute
  console.log(myAtoi(s));
}
Number.MAX_SAFE_INTEGER;
function myAtoi(s: string): number {
  // 1
  // Read in and ignore any leading whitespace.
  let ret = s.trim();
  // 2
  // Check if the next character (if not already at the end of the string) is '-' or '+'.
  // Read this character in if it is either.
  // This determines if the final result is negative or positive respectively.
  // Assume the result is positive if neither is present.
  let plus = true;
  let startIdx = 0;
  if (ret.length > 1) {
    if (ret[0] === "-") {
      plus = false;
      startIdx = 1;
    }
    if (ret[0] === "+") {
      startIdx = 1;
    }
  }
  // 3
  // Read in next the characters until the next non-digit character or the end of the input is reached.
  // The rest of the string is ignored.
  let tmpString = "";
  for (let i = startIdx; i < ret.length; i++) {
    if (ret[i] === "" || isNaN(Number(ret[i]))) break;
    tmpString = tmpString.concat(ret[i]);
  }
  // 4
  // Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32).
  // If no digits were read, then the integer is 0. Change the sign as necessary (from step 2).
  let ans = Number(tmpString);
  if (plus === false) ans = ans *= -1;
  // 5
  // If the integer is out of the 32-bit signed integer range [-2^31, 2^31 - 1],
  // then clamp the integer so that it remains in the range.
  // Specifically, integers less than -2^31 should be clamped to -2^31, and integers greater than 2^31 - 1 should be clamped to 2^31 - 1.
  if (ans > Math.pow(2, 31) - 1) return Math.pow(2, 31) - 1;
  if (ans < -1 * Math.pow(2, 31)) return Math.pow(2, 31) * -1;

  return ans;
}

main();
