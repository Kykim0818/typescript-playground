// Constraints:

// 1 <= s.length <= 10^4
// s consists of only English letters and spaces ' '.
// There will be at least one word in s.

// link :
// https://leetcode.com/problems/length-of-last-word/

function main() {
  // input
  const s = "Hello World";

  // excute
  console.log(lengthOfLastWord(s));
}

function lengthOfLastWord(s: string): number {
  const stringArr = s.trim().split(" ");

  return stringArr[stringArr.length - 1].length;
}

main();
