import styled, { css } from "styled-components";

const StyledSelectButton = styled.button`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1.125rem 1.5rem;
  cursor: pointer;
  font-size: var(--font-option);
  font-weight: var(--weight-medium);
  line-height: var(--leading-normal);
  color: var(--text-strong);
  transition: border-color 0.15s, background-color 0.15s;
  &:hover {
    border-color: #bdbdbd;
  }
  &.active {
    font-weight: var(--weight-heading);
    color: var(--point);
    border-color: var(--point);
    background-color: var(--point-soft);
  }
`;

export default StyledSelectButton;
