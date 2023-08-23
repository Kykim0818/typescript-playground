// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.

// link :
// https://leetcode.com/problems/longest-common-prefix/

function main() {
  // input
  const strs = ["flower", "flow", "flight"];

  // excute
  console.log(longestCommonPrefix2(strs));
}

function longestCommonPrefix(strs: string[]): string {
  if (strs.length <= 0) return "";
  let prefix = "";

  let minStr = strs[0];
  // 제일 짧은 단어 찾기
  for (let i = 1; i < strs.length; i++) {
    if (minStr.length > strs[i].length) minStr = strs[i];
  }

  //
  for (let i = 0; i < minStr.length; i++) {
    const compareC = minStr[i];
    let includeFlag = true;
    for (let j = 0; j < strs.length; j++) {
      if (compareC !== strs[j][i]) {
        includeFlag = false;
        break;
      }
    }
    if (includeFlag === false) break;
    prefix.concat(compareC);
  }

  return prefix;
}

main();

// 트라이 구조를 통해 풀어보려고
function longestCommonPrefix2(strs: string[]): string {
  if (strs.length <= 0) return "";
  //
  let prefix = "";
  let minStr = strs[0];
  let noInput = false;
  const newTrie = trie();
  strs.forEach((str) => {
    if (minStr.length > str.length) minStr = str;
    if (str === "") noInput = true;
    newTrie.insert(str);
  });
  if (noInput) return prefix;

  let node = newTrie.root;
  while (node.children.size === 1) {
    const nextNode = node.children.get(node.children.keys().next().value);
    console.log(nextNode);
    // if (nextNode?.count !== strs.length) break;
    prefix = prefix.concat(nextNode!.value);
    node = nextNode!;
  }
  return prefix;
}

type CNode = {
  value: string;
  count: number;
  children: Map<string, CNode>;
  increaseCount: () => void;
};

const node = (initValue = "", initCount = 0): CNode => {
  const value = initValue;
  let count = initCount;
  const children = new Map<string, CNode>();
  const increaseCount = () => {
    count++;
  };

  return {
    value,
    count,
    children,
    increaseCount,
  };
};

const trie = () => {
  const root = node();

  const insert = (value: string) => {
    // flo
    let currentNode = root;
    for (const char of value) {
      // map
      if (!currentNode.children.has(char)) {
        currentNode.children.set(char, node(currentNode.value + char, 1));
      } else {
        currentNode.children.get(char)!.increaseCount();
      }
      currentNode = currentNode.children.get(char)!;
    }
  };

  const has = (value: string) => {
    let currentNode = root;
    for (const char of value) {
      if (currentNode.children.has(char) === false) {
        return false;
      }
      currentNode = currentNode.children.get(char)!;
    }
    return true;
  };

  return {
    root,
    insert,
    has,
  };
};
