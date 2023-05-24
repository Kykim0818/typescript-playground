import { createCipheriv } from "crypto";

//암호화 함수
export function enc(
  key: Buffer,
  nonce: Buffer,
  aad: Buffer,
  plaintext: string
) {
  // aes 128 ccm 암호화 객체 생성 TAG는 16바이트
  const cipher = createCipheriv("aes-128-gcm", key, nonce, {
    authTagLength: 16,
  });
  console.log("plain", plaintext);
  // aad 추가
  cipher.setAAD(aad, {
    plaintextLength: Buffer.byteLength(plaintext),
  });

  // 평문 암호화
  const ciphertext = cipher.update(plaintext, "utf8");

  // 암호화 완료 - 이 이후로는 더이상 이 암호화 객체를 사용할 수 없음
  cipher.final();

  // 최종 암호화 TAG(MAC) 값 얻기
  const tag = cipher.getAuthTag();
  return [ciphertext, tag];
}
