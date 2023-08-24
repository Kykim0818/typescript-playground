// Constraints:
// 3 <= nums.length <= 3000
// -105 <= nums[i] <= 105

// link :
// https://leetcode.com/problems/move-zeroes/
function main() {
  // input
  const nums = [0, 1, 0, 3, 12];

  // excute
  console.log(moveZeroes(nums));
}

/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let zeroCount = 0;
  let ans = [];
  nums.forEach((num) => {
    if (num === 0) {
      zeroCount++;
      return;
    }
    ans.push(num);
  });

  for (let i = 0; i < zeroCount; i++) {
    ans.push(0);
  }

  ans.forEach((ele, idx) => (nums[idx] = ele));
}

main();
