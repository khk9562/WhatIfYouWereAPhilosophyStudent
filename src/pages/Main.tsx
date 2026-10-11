import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/Layout/Container";
import mainImg from "../assets/icons/philosopher.png";
import { ShareButton } from "../components/ShareButtons";

function Main() {
  return (
    <Container>
      <h1 className="title">21세기 대한민국 철학과에 진학했다면?!</h1>
      <img
        src={mainImg}
        alt="main"
        style={{
          width: "50%",
          maxWidth: "180px",
          objectFit: "contain",
          margin: "30px 0",
        }}
      />
      <p className="desc">
        21세기 자본주의의 나라 대한민국에서 당신은 대학의 철학과에 진학하게
        되었습니다.
        <br />
        과연 철학과에서 어떤 포지션을 맡게 될까요?
      </p>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "12px",
          marginTop: "20px",
        }}
      >
        <ShareButton text="21세기 대한민국 철학과에 진학했다면? 나의 철학과 포지션을 확인해 보세요!" />
        <Link className="btn" to={`/select`}>
          시작하기
        </Link>
      </div>
    </Container>
  );
}

export default Main;
