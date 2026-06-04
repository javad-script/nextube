import { describe, expect, it } from "vitest";

import { cn, isRtl } from "./utils";

describe("isRtl", () => {
  it("returns true for arabic", () => {
    expect(isRtl("ar")).toBe(true);
  });
  it("returns true for persian", () => {
    expect(isRtl("fa")).toBe(true);
  });
  it("returns true for hebrew", () => {
    expect(isRtl("he")).toBe(true);
  });
  it("returns true for urdu", () => {
    expect(isRtl("ur")).toBe(true);
  });
  it("returns true for kurdish", () => {
    expect(isRtl("ku")).toBe(true);
  });
  it("returns true for azerbaijani", () => {
    expect(isRtl("az")).toBe(true);
  });
  it("returns false for english", () => {
    expect(isRtl("en")).toBe(false);
  });
});

describe("cn", () => {
  it("returns a className", () => {
    expect(cn("flex", "items-center", "justify-center")).toBe("flex items-center justify-center");
  });
  it("returns a className with tailwind-merge", () => {
    expect(cn("flex", "items-center", "justify-center")).toBe("flex items-center justify-center");
  });
});
