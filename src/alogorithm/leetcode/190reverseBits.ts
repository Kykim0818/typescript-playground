// Constraints:
// The input must be a binary string of length 32

// link :
// https://leetcode.com/problems/reverse-bits/

function main() {
  // input
  const n = 43261596;

  // excute
  console.log(reverseBits(n));
}

function reverseBits(n: number): number {
  // 2진수 32비트 변환
  const binary = n.toString(2);
  // 뒤집기
  let reverseBinary = "";
  for (let i = 0; i <= 31; i++) {
    if (binary[binary.length - 1 - i]) {
      reverseBinary = reverseBinary + binary[binary.length - 1 - i];
    } else {
      reverseBinary = reverseBinary + "0";
    }
  }
  // 다시 10진수 변환
  return parseInt(reverseBinary, 10);
}

main();

// 32비트의 부호없는 정수를 뒤집어라
