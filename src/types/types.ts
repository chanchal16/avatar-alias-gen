export type Theme = "classic" | "emotional" | "elemental" | "tech";

export type wordType =
  | "adjectives"
  | "nouns"
  | "verbs"
  | "emotions"
  | "elements"
  | "colors"
  | "tech";

export type Options = {
  theme: Theme;
  separator?: boolean;
};