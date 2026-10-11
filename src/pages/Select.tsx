import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PageNum from "../components/PageNum";
import SelectButton from "../components/SelectButton";
import Question from "../components/Question";
import {
  Bubble,
  Options,
  QuestionArea,
  QuestionLabel,
  ResultAction,
  Stage,
} from "../components/QuestionStage/style";
import { SELECT_LIST } from "../constants/SelectList";
import { loadPage, loadSelections, saveProgress, Selection } from "../shared/progress";

function Select() {
  const navigate = useNavigate();

  // 새로고침해도 이어서 할 수 있게 저장된 진행 상황에서 시작한다
  const [pageNum, setPageNum] = useState<number>(() => loadPage(SELECT_LIST.length));
  const [quest, setQuest] = useState<string>("");
  const [selects, setSelects] = useState<any>();
  const [selections, setSelections] = useState<Selection[]>(loadSelections);

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

  function findMostFrequentValue(selections: Selection[]) {
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
    saveProgress(pageNum, selections);
  }, [pageNum, selections]);

  useEffect(() => {
    const currentPageData = SELECT_LIST.find((item) => item.page === pageNum);

    if (currentPageData) {
      setQuest(currentPageData.title);
      setSelects(currentPageData.contents);
    }
  }, [pageNum]);

  const isLastPage = pageNum === SELECT_LIST.length;

  return (
    <Stage>
      <Bubble $size={180} $top="58%" $left="-18%" $delay="0s" />
      <Bubble $size={110} $top="8%" $left="78%" $delay="-4s" />
      <Bubble $size={64} $top="40%" $left="86%" $delay="-7s" />

      {/* 문항이 바뀔 때마다 등장 효과가 다시 재생되도록 key를 문항 번호로 둔다 */}
      <QuestionArea key={`question-${pageNum}`}>
        <QuestionLabel className="fade-in">
          Q{String(pageNum).padStart(2, "0")} / {String(SELECT_LIST.length).padStart(2, "0")}
        </QuestionLabel>
        <Question>{quest}</Question>
      </QuestionArea>

      <Options key={`options-${pageNum}`}>
        {selects?.map((item: any, index: number) => (
          <div
            key={`selectButton${pageNum}-${item.result}`}
            className="fade-up"
            style={{ "--delay": `${250 + index * 90}ms` } as React.CSSProperties}
          >
            <div
              className="float"
              style={{ "--float-delay": `${index * -1.1}s` } as React.CSSProperties}
            >
              <SelectButton
                onClick={() => {
                  onClick(pageNum, item.result);
                }}
                result={item.result}
                pageNum={pageNum}
                selections={selections}
              >
                {item.text}
              </SelectButton>
            </div>
          </div>
        ))}
      </Options>

      {isLastPage && (
        <ResultAction>
          <button
            type="button"
            className="btn btn-light pop-in"
            style={{ "--delay": "650ms" } as React.CSSProperties}
            onClick={() => findMostFrequentValue(selections)}
          >
            결과 확인
          </button>
        </ResultAction>
      )}
      <PageNum pageNum={pageNum} setPageNum={setPageNum} />
    </Stage>
  );
}

export default Select;
