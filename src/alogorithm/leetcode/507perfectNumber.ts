// Constraints:

// 1 <= num <= 10^8

// link :
// https://leetcode.com/problems/perfect-number/

function main() {
  // input
  const num = 28;

  // excute
  console.log(checkPerfectNumber(num));
}

function checkPerfectNumber(num: number): boolean {
  // 숫자 자체 제외니까 false
  if (num === 1) return false;

  let sum = 1;
  // 약수를 전부 구해서,
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      sum += i;
      sum += num / i;
    }
  }
  if (sum === num) return true;
  return false;
}

main();
