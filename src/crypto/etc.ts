import { readFileSync } from "fs";

// 버퍼로 변환하기
function getByteArraysFromFile(
  path: string,
  ivLen: number
): { iv: Int8Array; data: Int8Array } | null {
  try {
    const fileData = readFileSync(path);

    if (fileData.length < ivLen) {
      console.error("File is too small.");
      return null;
    }

    const iv = fileData.subarray(0, ivLen);
    const data = fileData.subarray(ivLen);

    return { iv: new Int8Array(iv), data: new Int8Array(data) };
  } catch (error) {
    console.error("Error occurred while reading the file:", error);
    return null;
  }
}
