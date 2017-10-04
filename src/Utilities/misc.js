export const escapeChar = text => text
  .replace(/\r?\n/g, '')
  .replace(/[\u0080-\uFFFF]/g, '');
