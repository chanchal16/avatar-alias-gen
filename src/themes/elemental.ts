import { getRandomWord } from "../utils/random";

export const generateElementalUsername = (): string => {
  const color = getRandomWord("colors");
  const verb = getRandomWord("verbs");
  const element = getRandomWord("elements");
  return `${element}${color}${verb}`.toLowerCase();
};