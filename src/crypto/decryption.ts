import { createDecipheriv } from "crypto";
import { readFileSync } from "fs";

export function dec(
  key: Buffer,
  nonce: Buffer,
  aad: Buffer,
  ciphertext: Buffer,
  tag: Buffer
) {
  console.log("ciphertext", ciphertext);
  // 암호화 객체 생성 (key와 nonce 추가)
  const decipher = createDecipheriv("aes-128-gcm", key, nonce, {
    authTagLength: 16,
  });

  // 태그 추가
  decipher.setAuthTag(tag);
  // aad 추가
  decipher.setAAD(aad, {
    plaintextLength: ciphertext.length,
  });

  // 복호화 시작!
  const receivedPlaintext = decipher.update(ciphertext);

  try {
    // 복호화 완료 - 더 이상 복호화 할 수 없음.
    decipher.final();
    return receivedPlaintext;
  } catch (err) {
    console.error("Authentication failed!");
    return;
  }
}

// Prints: some clear text data
