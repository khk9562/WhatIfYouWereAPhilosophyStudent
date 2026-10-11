import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/Layout/Container";
import mainImg from "../assets/icons/philosopher.png";
import { ShareButton } from "../components/ShareButtons";
import { clearProgress } from "../shared/progress";

function Main() {
  return (
    <Container>
      <h1 className="title fade-up">21세기 대한민국 철학과에 진학했다면?!</h1>
      <div
        className="pop-in"
        style={{ "--delay": "200ms", width: "55%", maxWidth: "200px", margin: "32px 0 8px" } as React.CSSProperties}
      >
        <img
          src={mainImg}
          alt="main"
          className="float"
          style={{ display: "block", width: "100%", objectFit: "contain" }}
        />
      </div>
      <p className="desc text-center fade-up" style={{ "--delay": "420ms" } as React.CSSProperties}>
        21세기 자본주의의 나라 대한민국에서 당신은 대학의 철학과에 진학하게
        되었습니다.
        <br />
        과연 철학과에서 어떤 포지션을 맡게 될까요?
      </p>

      <div
        className="fade-up"
        style={{
          "--delay": "600ms",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "12px",
          marginTop: "28px",
        } as React.CSSProperties}
      >
        <ShareButton text="21세기 대한민국 철학과에 진학했다면? 나의 철학과 포지션을 확인해 보세요!" />
        {/* 시작하기는 항상 1번 문항부터 새로 시작한다 */}
        <Link className="btn" to={`/select`} onClick={clearProgress}>
          시작하기
        </Link>
      </div>
    </Container>
  );
}

export default Main;
