// Constraints:
// 1 <= nums.length <= 10
// -10 <= nums[i] <= 10

// link :
// https://leetcode.com/problems/subsets-ii/?envType=daily-question&envId=2023-09-03

function main() {
  // input
  const nums = [0, 1, 1];

  // excute
  console.log(subsetsWithDup(nums));
}

function subsetsWithDup(nums: number[]): number[][] {
  // permutation
  let ans = [];
  for (let i = 0; i <= nums.length; i++) {
    let list: number[][] = [];
    let res: number[] = [];
    permutate(0, i, nums, res, list);
    if (list.length === 1) {
      ans.push(...list);
      continue;
    }
    // list 안에서 중복제거
    const tmp = list.map((value) => {
      const sortValue = value.sort((a, b) => a - b);
      return sortValue.join(",");
    });
    const set = new Set(tmp);
    const sep = [...set].map((value) => value.split(","));
    const tmpArr = [];
    for (let j = 0; j < sep.length; j++) {
      tmpArr.push(sep[j].map((value) => Number(value)));
    }
    ans.push(...tmpArr);
  }
  return ans;
}

function permutate(
  idx: number,
  count: number,
  arr: number[],
  res: number[],
  ans: number[][]
) {
  if (res.length === count) {
    ans.push([...res]);
    return;
  }
  if (idx > arr.length) return;
  if (res.length === count) return;

  for (let i = idx; i < arr.length; i++) {
    res.push(arr[i]);
    permutate(i + 1, count, arr, res, ans);
    res.pop();
  }
}

main();
