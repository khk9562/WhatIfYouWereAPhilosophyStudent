import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/Layout/Container";
import mainImg from "../assets/icons/philosopher.png";

function Main() {
  return (
    <Container>
      <h1>당신이 21세기 대한민국 대학 철학과에 진학했다면?!</h1>
      <img
        src={mainImg}
        alt="main"
        style={{
          width: "200px",
          height: "200px",
          objectFit: "contain",
          margin: "30px 0",
        }}
      />
      <p>
        21세기 자본주의의 나라 대한민국에서 당신은 대학의 철학과에 진학하게
        되었습니다.
        <br />
        과연 철학과에서 어떤 포지션을 맡게 될까요?
      </p>

      <Link className="btn" to={`/select`} style={{ marginTop: "20px" }}>
        시작하기
      </Link>
    </Container>
  );
}

export default Main;
