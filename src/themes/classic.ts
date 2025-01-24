import { getRandomWord } from "../utils/random";

export const generateClassicUsername = (): string => {
  const adjective = getRandomWord("adjectives");
  const noun = getRandomWord("nouns");
  const number = Math.floor(Math.random() * 999);
  return `${adjective}${noun}${number}`;
};