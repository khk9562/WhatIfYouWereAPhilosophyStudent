import styled, { css } from "styled-components";

const StyledPageNumBox = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin-top: 20px;

    button {
      cursor: pointer;
      width: 18px;
      height: 18px;
      margin: 0 5px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
`;

export default StyledPageNumBox;
