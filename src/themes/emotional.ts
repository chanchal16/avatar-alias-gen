import { getRandomWord } from "../utils/random";

export const generateEmotionalUsername = (): string => {
  const emotion = getRandomWord("emotions");
  const verb = getRandomWord("verbs");
  const element = getRandomWord("elements");
  return `${emotion}${verb}${element}`;
};