import styled, { css } from "styled-components";

const StyledPageNumBox = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

    button {
      background-color: #f0f0f0; // 버튼 배경색
      color: #333; // 버튼 글자색
      border: none; // 테두리 제거
      padding: 8px 16px; // 안쪽 여백
      cursor: pointer; // 마우스 커서 모양 변경
  
      &:hover {
        background-color: #e0e0e0; // 마우스 오버 시 배경색 변경
      }
`;

export default StyledPageNumBox;
