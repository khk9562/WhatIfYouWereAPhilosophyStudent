import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Container from "../components/Layout/Container";
import mainImg from "../assets/icons/philosopher.png";
import KaKaoShareBtn from "../components/KaKaoShareBtn";

function Main() {
  useEffect(() => {
    // SDK를 초기화 합니다. 사용할 앱의 JavaScript 키를 설정해야 합니다.
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(process.env.REACT_APP_KAKAO_KEY);
    }

    // SDK 초기화 여부를 판단합니다.
    console.log(window.Kakao.isInitialized());
  }, []);

  return (
    <Container>
      <h1>21세기 대한민국 철학과에 진학했다면?!</h1>
      <img
        src={mainImg}
        alt="main"
        style={{
          width: "50%",
          // height: "200px",
          maxWidth: "200px",
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
      <KaKaoShareBtn kind="main" />
    </Container>
  );
}

export default Main;
