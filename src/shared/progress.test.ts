import { clearProgress, loadPage, loadSelections, saveProgress } from "./progress";

beforeEach(() => localStorage.clear());

describe("진행 상황 저장", () => {
  it("저장한 문항과 답을 그대로 불러온다", () => {
    saveProgress(5, [
      { page: 1, result: "a" },
      { page: 2, result: "c" },
    ]);
    expect(loadPage(8)).toBe(5);
    expect(loadSelections()).toEqual([
      { page: 1, result: "a" },
      { page: 2, result: "c" },
    ]);
  });

  it("저장된 값이 없거나 이상하면 1번 문항, 빈 답으로 시작한다", () => {
    expect(loadPage(8)).toBe(1);
    expect(loadSelections()).toEqual([]);
    localStorage.setItem("page", "99");
    localStorage.setItem("selections", "{깨진 값");
    expect(loadPage(8)).toBe(1);
    expect(loadSelections()).toEqual([]);
  });

  it("새로 시작하면 진행 상황만 지우고 결과는 남긴다", () => {
    saveProgress(3, [{ page: 1, result: "b" }]);
    localStorage.setItem("result", "b");
    clearProgress();
    expect(loadPage(8)).toBe(1);
    expect(loadSelections()).toEqual([]);
    expect(localStorage.getItem("result")).toBe("b");
  });
});
