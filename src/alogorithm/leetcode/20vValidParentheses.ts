// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.
// https://leetcode.com/problems/valid-parentheses/

// 1
function main() {
  const s = "([{}])";
  //  ([)]

  console.log(isValid(s));
}

function isValid(s: string): boolean {
  let ans = true;
  const arr = [];
  for (let i = 0; i < s.length; i++) {
    const cc = s[i];
    if (cc === "(" || cc === "{" || cc === "[") {
      arr.push(cc);
    } else {
      // ) } ]
      const popC = arr.pop();
      if (cc === ")" && popC !== "(") {
        ans = false;
        break;
      }
      if (cc === "}" && popC !== "{") {
        ans = false;
        break;
      }
      if (cc === "]" && popC !== "[") {
        ans = false;
        break;
      }
    }
  }
  if (arr.length !== 0) ans = false;
  return ans;
}

main();
