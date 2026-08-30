import { describe, expect, it } from "vitest";

describe("CI publication gate demonstration", () => {
  it("deliberately fails so image publication must be skipped", () => {
    expect("frontend tests failed").toBe("images may be published");
  });
});
