import React from "react";
import { Link } from "react-router-dom";
import mainImg from "../assets/icons/philosopher.png";
import { ShareButton } from "../components/ShareButtons";
import { Stage, StageBubbles } from "../components/Stage";
import {
  Actions,
  Caption,
  Hero,
  HeroDesc,
  HeroTitle,
  Mark,
  Pill,
  Portrait,
  TypeChip,
} from "../components/Hero/style";
import { RESULT_LIST, SELECT_LIST } from "../constants/SelectList";
import { clearProgress } from "../shared/progress";

const delay = (ms: number) => ({ "--delay": `${ms}ms` } as React.CSSProperties);

// 철학자 그림 주변에 떠 있는 유형 칩 자리
const CHIP_POSITIONS = [
  { top: "4%", left: "-14%" },
  { top: "14%", left: "74%" },
  { top: "70%", left: "-18%" },
  { top: "78%", left: "70%" },
];

function Main() {
  return (
    <Stage>
      <StageBubbles />
      <Hero>
        <Pill className="fade-in">
          {SELECT_LIST.length}문항 · 1분 성향 테스트
        </Pill>
        <HeroTitle className="fade-up" style={delay(120)}>
          21세기 대한민국
          <br />
          <Mark>철학과</Mark>에 진학했다면?!
        </HeroTitle>

        <Portrait className="pop-in" style={delay(320)}>
          <img src={mainImg} alt="철학자" className="float" />
          {RESULT_LIST.map((item, index) => (
            <TypeChip
              key={item.result}
              $top={CHIP_POSITIONS[index].top}
              $left={CHIP_POSITIONS[index].left}
              className="pop-in"
              style={delay(700 + index * 120)}
            >
              <span
                className="float"
                style={{ "--float-delay": `${index * -1.3}s` } as React.CSSProperties}
              >
                {item.title}?
              </span>
            </TypeChip>
          ))}
        </Portrait>

        <HeroDesc className="fade-up" style={delay(520)}>
          21세기 자본주의의 나라 대한민국에서 당신은 대학의 철학과에 진학하게
          되었습니다. 과연 철학과에서 어떤 포지션을 맡게 될까요?
        </HeroDesc>
      </Hero>

      <Actions className="fade-up" style={delay(820)}>
        {/* 시작하기는 항상 1번 문항부터 새로 시작한다 */}
        <Link className="btn btn-light" to="/select" onClick={clearProgress}>
          테스트 시작하기
        </Link>
        <ShareButton
          className="btn btn-ghost"
          label="친구에게 공유하기"
          text="21세기 대한민국 철학과에 진학했다면? 나의 철학과 포지션을 확인해 보세요!"
        />
      </Actions>
      <Caption className="fade-in" style={delay(1000)}>
        {RESULT_LIST.length}가지 포지션 중 나는 어디에?
      </Caption>
    </Stage>
  );
}

export default Main;
