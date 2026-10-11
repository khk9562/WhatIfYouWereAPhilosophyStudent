import { wrapText } from "./resultImage";

// 글자 하나를 폭 1로 본다
const measure = (value: string) => value.length;

describe("wrapText", () => {
  it("최대 폭을 넘기지 않게 글자 단위로 나눈다", () => {
    expect(wrapText("가나다라마바사", 3, measure)).toEqual(["가나다", "라마바", "사"]);
  });

  it("줄 첫머리와 끝의 공백은 버린다", () => {
    expect(wrapText("가나 다라 마바", 3, measure)).toEqual(["가나", "다라", "마바"]);
  });

  it("짧은 글은 한 줄로 둔다", () => {
    expect(wrapText("가나", 10, measure)).toEqual(["가나"]);
  });
});
