import React from "react";
import styled from "styled-components";

// 화면 전체를 채우는 보라 무대. 첫 화면, 질문, 결과가 같은 무대 위에 놓인다
export const Stage = styled.section<{ $quote?: boolean }>`
  position: relative;
  overflow: hidden;
  isolation: isolate;
  width: 100%;
  min-height: 100vh;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  padding: max(2.5rem, env(safe-area-inset-top)) 1.5rem
    max(1.75rem, env(safe-area-inset-bottom));
  color: #fff;
  background: radial-gradient(120% 70% at 100% 0%, #8f72ff 0%, transparent 60%),
    radial-gradient(100% 60% at 0% 100%, #5326f0 0%, transparent 65%),
    var(--point);

  /* 질문 지문 뒤에 깔리는 큰 따옴표 */
  &::before {
    content: ${({ $quote }) => ($quote ? '"\\201C"' : "none")};
    position: absolute;
    z-index: -1;
    top: -0.5rem;
    left: 0.75rem;
    font-family: Georgia, "Times New Roman", serif;
    font-size: 13rem;
    font-weight: 700;
    line-height: 1;
    color: rgb(255 255 255 / 0.12);
    pointer-events: none;
  }

  /* 페이지 번호와 아이콘을 흰색으로 */
  nav {
    margin-top: 1.75rem;
    color: rgb(255 255 255 / 0.85);
  }
  nav img {
    filter: invert(1);
  }
`;

// 천천히 떠다니는 배경 방울
const Bubble = styled.span<{ $size: number; $top: string; $left: string; $delay: string }>`
  position: absolute;
  z-index: -1;
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  top: ${({ $top }) => $top};
  left: ${({ $left }) => $left};
  border-radius: 50%;
  background: rgb(255 255 255 / 0.08);
  animation: drift 11s ease-in-out infinite;
  animation-delay: ${({ $delay }) => $delay};
  pointer-events: none;
`;

export function StageBubbles() {
  return (
    <>
      <Bubble $size={180} $top="58%" $left="-18%" $delay="0s" />
      <Bubble $size={110} $top="8%" $left="78%" $delay="-4s" />
      <Bubble $size={64} $top="40%" $left="86%" $delay="-7s" />
    </>
  );
}
