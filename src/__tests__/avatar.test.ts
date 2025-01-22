import { describe, it, expect } from "vitest";
import { generateAvatar } from "../utils/avatar"; 

describe("Avatar Generator", () => {
  it("should generate a valid DiceBear avatar URL for the classic theme", async () => {
    const username = "testuser123";
    const avatar = await generateAvatar("classic", username);
    expect(avatar).toBe(
      `https://api.dicebear.com/9.x/rings/svg?seed=${username}`
    );
  });

  it("should generate a valid DiceBear avatar URL for the emotional theme", async () => {
    const username = "joydancingfire";
    const avatar = await generateAvatar("emotional", username);
    expect(avatar).toBe(
      `https://api.dicebear.com/9.x/fun-emoji/svg?seed=${username}`
    );
  });

  it("should generate a valid DiceBear avatar URL for the elemental theme", async () => {
    const username = "windemeralddwell";
    const avatar = await generateAvatar("elemental", username);
    expect(avatar).toBe(
      `https://api.dicebear.com/9.x/glass/svg?seed=${username}`
    );
  });

  it("should generate a valid DiceBear avatar URL for the tech theme", async () => {
    const username = "usernotfound404";
    const avatar = await generateAvatar("tech", username);
    expect(avatar).toBe(
      `https://api.dicebear.com/9.x/bottts/svg?seed=${username}`
    );
  });
});
