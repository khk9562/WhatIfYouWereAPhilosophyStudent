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
      <h6>결과 확인</h6>

      <h1 className="title">{resultList?.title}</h1>
      <img
        src={resultList?.img}
        alt="main"
        style={{
          width: "50%",
          maxWidth: "180px",
          objectFit: "contain",
          margin: "30px 0",
        }}
      />
      <p className="desc" style={{ padding: "0 3vw" }}>
        {resultList?.description}
      </p>

      <div
        className="btn-row"
        style={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "8px",
          marginTop: "30px",
        }}
      >
        <Link to={"/"} className="btn">
          메인으로
        </Link>
        <SaveImageButton result={resultList} />
        <ShareButton
          text={
            resultList
              ? `나의 철학과 포지션은 '${resultList.title}'! 당신도 확인해 보세요.`
              : "나의 철학과 포지션을 확인해 보세요!"
          }
        />      </div>
    </Container>
  );
}

export default Result;
