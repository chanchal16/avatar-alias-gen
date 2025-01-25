import { generateClassicUsername } from "./themes/classic";
import { generateEmotionalUsername } from "./themes/emotional";
import { generateElementalUsername } from "./themes/elemental";
import { generateTechUsername } from "./themes/tech";
import { Options } from "./types/types";
import { generateAvatar } from "./utils/avatar";

export async function generateUsernameAndAvatar({
  theme,
  separator = false,
}: Options): Promise<{ username: string; avatar: string }> {
  let username = "";
  switch (theme) {
    case "classic":
      username = generateClassicUsername();
      break;
    case "emotional":
      username = generateEmotionalUsername();
      break;
    case "elemental":
      username = generateElementalUsername();
      break;
    case "tech":
      username = generateTechUsername();
      break;
    default:
      username = generateClassicUsername();
  }
  if (separator) {
    username = username.replace(/([a-z])([A-Z])/g, "$1_$2").toLowerCase();
  }

  username = username.toLowerCase();

  // Generate avatar based on the theme and username
  const avatar = await generateAvatar(theme, username);
  return { username, avatar };
}
export { generateAvatar };