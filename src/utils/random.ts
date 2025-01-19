import words from "../data/word-lists.json";

export function getRandomWord(type: "adjectives" | "nouns"): string {
  const list = words[type];
  return list[Math.floor(Math.random() * list.length)];
}