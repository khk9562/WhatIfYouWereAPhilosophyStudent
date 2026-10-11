import styled from "styled-components";

// 질문 지문. 보라 무대(QuestionStage) 위에 큰 흰 글자로 놓인다
const StyledQuestion = styled.h1`
  color: #fff;
  font-size: var(--font-question);
  font-weight: var(--weight-heading);
  line-height: 1.45;
  letter-spacing: -0.03em;
  text-wrap: pretty;

  /* 지문이 길면 한 단계 작게 써서 선택지가 화면 아래로 밀리지 않게 한다 */
  &.long {
    font-size: clamp(1.25rem, 5.4vw, 1.625rem);
    line-height: 1.5;
  }
`;

export default StyledQuestion;
