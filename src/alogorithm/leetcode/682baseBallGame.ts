// Constraints:

// 1 <= operations.length <= 1000
// operations[i] is "C", "D", "+", or a string representing an integer in the range [-3 * 104, 3 * 104].
// For operation "+", there will always be at least two previous scores on the record.
// For operations "C" and "D", there will always be at least one previous score on the record.

// link :
// https://leetcode.com/problems/baseball-game/

function main() {
  // input
  const ops = ["5", "2", "C", "D", "+"];

  // excute
  console.log(calPoints(ops));
}

function calPoints(operations: string[]): number {
  let records: number[] = [];
  operations.forEach((op) => {
    if (op === "+") {
      records.push(records[records.length - 1] + records[records.length - 2]);
    } else if (op === "D") {
      records.push(records[records.length - 1] * 2);
    } else if (op === "C") {
      records.pop();
    } else {
      records.push(Number(op));
    }
  });

  let ans = 0;
  records.forEach((record) => (ans += record));
  return ans;
}

main();
