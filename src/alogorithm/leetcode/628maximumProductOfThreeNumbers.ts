// Constraints:

// 3 <= nums.length <= 10^4
// -1000 <= nums[i] <= 1000

// link :
// https://leetcode.com/problems/maximum-product-of-three-numbers/

function main() {
  // input
  const nums = [1, 2, 3];

  // excute
  console.log(maximumProduct(nums));
}

function maximumProduct(nums: number[]): number {
  /**
   * 양수 = 양수 * 양수
   *     =  음수 * 음수
   */
  if (nums.length <= 2) throw Error();
  if (nums.length === 3) return getThreeProduct(nums[0], nums[1], nums[2]);

  nums.sort((a, b) => a - b);
  //  1. 양수 * 양수 * 양수
  const numsLength = nums.length;
  let ans = getThreeProduct(
    nums[numsLength - 3],
    nums[numsLength - 2],
    nums[numsLength - 1]
  );
  //  2. 음수 * 음수 * 양수
  ans = Math.max(ans, getThreeProduct(nums[0], nums[1], nums[numsLength - 1]));

  return ans;
}

function getThreeProduct(num1: number, num2: number, num3: number) {
  return num1 * num2 * num3;
}

main();
