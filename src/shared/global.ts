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
      padding: 0 24px;
    
  }
  h1 {
    font-size: 30px;
    font-weight: 700;
  }
  a {
    text-decoration: none;
    color: #000;

  }
  .btn {
    background-color: #FF8427;
    max-width: 80%;
    min-width: 350px;
    height: 55px;
    line-height: 55px;
    text-align: center;
    border-radius: 10px;
    font-weight: 700;
    color: #fff;
    &:hover {
      box-shadow: 0 2px 5px 2px rgba(0,0,0,0.1);
    }
  }

`;
