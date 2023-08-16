// Constraints:

// 1 <= name.length, typed.length <= 1000
// name and typed consist of only lowercase English letters.
// https://leetcode.com/problems/long-pressed-name/

function main() {
  console.log(isLongPressedName("alex", "aaleex"));
}

function isLongPressedName(name: string, typed: string): boolean {
  // name 과 type을 처리한게 같으면 true
  if (compare(name, typed)) return true;
  return false;
}

function compare(name: string, typed: string): boolean {
  const nameIdx = 0;
  let typedIdx = 0;
  // 끝까지 비교해서 통과하면 true 중간에 아니면 false
  for (let i = 0; i < name.length; i++) {
    const nameC = name[nameIdx];
    const typedC = typed[typedIdx];

    if (nameC === typedC) {
    }
  }
  return true;
}

main();
