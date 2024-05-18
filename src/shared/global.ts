import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}

  /* 아래에 추가적으로 적용할 전역 스타일 작성 */
  @font-face {
    font-family: 'Pretendard';
    font-weight: 300;
    src: url('./assets/fonts/Pretendard-Light.woff') format('woff'),
  }
  @font-face {
    font-family: 'Pretendard';
    font-weight: 400;
    src: url('./assets/fonts/Pretendard-Light.woff') format('woff'),
  }
  @font-face {
    font-family: 'Pretendard';
    font-weight: 500;
    src: url('./assets/fonts/Pretendard-Medium.woff') format('woff'),
  }
  @font-face {
    font-family: 'Pretendard';
    font-weight: 600;
    src: url('./assets/fonts/Pretendard-Bold.woff') format('woff'),
  }
  @font-face {
    font-family: 'Pretendard';
    font-weight: 800;
    src: url('./assets/fonts/Pretendard-ExtraBold.woff') format('woff'),
  }
  @font-face {
    font-family: 'Pretendard';
    font-weight: 900;
    src: url('./assets/fonts/Pretendard-Black.woff') format('woff'),
  }
  :root {
    --point: #6E44FF;
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
    font-family: "Pretendard";
    font-weight: 400;
    letter-spacing: -0.02px;
    font-size: 16px;
    line-height: 1.5;
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
  .title {
    font-size: 30px;
    font-weight: 700;
    margin-top: 30px;
    color: #171717;
  }
  .subtitle {
    font-size: 14px;
    font-weight: 300;
    color: #18181B;
  }
  .desc {
    color: #6B7280;
    font-size: 16px;
    margin-top: 16px;
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
    font-size: 0.875rem;
    line-hight: 1.25rem;
    font-weight: 500;
    color: rgb(249 250 251);
    padding: 0.75rem 2rem;
    &:focus {
      --tw--shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
      --tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
      box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    }
  }
  .shadow {
    --tw--shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    --tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  }

`;
