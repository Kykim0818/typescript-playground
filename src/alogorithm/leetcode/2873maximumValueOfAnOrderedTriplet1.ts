// Constraints:

// 3 <= nums.length <= 100
// 1 <= nums[i] <= 10^6

// link :
// https://leetcode.com/problems/maximum-value-of-an-ordered-triplet-i/description/

function main() {
  // input
  const nums = [12, 6, 1, 2, 7];

  // excute
  console.log(maximumTripletValue(nums));
}

function maximumTripletValue(nums: number[]): number {
  if (nums.length === 3) return getTripletValue(nums);
  let answer = 0;
  for (let p = 0; p < nums.length - 2; p++) {
    for (let q = p + 1; q < nums.length - 1; q++) {
      for (let r = q + 1; r < nums.length; r++) {
        answer =
          answer > getTripletValue([nums[p], nums[q], nums[r]])
            ? answer
            : getTripletValue([nums[p], nums[q], nums[r]]);
      }
    }
  }
  return answer;
}

function getTripletValue(triplet: number[]) {
  const value = (triplet[0] - triplet[1]) * triplet[2];
  if (value <= 0) return 0;
  return value;
}
main();
