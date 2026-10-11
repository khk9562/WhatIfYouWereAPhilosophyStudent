import styled from "styled-components";

export const QuestionArea = styled.header`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.875rem;
  min-height: 36vh;
  padding: 1rem 0.25rem 2.25rem;
`;

export const QuestionLabel = styled.p`
  font-size: var(--font-label);
  font-weight: var(--weight-heading);
  letter-spacing: 0.14em;
  color: rgb(255 255 255 / 0.72);
  font-variant-numeric: tabular-nums;
`;

export const Options = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
`;

export const ResultAction = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
`;
