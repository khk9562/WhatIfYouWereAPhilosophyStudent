import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ResultType } from "../types/types";
import { RESULT_LIST } from "../constants/SelectList";
import Container from "../components/Layout/Container";

function Result() {
  const [resultList, setResultList] = useState<any>();

  useEffect(() => {
    let result = localStorage.getItem("result");

    const data = RESULT_LIST.find((item) => item.result == result);
    if (data) {
      setResultList(data);
    }

    // SDK를 초기화 합니다. 사용할 앱의 JavaScript 키를 설정해야 합니다.
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(process.env.REACT_APP_KAKAO_KEY);
    }

    // SDK 초기화 여부를 판단합니다.
    console.log(window.Kakao.isInitialized());
  }, []);

  return (
    <Container isResult={true}>
      <h3>결과 확인</h3>
      {/* <image></image> */}
      <h1>{resultList?.title}</h1>
      <p>{resultList?.description}</p>
      <Link to={"/"} className="btn">
        메인으로
      </Link>
    </Container>
  );
}

export default Result;
