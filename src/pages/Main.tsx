import React from "react";
import { Link } from "react-router-dom";

function Main() {
  return (
    <div>
      <h1>당신이 21세기 대한민국 대학 철학과에 진학했다면?!</h1>
      <p>
        21세기 자본주의의 나라 대한민국에서 당신은 대학의 철학과에 진학하게
        되었습니다. 과연 철학과에서 어떤 포지션을 맡게 될까요?
      </p>

      <Link to={`/select:id`}>시작하기</Link>
    </div>
  );
}

export default Main;
