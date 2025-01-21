// DiceBear API base URL
const DICEBEAR_API_URL = "https://api.dicebear.com/9.x/";

/**
 * Generates a dynamic avatar URL using the DiceBear API based on the theme.
 * @param theme - The theme of the avatar (classic, emotional, elemental, tech).
 * @param username - The username or seed to ensure unique avatars for different users.
 * @returns {string} - The avatar URL.
 */
export async function generateAvatar(
  theme: string,
  username: string
): Promise<string> {
  let avatarUrl = "";

  const seed = username.toLowerCase(); // Use the username as a seed for consistency

  switch (theme) {
    case "classic":
      avatarUrl = `${DICEBEAR_API_URL}rings/svg?seed=${seed}`; // Ring avatar style
      break;
    case "emotional":
      avatarUrl = `${DICEBEAR_API_URL}fun-emoji/svg?seed=${seed}`; // Fun emoji style
      break;
    case "elemental":
      avatarUrl = `${DICEBEAR_API_URL}glass/svg?seed=${seed}`; // Glass style
      break;
    case "tech":
      avatarUrl = `${DICEBEAR_API_URL}bottts/svg?seed=${seed}`; // Bottts style
      break;
    default:
      avatarUrl = `${DICEBEAR_API_URL}rings/svg?seed=${seed}`;
  }

  return avatarUrl;
}