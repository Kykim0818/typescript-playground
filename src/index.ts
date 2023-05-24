// import { decrypt } from "./decryption/decryption";

import { dec } from "./crypto/decryption";
import { enc } from "./crypto/encryption";

// 암호화 키
const key = Buffer.from("00112233445566778899aabbccddeeff", "hex");
// number used once 매번 바꿔 사용하는 번호
const nonce = Buffer.from("112233445566778899aabbcc", "hex");
// Addtional Associated Data : https://cloud.google.com/kms/docs/additional-authenticated-data
const aad = Buffer.from("0102030405060708090a0b0c0d0e", "hex");
// 평문 데이터
const plaintext = "abcde";

// 키 정보 출력
console.log(
  `key: ${key.toString("hex")}, nonce: ${nonce.toString(
    "hex"
  )}, aad: ${aad.toString("hex")}`
);

// 암호화 함수 호출
const [ciphertext, tag] = enc(key, nonce, aad, plaintext);
const replaintext = dec(key, nonce, aad, ciphertext, tag);

// 암호화 결과 출력
console.log(
  `암호화: ${ciphertext.toString("hex")}, 태그: ${tag.toString("hex")}`
);
console.log(`원본: ${plaintext}, 복호화: ${replaintext}`);
