// Constraints:

// 1 <= arr.length <= 10^4
// 0 <= arr[i] <= 9

// link :
// https://leetcode.com/problems/duplicate-zeros/description/

function main() {
  // input
  const arr = [1, 0, 2, 3, 0, 4, 5, 0];

  // excute
  console.log(duplicateZeros(nums));
}
// 0 이 나오면 오른쪽에 0을 추가해라 길이는 고정
/**
 *
 * 밀어 내기를 해야함
 *
 * ----
 * 배열 길이를 javascript 배열의 length property를 조정해버려서 자른것 처럼 할수도 있음
 *
 */
function duplicateZeros(arr: number[]): void {
  const fixedLength = arr.length;
  for (let i = 0; i < arr.length; i++) {
    if (i >= fixedLength - 1) {
      arr.splice(fixedLength);
      break;
    }
    if (arr[i] === 0) {
      arr.splice(i + 1, 0, 0);
      i++;
    }
  }
}

main();
