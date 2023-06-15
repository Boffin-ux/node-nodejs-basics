import { createReadStream } from 'fs';
import { getPath } from '../helpers/getPath.js';
import { createHash } from 'crypto';

const FILE = 'fileToCalculateHashFor.txt';
const OUTPUT_FOLDER = 'files';
const ALGORITHM = 'sha256';
const ENCODE_STD = 'hex';

const calculateHash = async () => {
  const pathFile = getPath(import.meta.url, OUTPUT_FOLDER, FILE);

  try {
    const input = createReadStream(pathFile);
    const hash = createHash(ALGORITHM).update(input.toString()).digest(ENCODE_STD);

    process.stdout.write(`${hash}\n`);
  } catch (err) {
    throw err;
  }
};

await calculateHash();