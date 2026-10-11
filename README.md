# WhatIfYouWereAPhilosophyStudent

What if you were a philosophy student at a Korean university in the 21st century? Choose some answers and get the result!

## 당신이 21세기 대한민국 대학의 철학과 학생이 된다면?!

실행 명령: npm run start

## 배포
- [fusion_game_portal](https://github.com/khk9562/fusion_game_portal)이 배포할 때 이 저장소의 `main`을 받아 함께 빌드합니다. 주소: https://khk9562.github.io/fusion_game_portal/games/philosophy/
- 포털 하위 경로에서 동작하도록 자산은 상대 경로(`"homepage": "."`)로 불러오고, 라우터 basename은 현재 주소에서 계산합니다(`src/shared/basename.ts`).

## 공유
- 결과 화면의 **이미지 저장**은 결과를 1080x1350 PNG로 그려 내려받습니다(`src/shared/resultImage.ts`).
- **공유하기**는 기기의 기본 공유 창을 열고, 지원하지 않는 브라우저에서는 링크를 복사합니다(`src/shared/share.ts`).
