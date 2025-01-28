import { Options } from "./types/types";
import { generateAvatar } from "./utils/avatar";
import { generateUsername } from "./utils/username";

export async function generateUsernameAndAvatar({
  theme,
  separator = false,
}: Options): Promise<{ username: string; avatar: string }> {
  const username = await generateUsername(theme, separator);
  // Generate avatar based on the theme and username
  const avatar = await generateAvatar(theme, username);
  return { username, avatar };
}
export { generateAvatar };
export { generateUsername };