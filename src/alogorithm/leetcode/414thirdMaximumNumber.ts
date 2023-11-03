// Constraints:
// 3 <= nums.length <= 3000
// -105 <= nums[i] <= 105

// link :
// https://leetcode.com/problems/3sum/description/

function main() {
  // input
  const nums = [3, 2, 1];

  // excute
  console.log(thirdMax(nums));
}

function thirdMax(nums: number[]): number {
  const distinctNumSet = new Set([...nums]);
  const distinctNums = Array.from(distinctNumSet);
  // 내림차순 sort 4 3 2 1
  distinctNums.sort((a, b) => b - a);
  if (distinctNums.length >= 3) return distinctNums[2];

  return distinctNums[0];
}

main();
