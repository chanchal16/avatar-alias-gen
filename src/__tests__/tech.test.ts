import { describe, it, expect } from "vitest";
import { generateTechUsername } from "../themes/tech";
// Adjust path to the function

describe("Username Generator", () => {
  it("should generate a tech username in the format tech term + Element + Number", () => {
    const username = generateTechUsername();
    expect(username).toMatch(/^[A-Za-z]+[A-Za-z]+\d+$/);
  });

  it("should generate a unique username on each call", () => {
    const username1 = generateTechUsername();
    const username2 = generateTechUsername();
    expect(username1).not.toBe(username2);
  });
});