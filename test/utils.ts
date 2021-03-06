import { prettyUnit, padZoneStr, padStart, findShortIndex } from "../src/utils";

describe("Testing utils", () => {
  test("PrettyUnit", () => {
    expect(prettyUnit("Days")).toBe("day");
    expect(prettyUnit("days")).toBe("day");
    expect(prettyUnit("day")).toBe("day");
    expect(prettyUnit()).toBe("");
  });

  test("PadZoneStr", () => {
    expect(padZoneStr(0)).toBe("+00:00");
    expect(padZoneStr(1 * 60)).toBe("-01:00");
    expect(padZoneStr(-1 * 60)).toBe("+01:00");
    expect(padZoneStr(-10 * 60)).toBe("+10:00");
    expect(padZoneStr(10 * 60)).toBe("-10:00");
    expect(padZoneStr((-5 * 60) - 30)).toBe("+05:30");
  });

  test("PadStart", () => {
    expect(padStart(1, 2, "0")).toBe("01");
    expect(padStart(0, 2, "0")).toBe("00");
  });

  test("FindShortIndex", () => {
    expect(findShortIndex(["Jul", "Aug", "Sep"], "Aug", ["July", "August", "September"])).toBe(1);
  });
});
