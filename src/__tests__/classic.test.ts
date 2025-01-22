import { describe, it, expect } from "vitest";
import { generateClassicUsername } from "../themes/classic";
// Adjust path to the function

describe("Username Generator", () => {
  it("should generate a classic username in the format Adjective + Noun + Number", () => {
    const username = generateClassicUsername();
    expect(username).toMatch(/^[A-Za-z]+[A-Za-z]+\d+$/); // Regex for "AdjectiveNoun123"
  });

  it("should generate a unique username on each call", () => {
    const username1 = generateClassicUsername();
    const username2 = generateClassicUsername();
    expect(username1).not.toBe(username2);
  });
});