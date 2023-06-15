import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream';
import { createGzip } from 'zlib';
import { getPath } from '../helpers/getPath.js';

const ORIGINAL_FILE = 'fileToCompress.txt';
const TARGET_FILE = 'archive.gz';
const OUTPUT_FOLDER = 'files';

const compress = async () => {
  const src = getPath(import.meta.url, OUTPUT_FOLDER, ORIGINAL_FILE);
  const target = getPath(import.meta.url, OUTPUT_FOLDER, TARGET_FILE);

  const gzip = createGzip();
  const rs = createReadStream(src);
  const ws = createWriteStream(target);

  pipeline(rs, gzip, ws, (err) => {
    if (err) {
      console.error(err);
      process.exitCode = 1;
    }
  });
};

await compress();