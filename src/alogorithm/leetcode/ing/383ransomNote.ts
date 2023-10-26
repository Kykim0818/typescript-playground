// Constraints:

// 1 <= ransomNote.length, magazine.length <= 10^5
// ransomNote and magazine consist of lowercase English letters.

// link :
// https://leetcode.com/problems/ransom-note/?envType=study-plan-v2&envId=top-interview-150

function main() {
  // input
  const ransomNote = "aa",
    magazine = "aab";

  // excute
  console.log(canConstruct(ransomNote, magazine));
}

function canConstruct(ransomNote: string, magazine: string): boolean {
  let answer = true;
  const magazineMap = new Map<string, number>();
  for (let i = 0; i < magazine.length; i++) {
    let cc = magazine[i];
    if (magazineMap.has(cc)) {
      magazineMap.set(cc, (magazineMap.get(cc) ?? 0) + 1);
    } else {
      magazineMap.set(cc, 1);
    }
  }
  //
  for (let i = 0; i < ransomNote.length; i++) {
    let cc = ransomNote[i];
    if (magazineMap.has(cc) && (magazineMap.get(cc) ?? 1) > 0) {
      magazineMap.set(cc, (magazineMap.get(cc) ?? 1) - 1);
    } else {
      answer = false;
      break;
    }
  }
  return answer;
}

main();
