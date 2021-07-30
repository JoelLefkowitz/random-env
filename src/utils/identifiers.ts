export const isValidIdentifier = (name: string): boolean =>
  /[a-zA-Z_]+[a-zA-Z0-9_]*/.test(name);
