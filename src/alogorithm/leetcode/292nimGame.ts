// Constraints:

// 1 <= n <= 2^31 - 1
// link :
// https://leetcode.com/problems/nim-game/

function main() {
  // input
  const n = 4;

  // excute
  console.log(canWinNim(n));
}

function canWinNim(n: number): boolean {
  return n % 4 === 0 ? false : true;
}

main();
