import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream';
import { createGunzip } from 'zlib';
import { getPath } from '../helpers/getPath.js';

const ORIGINAL_FILE = 'archive.gz';
const TARGET_FILE = 'fileToCompress.txt';
const OUTPUT_FOLDER = 'files';

const decompress = async () => {
  const src = getPath(import.meta.url, OUTPUT_FOLDER, ORIGINAL_FILE);
  const target = getPath(import.meta.url, OUTPUT_FOLDER, TARGET_FILE);

  const gunzip = createGunzip();
  const rs = createReadStream(src);
  const ws = createWriteStream(target);

  pipeline(rs, gunzip, ws, (err) => {
    if (err) {
      console.error(err);
      process.exitCode = 1;
    }
  });
};

await decompress();