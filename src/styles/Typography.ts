export type HeadingLevel = 1 | 2 | 3 | 4;

export type TextVariant =
  | "body"
  | "lead"
  | "small"
  | "muted";

export const typography = {
  h1: "text-4xl font-bold leading-tight tracking-tight lg:text-5xl xl:text-6xl",

  h2: "text-4xl font-bold tracking-tight md:text-5xl",

  h3: "text-2xl font-semibold tracking-tight md:text-3xl",

  h4: "text-xl font-semibold",

  body: "text-base leading-7",

  lead: "text-lg leading-8 md:text-xl",

  small: "text-sm leading-6",

  muted: "text-sm opacity-70",
};