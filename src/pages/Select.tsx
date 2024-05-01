import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/Layout/Container";
import PageNum from "../components/PageNum";
import SelectButton from "../components/SelectButton";
import Question from "../components/Question";

function Select() {
  return (
    <Container>
      <PageNum />
      <Question>
        21세기 자본주의의 나라 대한민국에서 당신은 대학의 철학과에 진학하게
        되었습니다. 과연 철학과에서 어떤 포지션을 맡게 될까요?
      </Question>

      <div
        style={{
          width: "95%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "18px",
          margin: "12px",
        }}
      >
        <SelectButton>선택지1</SelectButton>
        <SelectButton>선택지2</SelectButton>
        <SelectButton>선택지3</SelectButton>
        <SelectButton>선택지4</SelectButton>
      </div>
    </Container>
  );
}

export default Select;
