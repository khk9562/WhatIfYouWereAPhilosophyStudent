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
      <h3>결과 확인</h3>
      {/* <image></image> */}
      <h1>{resultList?.title}</h1>
      <p>{resultList?.description}</p>
      <KaKaoShareBtn kind="result" result={resultList.result || ""} />
      <Link to={"/"} className="btn">
        메인으로
      </Link>
    </Container>
  );
}

export default Result;
