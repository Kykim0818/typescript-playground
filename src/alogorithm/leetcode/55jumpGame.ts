// Constraints:

// 1 <= nums.length <= 10^4
// 0 <= nums[i] <= 10^5

// link :
// https://leetcode.com/problems/jump-game/

function main() {
  // input
  const nums = [2, 3, 1, 1, 4];

  // excute
  console.log(canJump(nums));
}

function canJump(nums: number[]): boolean {
  let requireMaxJump = 1;
  let answer = true;
  if (nums.length === 1) return true;
  for (let i = nums.length - 2; i >= 0; i--) {
    //
    if (nums[i] < requireMaxJump) {
      requireMaxJump++;
    } else {
      requireMaxJump = 1;
    }

    if (i === 0) {
      answer = nums[i] >= requireMaxJump;
    }
  }
  return answer;
}
main();
