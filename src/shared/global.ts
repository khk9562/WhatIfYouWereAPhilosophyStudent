import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}

  /* 아래에 추가적으로 적용할 전역 스타일 작성 */
  /* 서체는 public/index.html에서 불러오는 Pretendard Variable(다이내믹 서브셋)을 쓴다 */
  :root {
    --point: #6E44FF;
    --point-soft: #F4F0FF;

    /* 글자 색: 제목 > 본문 > 보조 */
    --text-strong: #171717;
    --text-body: #374151;
    --text-muted: #6B7280;

    /* 글자 위계: 크기 / 굵기 / 행간 */
    --font-display: clamp(1.625rem, 6.4vw, 2rem); /* 화면 제목, 결과 이름 */
    --font-heading: 1.125rem; /* 질문 */
    --font-body: 1rem; /* 설명 본문 */
    --font-option: 0.9375rem; /* 선택지, 버튼 */
    --font-label: 0.8125rem; /* 라벨, 페이지 번호 */

    --weight-display: 800;
    --weight-heading: 700;
    --weight-strong: 600;
    --weight-medium: 500;
    --weight-regular: 400;

    --leading-tight: 1.3;
    --leading-normal: 1.5;
    --leading-relaxed: 1.7;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body {
    background-color: #efefef;
  }
  html, body, #root {
    font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", sans-serif;
    font-weight: var(--weight-regular);
    font-size: 16px;
    line-height: var(--leading-normal);
    letter-spacing: -0.01em;
    color: var(--text-body);
    -webkit-font-smoothing: antialiased;
    /* 한글이 단어 중간에서 끊기지 않게 한다 */
    word-break: keep-all;
    overflow-wrap: break-word;
  }
  button, input, textarea {
    font-family: inherit;
    letter-spacing: inherit;
  }
  #root {
    max-width: 700px;
    min-height: 100vh;
    margin: 0 auto;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
  }
  .eyebrow {
    font-size: var(--font-label);
    font-weight: var(--weight-strong);
    line-height: var(--leading-normal);
    letter-spacing: 0.04em;
    color: var(--point);
  }
  .title {
    font-size: var(--font-display);
    font-weight: var(--weight-display);
    line-height: var(--leading-tight);
    letter-spacing: -0.03em;
    margin-top: 12px;
    color: var(--text-strong);
    text-align: center;
  }
  .subtitle {
    font-size: var(--font-label);
    font-weight: var(--weight-medium);
    color: var(--text-muted);
  }
  .desc {
    color: var(--text-body);
    font-size: var(--font-body);
    line-height: var(--leading-relaxed);
    margin-top: 16px;
  }
  .text-center {
    text-align: center;
  }
  a {
    text-decoration: none;
    color: #000;
  }
  button {
    border: none;
    background: none;
    box-shadow: none;
  }
  .btn {
    background-color: var(--point);
    text-align: center;
    border-radius: 10px;
    font-size: var(--font-option);
    line-height: 1.25rem;
    font-weight: var(--weight-strong);
    color: rgb(249 250 251);
    padding: 0.75rem 2rem;
    &:focus {
      --tw--shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
      --tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
      box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    }
  }
  .btn-outline {
    background-color: #fff;
    color: var(--point);
    box-shadow: inset 0 0 0 1px var(--point);
    cursor: pointer;
    &:disabled {
      opacity: 0.5;
      cursor: default;
    }
  }
  .btn-row .btn {
    padding: 0.75rem 1rem;
  }
  .shadow {
    --tw--shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    --tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  }

`;
