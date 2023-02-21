export const lines = (str: string): string[] =>
  str
    .split("")
    .filter((i) => i !== " ")
    .join("")
    .split("\n")
    .filter((i) => i !== "");
