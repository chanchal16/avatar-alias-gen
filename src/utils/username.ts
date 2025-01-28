import { generateClassicUsername } from "../themes/classic";
import { generateElementalUsername } from "../themes/elemental";
import { generateEmotionalUsername } from "../themes/emotional";
import { generateTechUsername } from "../themes/tech";

/**
 * Generates a dynamic avatar URL using the DiceBear API based on the theme.
 * @param theme - The theme of the avatar (classic, emotional, elemental, tech).
 * @param separator - separator to add between username
 * @returns {string} - The username.
 */
export async function generateUsername(
  theme: string,
  separator: boolean
): Promise<string> {
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

  return username.toLowerCase();
}