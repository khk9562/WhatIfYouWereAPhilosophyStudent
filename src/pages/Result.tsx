import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ResultType } from "../types/types";
import { RESULT_LIST } from "../constants/SelectList";
import Container from "../components/Layout/Container";
import { SaveImageButton, ShareButton } from "../components/ShareButtons";

function Result() {
  const [resultList, setResultList] = useState<any>();

  useEffect(() => {
    let result = localStorage.getItem("result");

    const data = RESULT_LIST.find((item) => item.result == result);
    if (data) {
      setResultList(data);
    }
  }, []);

  return (
    <Container isResult={true}>
      <p className="eyebrow fade-in">결과 확인</p>

      <h1 className="title blur-in" style={{ "--delay": "150ms" } as React.CSSProperties}>
        {resultList?.title}
      </h1>
      <div
        className="wobble-in"
        style={{ "--delay": "350ms", width: "55%", maxWidth: "200px", margin: "32px 0 8px" } as React.CSSProperties}
      >
        <img
          src={resultList?.img}
          alt={resultList?.title ?? "result"}
          className="float"
          style={{ display: "block", width: "100%", objectFit: "contain" }}
        />
      </div>
      <p className="desc fade-up" style={{ "--delay": "650ms", padding: "0 2vw" } as React.CSSProperties}>
        {resultList?.description}
      </p>

      <div
        className="btn-grid fade-up"
        style={{ "--delay": "850ms" } as React.CSSProperties}
      >
        <SaveImageButton result={resultList} />
        <ShareButton
          text={
            resultList
              ? `나의 철학과 포지션은 '${resultList.title}'! 당신도 확인해 보세요.`
              : "나의 철학과 포지션을 확인해 보세요!"
          }
        />
        <Link to={"/"} className="btn btn-wide">
          메인으로
        </Link>
      </div>
    </Container>
  );
}

export default Result;
