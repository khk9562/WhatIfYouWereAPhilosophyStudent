import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ResultType } from "../types/types";
import { RESULT_LIST } from "../constants/SelectList";
import Container from "../components/Layout/Container";
import KaKaoShareBtn from "../components/KaKaoShareBtn";
import mainImg from "../assets/icons/philosopher.png";

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
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          marginTop: "30px",
        }}
      >
        <Link to={"/"} className="btn">
          메인으로
        </Link>
        <KaKaoShareBtn
          kind="result"
          result={resultList?.title}
          desc={resultList?.description}
          imgsrc={resultList?.img}
        />
      </div>
    </Container>
  );
}

export default Result;
