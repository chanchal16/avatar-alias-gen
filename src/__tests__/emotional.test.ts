import { describe, it, expect } from "vitest";
import { generateEmotionalUsername } from "../themes/emotional";
// Adjust path to the function

describe("Username Generator", () => {
  it("should generate a emotional username in the format Emotion + Verb + Element", () => {
    const username = generateEmotionalUsername();
    expect(username).toMatch(/^[A-Za-z]+[A-Za-z]+[A-Za-z]+$/);
  });

  it("should generate a unique username on each call", () => {
    const username1 = generateEmotionalUsername();
    const username2 = generateEmotionalUsername();
    expect(username1).not.toBe(username2);
  });
});