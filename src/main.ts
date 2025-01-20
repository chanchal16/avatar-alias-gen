import { generateClassicUsername } from "./themes/classic";
import { generateEmotionalUsername } from "./themes/emotional";
import { generateElementalUsername } from "./themes/elemental";
import { generateTechUsername } from "./themes/tech";
import { Options } from "./types/types";

export function generateUsername({ theme, separator = false }: Options): {
  username: string;
} {
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
    username = username.replace(/([A-Z])/g, "_" + "$1").slice(1);
  }
  return { username };
}