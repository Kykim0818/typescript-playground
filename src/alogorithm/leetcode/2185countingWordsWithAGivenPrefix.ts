// Constraints:

// 1 <= words.length <= 100
// 1 <= words[i].length, pref.length <= 100
// words[i] and pref consist of lowercase English letters.

// link :
// https://leetcode.com/problems/counting-words-with-a-given-prefix/

function main() {
  // input
  const words = ["pay", "attention", "practice", "attend"],
    pref = "at";

  // excute
  console.log(prefixCount(words, pref));
}

function prefixCount(words: string[], pref: string): number {
  let ans = 0;
  words.forEach((word) => {
    if (pref.length > word.length) return;
    const wordSlice = word.substring(0, pref.length);
    if (pref === wordSlice) ans++;
  });
  return ans;
}

main();
