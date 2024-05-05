import styled, { css } from "styled-components";

const StyledSelectButton = styled.button`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 3px 6px;
  word-break: keep-all;
  cursor: pointer;
  display: block;
  width: 100%;
  min-height: 80px;
  font-size: 16px;
  font-weight: 500;
  color: #333;
  &:focus,
  &.active {
    box-shadow: 0 2px 5px 2px rgba(0, 0, 0, 0.1);
    // border: 2px solid #333;
    background-color: #ff8427;
    color: #fff;
    font-weight: 700;
  }
`;

export default StyledSelectButton;
