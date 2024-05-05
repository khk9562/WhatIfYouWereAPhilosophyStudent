import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Container from "../components/Layout/Container";
import PageNum from "../components/PageNum";
import SelectButton from "../components/SelectButton";
import Question from "../components/Question";
import { SELECT_LIST } from "../constants/SelectList";
import StyledPageNumBox from "../components/PageNum/style";

function Select() {
  const [pageNum, setPageNum] = useState<number>(1);
  const [quest, setQuest] = useState<string>("");
  const [selects, setSelects] = useState<any>();

  const onClick = (page: number, result: string) => {
    localStorage.setItem(`page${page}`, result);
  };

  function findMostFrequentValue() {
    // 값을 저장할 객체 초기화
    const valueCounts: Record<string, number> = {};

    // localStorage에서 값을 읽어와 빈도수 계산
    for (let i = 1; i <= SELECT_LIST.length; i++) {
      const value = localStorage.getItem(`page${i}`);
      if (value) {
        if (valueCounts[value]) {
          valueCounts[value]++;
        } else {
          valueCounts[value] = 1;
        }
      }
    }

    // 가장 많이 나온 값을 찾기
    let mostFrequentValue = "";
    let maxCount = 0;
    for (const value in valueCounts) {
      if (valueCounts[value] > maxCount) {
        mostFrequentValue = value;
        maxCount = valueCounts[value];
      }
    }

    if (mostFrequentValue) {
      localStorage.setItem("result", mostFrequentValue);
    } else {
      alert("결과 확인 중 에러 발생");
    }
  }

  useEffect(() => {
    let page = localStorage.getItem("page");
    setPageNum(Number(page));
  }, []);

  useEffect(() => {
    const currentPageData = SELECT_LIST.find((item) => item.page == pageNum);

    if (currentPageData) {
      setQuest(currentPageData.title);
      setSelects(currentPageData.contents);
    }
  }, [pageNum]);

  return (
    <Container>
      <PageNum pageNum={pageNum} setPageNum={setPageNum} />
      <Question>{quest}</Question>

      <div
        style={{
          width: "95%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "18px",
          margin: "12px",
        }}
      >
        {selects?.map((item: any, index: number) => (
          <SelectButton
            key={`selectButton${item.page}-${item.result}`}
            onClick={() => onClick(pageNum, item.result)}
          >
            {item.text}
          </SelectButton>
        ))}
      </div>
      {pageNum === 8 && (
        <button
          type="button"
          className="btn"
          onClick={() => findMostFrequentValue()}
        >
          결과 확인
        </button>
      )}
    </Container>
  );
}

export default Select;
