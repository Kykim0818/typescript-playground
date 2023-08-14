// Constraints:
// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.
// https://leetcode.com/problems/two-sum/

function twoSum(nums: number[], target: number): number[] {
  let ans: number[] = [];
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j <= nums.length - 1; j++) {
      if (nums[i] + nums[j] === target) {
        ans = [i, j];
        break;
      }
    }
    if (ans.length === 2) break;
  }
  return ans;
}

const nums = [3, 2, 4];
const target = 6;

console.log(twoSum(nums, target));
