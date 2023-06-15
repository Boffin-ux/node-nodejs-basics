import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

export const getPath = (url, ...args) => {
  const baseDir = dirname(fileURLToPath(url));
  return join(baseDir, ...args);
}
