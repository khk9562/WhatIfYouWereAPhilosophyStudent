import { wrapText } from "./resultImage";

// 글자 하나를 폭 1로 본다
const measure = (value: string) => value.length;

describe("wrapText", () => {
  it("띄어쓰기 단위로 나눠 단어 중간에서 끊지 않는다", () => {
    expect(wrapText("소크라테스의 후예입니다 파이팅", 8, measure)).toEqual([
      "소크라테스의",
      "후예입니다",
      "파이팅",
    ]);
  });

  it("한 줄에 들어가는 만큼 단어를 이어 붙인다", () => {
    expect(wrapText("가 나 다 라", 5, measure)).toEqual(["가 나 다", "라"]);
  });

  it("한 줄보다 긴 단어만 글자 단위로 자른다", () => {
    expect(wrapText("가나다라마바사 아", 3, measure)).toEqual(["가나다", "라마바", "사 아"]);
  });

  it("짧은 글은 한 줄로 둔다", () => {
    expect(wrapText("가나", 10, measure)).toEqual(["가나"]);
  });
});
