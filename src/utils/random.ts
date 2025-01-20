import words from "../data/word-lists.json";
import { wordType } from "../types/types";

export function getRandomWord(type: wordType): string {
  const list = words[type];
  return list[Math.floor(Math.random() * list.length)];
}