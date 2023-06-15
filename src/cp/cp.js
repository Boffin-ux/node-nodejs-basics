import { fork } from 'child_process';
import { getPath } from '../helpers/getPath.js';

const FILE = 'script.js';
const FOLDER = 'files';

const spawnChildProcess = async (args) => {
  const pathFile = getPath(import.meta.url, FOLDER, FILE);

  fork(pathFile, args)
};

// Put your arguments in function call to test this functionality
spawnChildProcess(/*['someArgument1', 'someArgument2']*/);
