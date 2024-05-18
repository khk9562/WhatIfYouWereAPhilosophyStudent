import styled, { css } from "styled-components";

const StyledSelectButton = styled.button`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1.25rem 2rem;
  // word-break: keep-all;
  cursor: pointer;
  font-size: 14px;
  font-weight: 400;
  color: #09090b;
  &.active {
    font-wight: 800;
    border-color: var(--point);
  }
`;

export default StyledSelectButton;
