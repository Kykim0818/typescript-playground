// Constraints:
// 3 <= nums.length <= 3000
// -105 <= nums[i] <= 105

// link :
// https://leetcode.com/problems/3sum/description/

function main() {
  // input
  const x = 4;

  // excute
  console.log(mySqrt(x));
}

function mySqrt(x: number): number {
  let l = 0;
  let r = x;
  let mid: number;
  let squared: number;

  while (l <= r) {
    mid = Math.floor((l + r) / 2);
    squared = mid * mid;
    if (squared === x) return mid;
    if (squared > x) r = mid - 1;
    if (squared < x) l = mid + 1;
  }
  if (squared > x) return mid - 1;
  return mid;
}

main();

// function mySqrt(x: number): number {
//   let val = 0;
//   let ans = 0;
//   for (;;) {
//     let res = val * val;
//     let resNext = (val + 1) * (val + 1);
//     if (res === x) {
//       ans = val;
//       break;
//     }

//     if (res < x && resNext > x) {
//       ans = val;
//       break;
//     }

//     val++;
//   }
//   return ans;
// }
