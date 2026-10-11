import { getBasename } from "./basename";

// 이 게임의 첫 화면 주소. 단독 주소와 게임 포털 하위 경로 어디서 열려도 그 자리의 첫 화면을 가리킨다.
export function getAppUrl() {
  const base = getBasename(window.location.pathname);
  return `${window.location.origin}${base === "/" ? "/" : `${base}/`}`;
}

// 기기의 기본 공유 창을 연다. 지원하지 않는 브라우저(대부분의 PC)에서는 링크를 복사한다.
export async function shareLink(title: string, text: string) {
  const url = getAppUrl();

  if (navigator.share) {
    try {
      await navigator.share({ title, text, url });
    } catch (error) {
      // 사용자가 공유 창을 닫은 경우는 오류로 보지 않는다
      if ((error as DOMException).name !== "AbortError") throw error;
    }
    return;
  }

  try {
    await navigator.clipboard.writeText(url);
    alert("링크를 복사했어요. 원하는 곳에 붙여 넣어 공유해 주세요.");
  } catch {
    prompt("아래 링크를 복사해 공유해 주세요.", url);
  }
}
