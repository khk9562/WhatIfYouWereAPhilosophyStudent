import React from "react";
import { Link } from "react-router-dom";
import { ResultType } from "../types/types";

const results: ResultType[] = [
  {
    name: "칸트",
    description: "강의시간에 단 한번도 지각을 하지 않은 당신! 칸트일지도?",
    character: "철학덕후",
  },
  {
    name: "노자",
    description:
      "학교를 관두고 자연으로 돌아가고 싶은 당신! 노자와 영혼의 짝꿍!",
    character: "자퇴생",
  },
  {
    name: "벤담",
    description:
      "치열한 경쟁 거부한다, 성적은 차등이 아닌 모두가 행복하게 씨쁠을! 어쩌면 나 전생에 벤담이었을지 몰라…!",
    character: "머글",
  },
];

function Result() {
  return (
    <article>
      <h1>결과 확인</h1>
      {/* <image></image> */}
      <p></p>
    </article>
  );
}

export default Result;
