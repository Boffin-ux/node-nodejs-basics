import { Transform } from 'node:stream';

const transform = async () => {
  const reverseText = new Transform({
    transform(chunk, encoding, next) {
      this.push(`${chunk.toString().trim().split('').reverse().join('')} \n`);
      next();
    },
  });

  process.stdin.pipe(reverseText).pipe(process.stdout);
};

await transform();