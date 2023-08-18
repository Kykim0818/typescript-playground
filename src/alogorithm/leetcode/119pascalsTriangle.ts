// Constraints:
// 3 <= nums.length <= 3000
// -105 <= nums[i] <= 105

// link :
// https://leetcode.com/problems/3sum/description/

function main() {
  // input
  const rowIndex = 3;
  // excute
  console.log(getRow(rowIndex));
}

function getRow(rowIndex: number): number[] {
  const rows = [[1]];
  for (let row = 1; row <= rowIndex; row++) {
    const preRow = rows[row - 1];
    const curRow = [];
    for (let i = 0; i <= row; i++) {
      if (i === 0 || i === row) {
        curRow.push(1);
      } else {
        curRow.push(preRow[i - 1] + preRow[i]);
      }
    }
    rows.push(curRow);
  }
  return rows[rowIndex];
}

main();
