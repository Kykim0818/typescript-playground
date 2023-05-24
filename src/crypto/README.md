## 작업개요

- 사내에서 진행된 프로젝트의 기능에서 java에서 encrypt 된 부분 을 js에서 복호화해야할 필요가 생김

## 분석

- Java에서 AES-128-GCM으로 암호화, 내용에 iv를 추가로 사용 , java 라이브러리를 통해 암호화

##

- Java에서의 작업은 Byte[] 배열로 진행되어서 JS에서 어떤걸써야할지 몰랐음
- Buffer.from으로 보통 변환해서 사용
- CryptoJS에서는 AES를 지원하지만 , AES-128-gcm의 경우는 지원하지 않았음
- node.js 의 crypto module 활용

## 전개

- encrypt 부분을 분석하여 iv 위치등 파악
- Java 코드를 디버깅하여 사용되는 byte 배열이 동일하게 js 변환되는지 확인 ( 변환됨 )
- crypto.createDeCipherIv 를 활용하여 decrypt 하려고 하였으나, 서핑등 여러 방법에서는 iv , AuthTag , AAD, 등등이 필요함
- JAVA 코드롤 iv 와 AuthTag의 위치에 대해 파악하였으나 AAD에 대해서는 파악 못함
- 일반적인 예시가아닌 encrypt에 사용하는 crypto.createCipher를 활용하여 encrypt 방식과 동일하게 진행하였더니 decrypt가 됨
- 상식적으로 encrypt 를 한 결과를 다시 encrypt를 한것이 decrpyt가 되는것이 말이 되지 않으나, nodejs의 crypto에서 사용하는 방식으로 해도 동일하게 하고 AuthTag 설정과 AAD 설정 부분만 제외시에 동일하게 createCipher한 객체로 update() , final() 할경우 암호가 해독됨

- 예시코드와 공식문서조차, createCipher -> createDecipher 흐름을 타서 생각을 전혀 못함
- 미제

## 코드

- 코드의 경우 웹서핑하면서 찾은 코드를 실제 돌아가는지 검증하고, 확장하기 위해 기본 상태를 적어둠
- 이후 변형하며 사용 , 사내 암호관련 코드이므로 반영하지는 않음
