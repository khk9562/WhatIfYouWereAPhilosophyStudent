import styled, { css } from "styled-components";

const StyledPageNumBox = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin-top: 20px;
  font-size: var(--font-label);
  font-weight: var(--weight-strong);
  color: var(--text-muted);
  font-variant-numeric: tabular-nums;

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
  }
`;

export default StyledPageNumBox;
