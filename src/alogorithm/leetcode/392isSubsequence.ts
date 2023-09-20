// Constraints:

// 0 <= s.length <= 100
// 0 <= t.length <= 10^4
// s and t consist only of lowercase English letters.

// link :
// https://leetcode.com/problems/is-subsequence/?envType=study-plan-v2&envId=top-interview-150

function main() {
  // input
  const s = "abc",
    t = "ahbgdc";

  // excute
  console.log(isSubsequence(s, t));
}

function isSubsequence(s: string, t: string): boolean {
  if (s.length === 0) return true;

  let answer = false;
  let sIdx = 0;

  // t의 끝까지 갓을때, s가 다
  for (let i = 0; i < t.length; i++) {
    const sC = s[sIdx];
    if (sC === t[i]) {
      sIdx++;
    }

    if (sIdx === s.length) {
      answer = true;
      break;
    }
  }
  return answer;
}

// 1st , border case s = '' t = ''
main();
