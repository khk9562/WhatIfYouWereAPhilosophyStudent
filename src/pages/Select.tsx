import React from "react";
import { Link } from "react-router-dom";
import PageNum from "../components/PageNum/PageNum";
import SelectButton from "../components/SelectButton";

function Select() {
  return (
    <article>
      <PageNum />
      <h1>질문</h1>
      <p>
        21세기 자본주의의 나라 대한민국에서 당신은 대학의 철학과에 진학하게
        되었습니다. 과연 철학과에서 어떤 포지션을 맡게 될까요?
      </p>

      <div>
        <SelectButton>선택지1</SelectButton>
        <SelectButton>선택지2</SelectButton>
        <SelectButton>선택지3</SelectButton>
        <SelectButton>선택지4</SelectButton>
      </div>
    </article>
  );
}

export default Select;
