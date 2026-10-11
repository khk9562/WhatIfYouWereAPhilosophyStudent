import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}

  /* 아래에 추가적으로 적용할 전역 스타일 작성 */
  /* 서체는 public/index.html에서 불러오는 Pretendard Variable(다이내믹 서브셋)을 쓴다 */
  :root {
    --point: #6E44FF;
    --point-soft: #F4F0FF;
    --highlight: #FFE066; /* 보라 바탕 위 강조(제목 강조 단어, 내 결과 테두리) */

    /* 글자 색: 제목 > 본문 > 보조 */
    --text-strong: #171717;
    --text-body: #374151;
    --text-muted: #6B7280;

    /* 글자 위계: 크기 / 굵기 / 행간 */
    --font-display: clamp(1.875rem, 8vw, 2.5rem); /* 화면 제목, 결과 이름 */
    --font-question: clamp(1.5rem, 6.4vw, 2rem); /* 질문 지문 */
    --font-body: 1.125rem; /* 설명 본문 */
    --font-option: 1.0625rem; /* 선택지 */
    --font-button: 1rem; /* 버튼 */
    --font-label: 0.875rem; /* 라벨, 페이지 번호 */

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
    /* 넓은 화면에서 가운데 무대 양옆에 보이는 바탕 */
    background-color: #ece6ff;
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
    border-radius: 12px;
    font-size: var(--font-button);
    line-height: 1.5rem;
    font-weight: var(--weight-strong);
    color: rgb(249 250 251);
    padding: 0.875rem 2rem;
    cursor: pointer;
    transition: transform 0.15s;
    &:active {
      transform: scale(0.97);
    }
    /* 키보드로 이동할 때만 초점 테두리를 보인다(보라 무대 위에서 잘 보이는 노랑) */
    &:focus-visible {
      outline: 3px solid var(--highlight);
      outline-offset: 3px;
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
  .btn-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    width: 100%;
    max-width: 22rem;
    margin-top: 32px;
  }
  .btn-grid .btn {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
  .btn-wide {
    grid-column: 1 / -1;
  }
  .btn-ghost {
    background-color: rgb(255 255 255 / 0.12);
    color: #fff;
    box-shadow: inset 0 0 0 1px rgb(255 255 255 / 0.55);
  }
  .btn-light {
    background-color: #fff;
    color: var(--point);
    box-shadow: 0 12px 28px -10px rgb(32 0 96 / 0.5);
  }
  /* 등장 효과. --delay로 순서를 준다 */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(18px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  @keyframes popIn {
    0% { opacity: 0; transform: scale(0.6); }
    60% { opacity: 1; transform: scale(1.06); }
    100% { opacity: 1; transform: scale(1); }
  }
  @keyframes blurIn {
    from { opacity: 0; filter: blur(10px); transform: scale(1.08); letter-spacing: 0.05em; }
    to { opacity: 1; filter: blur(0); transform: scale(1); }
  }
  @keyframes wobbleIn {
    0% { opacity: 0; transform: scale(0.4) rotate(-14deg); }
    55% { opacity: 1; transform: scale(1.08) rotate(6deg); }
    75% { transform: scale(0.97) rotate(-3deg); }
    100% { opacity: 1; transform: scale(1) rotate(0); }
  }
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-6px); }
  }
  @keyframes drift {
    0%, 100% { transform: translate(0, 0) scale(1); }
    50% { transform: translate(14px, -18px) scale(1.08); }
  }
  .fade-up, .fade-in, .pop-in, .blur-in, .wobble-in {
    animation-duration: 0.65s;
    animation-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);
    animation-fill-mode: both;
    animation-delay: var(--delay, 0ms);
  }
  .fade-up { animation-name: fadeUp; }
  .fade-in { animation-name: fadeIn; }
  .pop-in { animation-name: popIn; animation-duration: 0.7s; }
  .blur-in { animation-name: blurIn; animation-duration: 0.8s; }
  .wobble-in { animation-name: wobbleIn; animation-duration: 0.9s; }
  .float {
    animation: float 4.5s ease-in-out infinite;
    animation-delay: var(--float-delay, 0s);
  }
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation: none !important;
      transition: none !important;
    }
  }

`;
