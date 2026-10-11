import styled from "styled-components";

// 첫 화면과 결과 화면의 히어로 영역. 보라 무대(Stage) 위에 놓인다

export const Hero = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const Pill = styled.p`
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.375rem 0.875rem;
  border-radius: 999px;
  background: rgb(255 255 255 / 0.16);
  box-shadow: inset 0 0 0 1px rgb(255 255 255 / 0.3);
  font-size: var(--font-label);
  font-weight: var(--weight-strong);
  letter-spacing: 0.02em;
`;

export const HeroTitle = styled.h1`
  margin-top: 1rem;
  font-size: clamp(2rem, 9.2vw, 2.875rem);
  font-weight: var(--weight-display);
  line-height: 1.22;
  letter-spacing: -0.04em;
  text-shadow: 0 4px 24px rgb(32 0 96 / 0.25);
`;

// 제목 속 강조 단어. 보라 바탕에서 가장 먼저 눈에 띄도록 노란 글자로 쓴다
export const Mark = styled.span`
  color: var(--highlight);
`;

// 흰 원판과 후광 안에 놓이는 캐릭터 그림
export const Portrait = styled.div`
  position: relative;
  width: min(62vw, 15rem);
  aspect-ratio: 1;
  margin: 2rem 0 1.5rem;
  border-radius: 50%;
  background: radial-gradient(circle, #fff 0 57%, rgb(255 255 255 / 0.22) 58% 66%, rgb(255 255 255 / 0.08) 67% 74%, transparent 75%);
  display: grid;
  place-items: center;

  > img {
    width: 62%;
    height: 62%;
    object-fit: contain;
  }
`;

// 그림 주변에 떠 있는 유형 이름 칩
export const TypeChip = styled.span<{ $top: string; $left: string }>`
  position: absolute;
  top: ${({ $top }) => $top};
  left: ${({ $left }) => $left};

  > span {
    display: inline-block;
    padding: 0.375rem 0.75rem;
    border-radius: 999px;
    background: #fff;
    color: var(--point);
    font-size: var(--font-label);
    font-weight: var(--weight-heading);
    white-space: nowrap;
    box-shadow: 0 10px 24px -8px rgb(32 0 96 / 0.55);
  }
`;

export const HeroDesc = styled.p`
  max-width: 22rem;
  font-size: var(--font-body);
  line-height: var(--leading-relaxed);
  color: rgb(255 255 255 / 0.88);
`;

export const Actions = styled.div`
  display: grid;
  gap: 0.625rem;
  width: 100%;
  max-width: 22rem;
  margin: 2rem auto 0;

  .btn {
    display: block;
    width: 100%;
    padding: 1.0625rem 1rem;
    font-size: 1.0625rem;
    font-weight: var(--weight-heading);
  }
`;

export const Caption = styled.p`
  margin-top: 1rem;
  font-size: var(--font-label);
  color: rgb(255 255 255 / 0.7);
  text-align: center;
`;

/* 결과 화면 */

export const ResultEyebrow = styled.p`
  font-size: var(--font-body);
  font-weight: var(--weight-strong);
  color: rgb(255 255 255 / 0.8);
`;

export const ResultName = styled.h1`
  margin-top: 0.25rem;
  font-size: clamp(3rem, 15vw, 4.25rem);
  font-weight: 900;
  line-height: 1.1;
  letter-spacing: -0.05em;
  text-shadow: 0 6px 30px rgb(32 0 96 / 0.35);
`;

// 결과 설명과 버튼을 담는 흰 시트
export const Sheet = styled.div`
  width: 100%;
  max-width: 30rem;
  margin: 0 auto;
  padding: 1.75rem 1.5rem 1.5rem;
  border-radius: 24px;
  background: #fff;
  color: var(--text-body);
  box-shadow: 0 28px 56px -20px rgb(32 0 96 / 0.6);

  .btn-grid {
    max-width: none;
    margin-top: 1.5rem;
  }
`;

export const SheetLabel = styled.p`
  font-size: var(--font-label);
  font-weight: var(--weight-heading);
  letter-spacing: 0.04em;
  color: var(--point);
`;

export const SheetText = styled.p`
  margin-top: 0.625rem;
  font-size: var(--font-body);
  line-height: var(--leading-relaxed);
  color: var(--text-body);
`;

export const OtherTypes = styled.div`
  margin-top: 1.75rem;
  text-align: center;

  > p {
    font-size: var(--font-label);
    font-weight: var(--weight-strong);
    color: rgb(255 255 255 / 0.75);
  }

  > ul {
    display: flex;
    justify-content: center;
    gap: 0.875rem;
    margin-top: 0.75rem;
    list-style: none;
  }
`;

export const TypeBadge = styled.li<{ $current: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.375rem;
  opacity: ${({ $current }) => ($current ? 1 : 0.6)};
  font-size: var(--font-label);
  font-weight: ${({ $current }) => ($current ? 700 : 500)};

  > img {
    width: 3.25rem;
    height: 3.25rem;
    padding: 0.375rem;
    border-radius: 50%;
    background: #fff;
    box-shadow: ${({ $current }) =>
      $current ? "0 0 0 3px var(--highlight), 0 8px 18px -6px rgb(32 0 96 / 0.6)" : "none"};
  }
`;
