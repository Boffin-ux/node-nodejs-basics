import { readdir } from 'fs/promises';
import { getPath } from '../helpers/getPath.js';

const OUTPUT_FOLDER = 'files';
const ERROR_MESSAGE = 'FS operation failed';

const list = async () => {
	const path = getPath(import.meta.url, OUTPUT_FOLDER);

	try {
		const files = await readdir(path);
		console.log(...files);
	} catch (err) {
		throw new Error(ERROR_MESSAGE);
	}
};

await list();