import { getRandomWord } from "../utils/random";

export function generateClassicUsername(): string {
  const adjective = getRandomWord("adjectives");
  const noun = getRandomWord("nouns");
  const number = Math.floor(Math.random() * 9999);
  return `${adjective}${noun}${number}`;
}
