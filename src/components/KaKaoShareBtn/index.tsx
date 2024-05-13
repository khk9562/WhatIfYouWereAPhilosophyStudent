import { useEffect } from "react";
import { KaKaoShareBtnType } from "../../types/types";
// kakao 기능 동작을 위해 넣어준다.
const { Kakao } = window;

function KaKaoShareBtn({ kind, result }: KaKaoShareBtnType) {
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
    } else {
      Kakao.Share.sendDefault({
        objectType: "feed",
        content: {
          title: { result },
          description: "나의 철학과 포지션을 확인해보세요!",
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
        className="grey-btn"
        onClick={() => {
          shareKakao();
        }}
      >
        {" "}
        카카오톡 공유하기{" "}
      </button>
    </>
  );
}

export default KaKaoShareBtn;
