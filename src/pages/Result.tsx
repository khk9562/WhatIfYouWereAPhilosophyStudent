import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RESULT_LIST } from "../constants/SelectList";
import { SaveImageButton, ShareButton } from "../components/ShareButtons";
import { Stage, StageBubbles } from "../components/Stage";
import {
  Hero,
  OtherTypes,
  Portrait,
  ResultEyebrow,
  ResultName,
  Sheet,
  SheetLabel,
  SheetText,
  TypeBadge,
} from "../components/Hero/style";
import { clearProgress } from "../shared/progress";

type ResultItem = (typeof RESULT_LIST)[number];

const delay = (ms: number) => ({ "--delay": `${ms}ms` } as React.CSSProperties);

function Result() {
  const [resultList, setResultList] = useState<ResultItem>();

  useEffect(() => {
    const result = localStorage.getItem("result");
    setResultList(RESULT_LIST.find((item) => item.result === result));
  }, []);

  return (
    <Stage>
      <StageBubbles />
      <Hero style={{ flex: "none", paddingBottom: "0.5rem" }}>
        <ResultEyebrow className="fade-in">나의 철학과 포지션은</ResultEyebrow>
        <ResultName className="blur-in" style={delay(150)}>
          {resultList?.title}
        </ResultName>
        <Portrait className="wobble-in" style={delay(350)}>
          {resultList && (
            <img src={resultList.img} alt={resultList.title} className="float" />
          )}
        </Portrait>
      </Hero>

      <Sheet className="fade-up" style={delay(650)}>
        <SheetLabel>결과 풀이</SheetLabel>
        <SheetText>{resultList?.description}</SheetText>

        <div className="btn-grid">
          <SaveImageButton result={resultList} />
          <ShareButton
            text={
              resultList
                ? `나의 철학과 포지션은 '${resultList.title}'! 당신도 확인해 보세요.`
                : "나의 철학과 포지션을 확인해 보세요!"
            }
          />
          <Link to="/select" className="btn btn-wide" onClick={clearProgress}>
            테스트 다시 하기
          </Link>
        </div>
      </Sheet>

      <OtherTypes className="fade-up" style={delay(850)}>
        <p>철학과의 {RESULT_LIST.length}가지 포지션</p>
        <ul>
          {RESULT_LIST.map((item) => (
            <TypeBadge key={item.result} $current={item.result === resultList?.result}>
              <img src={item.img} alt="" />
              {item.title}
            </TypeBadge>
          ))}
        </ul>
      </OtherTypes>
    </Stage>
  );
}

export default Result;
