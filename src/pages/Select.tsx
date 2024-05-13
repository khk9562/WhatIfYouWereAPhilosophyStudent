import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "../components/Layout/Container";
import PageNum from "../components/PageNum";
import SelectButton from "../components/SelectButton";
import Question from "../components/Question";
import { SELECT_LIST } from "../constants/SelectList";

function Select() {
  const navigate = useNavigate();

  const [pageNum, setPageNum] = useState<number>(1);
  const [quest, setQuest] = useState<string>("");
  const [selects, setSelects] = useState<any>();
  const [selections, setSelections] = useState<any[]>([]);

  const onClick = (page: number, result: string) => {
    if (pageNum < SELECT_LIST.length) {
      setPageNum(pageNum + 1);
    }
    setSelections((prevSelections) => {
      // 동일한 페이지에 대한 기존 선택을 필터링하여 제거합니다.
      const filteredSelections = prevSelections.filter(
        (selection) => selection.page !== page
      );
      // 필터링된 배열에 새로운 선택을 추가합니다.
      return [...filteredSelections, { page, result }];
    });
  };

  function findMostFrequentValue(selections: any[]) {
    if (selections.length < SELECT_LIST.length) {
      alert("모든 선택지를 선택해주세요.");
      return;
    }
    // 값을 저장할 객체 초기화
    const valueCounts: Record<string, number> = {};

    selections.forEach((selection) => {
      const value = selection.result;
      if (value) {
        if (valueCounts[value]) {
          valueCounts[value]++;
        } else {
          valueCounts[value] = 1;
        }
      }
    });

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
      navigate("/result");
    } else {
      alert("결과 확인 중 에러 발생");
    }
  }

  useEffect(() => {
    let page = localStorage.getItem("page");
    setPageNum(Number(page));
  }, []);

  useEffect(() => {
    const currentPageData = SELECT_LIST.find((item) => item.page === pageNum);

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
          gap: "8px",
          margin: "12px",
        }}
      >
        {selects?.map((item: any) => (
          <SelectButton
            key={`selectButton${item.page}-${item.result}`}
            onClick={() => {
              onClick(pageNum, item.result);
            }}
            result={item.result}
            pageNum={pageNum}
            selections={selections}
          >
            {item.text}
          </SelectButton>
        ))}
      </div>
      {pageNum === 8 && (
        <div
          style={{ cursor: "pointer" }}
          onClick={() => findMostFrequentValue(selections)}
          className="btn"
        >
          결과 확인
        </div>
      )}
    </Container>
  );
}

export default Select;
