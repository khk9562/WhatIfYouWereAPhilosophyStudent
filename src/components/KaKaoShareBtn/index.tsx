import { useEffect } from "react";
import { KaKaoShareBtnType } from "../../types/types";
import styled, { css } from "styled-components";
import KaKaoShareImg from "../../assets/icons/kakao.png";
const { Kakao } = window;

function KaKaoShareBtn({ kind, result, desc, imgsrc }: KaKaoShareBtnType) {
  // 배포한 자신의 사이트
  const realUrl = "https://what-if-you-were-a-philosophy-student.vercel.app";
  // 로컬 주소 (localhost 3002)
  const resultUrl = "http://localhost:3002";

  // 재랜더링시에 실행되게 해준다.
  useEffect(() => {
    // init 해주기 전에 clean up 을 해준다.
    Kakao.cleanup();
    // 자신의 js 키를 넣어준다.
    Kakao.init(process.env.REACT_APP_KAKAO_KEY);
    // 잘 적용되면 true 를 뱉는다.
    console.log("잘 적용이 됐나요?", Kakao.isInitialized());
  }, []);

  const shareKakao = () => {
    console.log("shareKakao 함수 실행");
    if (kind === "main") {
      Kakao.Share.sendDefault({
        objectType: "feed",
        content: {
          title: "철BTI",
          description: "나의 철학과 포지션을 확인해보세요!",
          imageUrl: { realUrl } + "./src/assets/icons/philosopher.png",
          link: {
            webUrl: realUrl,
            mobileWebUrl: realUrl,
          },
        },
        buttons: [
          {
            title: "나도 테스트 하러가기",
            link: {
              webUrl: realUrl,
              mobileWebUrl: realUrl,
            },
          },
        ],
      });
    } else {
      Kakao.Share.sendDefault({
        objectType: "feed",
        content: {
          title: `${result}`,
          description: `${desc}`,
          imageUrl: { resultUrl } + "icons/philosopher.png",
          link: {
            webUrl: realUrl,
            mobileWebUrl: realUrl,
          },
        },
        buttons: [
          {
            title: "나도 테스트 하러가기",
            link: {
              webUrl: realUrl,
              mobileWebUrl: realUrl,
            },
          },
        ],
      });
    }
  };

  return (
    <>
      <button
        type="button"
        className="sharebtn"
        style={{ cursor: "pointer" }}
        onClick={() => {
          shareKakao();
        }}
      >
        <img src={KaKaoShareImg} width={35} height={35} alt="kakao" />
      </button>
    </>
  );
}

export default KaKaoShareBtn;
