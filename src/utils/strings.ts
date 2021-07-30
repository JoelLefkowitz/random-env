export const splitLines = (lines: string): string[] =>
  lines
    .split('')
    .filter((i) => i != ' ')
    .join('')
    .split('\n')
    .filter((i) => i != '');
