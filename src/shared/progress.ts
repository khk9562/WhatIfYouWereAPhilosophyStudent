// 질문 화면의 진행 상황(현재 문항, 고른 답)을 저장해 새로고침해도 이어서 할 수 있게 한다.
export interface Selection {
  page: number;
  result: string;
}

const PAGE_KEY = "page";
const SELECTIONS_KEY = "selections";

// 저장된 문항 번호. 없거나 범위를 벗어나면 1번 문항
export function loadPage(total: number) {
  const page = Number(localStorage.getItem(PAGE_KEY));
  return Number.isInteger(page) && page >= 1 && page <= total ? page : 1;
}

export function loadSelections(): Selection[] {
  try {
    const parsed = JSON.parse(localStorage.getItem(SELECTIONS_KEY) ?? "[]");
    return Array.isArray(parsed)
      ? parsed.filter(
          (item) => typeof item?.page === "number" && typeof item?.result === "string"
        )
      : [];
  } catch {
    return [];
  }
}

export function saveProgress(page: number, selections: Selection[]) {
  localStorage.setItem(PAGE_KEY, String(page));
  localStorage.setItem(SELECTIONS_KEY, JSON.stringify(selections));
}

// 새로 시작할 때 진행 상황을 지운다(마지막 결과는 남긴다)
export function clearProgress() {
  localStorage.removeItem(PAGE_KEY);
  localStorage.removeItem(SELECTIONS_KEY);
}
