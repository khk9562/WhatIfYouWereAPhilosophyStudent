import { getBasename } from "./basename";

describe("getBasename", () => {
  it("단독 주소에서는 /", () => {
    expect(getBasename("/")).toBe("/");
    expect(getBasename("/select")).toBe("/");
    expect(getBasename("/result")).toBe("/");
  });

  it("포털 하위 경로에서는 그 경로", () => {
    expect(getBasename("/games/philosophy/")).toBe("/games/philosophy");
    expect(getBasename("/games/philosophy/select")).toBe("/games/philosophy");
    expect(getBasename("/games/philosophy/result")).toBe("/games/philosophy");
  });
});
