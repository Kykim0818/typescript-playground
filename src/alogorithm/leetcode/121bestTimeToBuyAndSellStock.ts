// Constraints:

// 1 <= prices.length <= 10^5
// 0 <= prices[i] <= 10^4

// link :
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

function main() {
  // input
  const prices = [7, 1, 5, 3, 6, 4];

  // excute
  console.log(maxProfit(prices));
}

// input이 10만개 라서 모든 경우를 n2으로 돌면 너무 느림
function maxProfit(prices: number[]): number {
  if (prices.length < 1) return 0;

  let lowPrice = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    // 저점 값과 이익값을 기록하면서 순회
    // 이익값이 다돌떄까지 0 이면 0
    // 저점값은 현재 값보다 낮은값이면 교체 , 이익값은 저점값과 현재 값의 차이로 저장
    maxProfit = Math.max(prices[i] - lowPrice, maxProfit);
    lowPrice = Math.min(lowPrice, prices[i]);
  }
  return maxProfit;
}

main();
