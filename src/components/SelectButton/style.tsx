import styled from "styled-components";

// 보라 무대 위에 떠 있는 흰 선택지 카드
const StyledSelectButton = styled.button`
  width: 100%;
  border: none;
  border-radius: 16px;
  padding: 1.25rem 1.5rem;
  background-color: #fff;
  cursor: pointer;
  font-size: var(--font-option);
  font-weight: var(--weight-medium);
  line-height: var(--leading-normal);
  color: var(--text-strong);
  box-shadow: 0 14px 30px -12px rgb(32 0 96 / 0.55),
    0 2px 6px rgb(32 0 96 / 0.12);
  transition: transform 0.2s, box-shadow 0.2s, background-color 0.2s,
    color 0.2s;
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 20px 36px -12px rgb(32 0 96 / 0.6),
      0 2px 6px rgb(32 0 96 / 0.12);
  }
  &:active {
    transform: scale(0.98);
  }
  &.active {
    font-weight: var(--weight-heading);
    color: var(--point);
    background-color: var(--point-soft);
    box-shadow: inset 0 0 0 2px var(--point), 0 0 0 4px rgb(255 255 255 / 0.55),
      0 14px 30px -12px rgb(32 0 96 / 0.55);
  }
`;

export default StyledSelectButton;
