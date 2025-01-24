import { getRandomWord } from "../utils/random";

export const generateTechUsername = (): string => {
  const techTerm = getRandomWord("tech");
  const element = getRandomWord("elements");
  const number = Math.floor(Math.random() * 999);
  return `${techTerm}${element}${number}`;
};