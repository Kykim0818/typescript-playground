// Constraints:

// 1 <= name.length, typed.length <= 1000
// name and typed consist of only lowercase English letters.
// https://leetcode.com/problems/long-pressed-name/

// name =
// "alex"
// typed =
// "aaleelx"

function main() {
  console.log(isLongPressedName("alex", "aaleex"));
}

function isLongPressedName(name: string, typed: string): boolean {
  // name 과 type을 처리한게 같으면 true
  if (compare(name, typed)) return true;
  return false;
}

function compare(name: string, typed: string): boolean {
  let res = true;
  let typedIdx = 0;
  for (let i = 0; i < name.length; i++) {
    const nameC = name[i];

    if (typedIdx > typed.length - 1) {
      res = false;
      break;
    }

    const typedC = typed[typedIdx];
    //
    if (nameC !== typedC) {
      if (typedIdx === 0) {
        res = false;
        break;
      }

      if (typed[typedIdx - 1] !== typed[typedIdx]) {
        res = false;
        break;
      } else {
        // 같으면 생략처리 이후 같은게 나올떄까지 비교해줌
        let tmpIdx = typedIdx;
        let flag = false;
        while (tmpIdx < typed.length) {
          tmpIdx++;
          if (typed[tmpIdx - 1] !== typed[tmpIdx] && nameC !== typed[tmpIdx]) {
            break;
          }
          if (nameC === typed[tmpIdx]) {
            typedIdx = tmpIdx;
            flag = true;
            break;
          }
        }

        if (flag === false) {
          res = false;
          break;
        }
      }
    }
    typedIdx++;
  }

  // 초과처리
  if (res === true) {
    const lastTypedC = typed[typedIdx - 1];
    while (typedIdx < typed.length) {
      if (lastTypedC !== typed[typedIdx]) {
        res = false;
        break;
      }
      typedIdx++;
    }
  }

  return res;
}

main();
