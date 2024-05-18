import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ResultType } from "../types/types";
import { RESULT_LIST } from "../constants/SelectList";
import Container from "../components/Layout/Container";
import KaKaoShareBtn from "../components/KaKaoShareBtn";

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
      {/* <image></image> */}
      <h1>{resultList?.title}</h1>
      <p style={{ padding: "0 3vw" }}>{resultList?.description}</p>
      <Link to={"/"} className="btn">
        메인으로
      </Link>
      <KaKaoShareBtn
        kind="result"
        result={resultList?.title}
        desc={resultList?.description}
      />
    </Container>
  );
}

export default Result;
