import { describe, it, expect } from "vitest";
import { generateUsernameAndAvatar } from "../main";

describe("generateUsernameAndAvatar", () => {
  it("should add underscores between words when separator is enabled", async () => {
    const resultWithSeparator = await generateUsernameAndAvatar({
      theme: "classic",
      separator: true,
    });
    expect(resultWithSeparator.username).to.match(/_[a-z]+/); // Check for at least one underscore

    const resultWithoutSeparator = await generateUsernameAndAvatar({
      theme: "classic",
      separator: false,
    });
    expect(resultWithoutSeparator.username).not.to.include("_");
  });
});