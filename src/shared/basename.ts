// 이 게임은 단독 주소(/)와 게임 포털의 하위 경로(/games/philosophy/) 양쪽에서 열린다.
// 현재 주소에서 화면 경로(/select, /result)를 떼어 낸 앞부분을 라우터의 basename으로 쓴다.
const ROUTE_PATHS = ["/select", "/result"];

export function getBasename(pathname: string) {
  const path = pathname.replace(/\/+$/, "");
  const route = ROUTE_PATHS.find((routePath) => path.endsWith(routePath));
  const base = route ? path.slice(0, -route.length) : path;
  return base || "/";
}
