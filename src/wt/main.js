import { Worker } from 'worker_threads';
import { cpus } from 'os';
import { getPath } from '../helpers/getPath.js';


const FILE = 'worker.js';
const START_NUM = 10;

const performCalculations = async () => {
  const workerPath = getPath(import.meta.url, FILE);
  const coresCpu = cpus();

  const getWorker = async (num = START_NUM) => {
    return new Promise((resolve, reject) => {
      const worker = new Worker(workerPath, { workerData: num })
      worker.on('message', resolve);
      worker.on('error', reject);
    })
  }

  const resultWorkers = await Promise.allSettled(coresCpu.map(async (_, i) => {
    return await getWorker(START_NUM + i);
  }));

  const result = resultWorkers.map(({ status, value }) => {
    if (status === 'fulfilled') {
      return { status: 'resolved', data: value };
    }

    return { status: 'error', data: null };
  });

  console.log(result);
};

await performCalculations();