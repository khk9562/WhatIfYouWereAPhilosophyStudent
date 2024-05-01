import React from "react";
import { Link } from "react-router-dom";
import PageNum from "../components/PageNum";

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
        <button type="button">선택지1</button>
        <button type="button">선택지2</button>
        <button type="button">선택지3</button>
        <button type="button">선택지4</button>
      </div>
    </article>
  );
}

export default Select;
