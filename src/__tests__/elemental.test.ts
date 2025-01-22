import { describe, it, expect } from "vitest";
import { generateElementalUsername } from "../themes/elemental";
// Adjust path to the function

describe("Username Generator", () => {
  it("should generate a elemental username in the format Color + Element + Verb", () => {
    const username = generateElementalUsername();
    expect(username).toMatch(/^[A-Za-z]+[A-Za-z]+[A-Za-z]+$/);
  });

  it("should generate a unique username on each call", () => {
    const username1 = generateElementalUsername();
    const username2 = generateElementalUsername();
    expect(username1).not.toBe(username2);
  });
});