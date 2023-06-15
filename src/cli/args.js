const MASK = '--';

const parseArgs = () => {
  const res = process.argv.slice(2).reduce((acc, arg, i, arr) => {
    if (i % 2 === 0 && arg.includes(MASK)) {
      acc.push(`${arg.slice(2)} is ${arr[i + 1]}`);
    }
    return acc;
  }, []);

  console.log(res.join(', '));
};

parseArgs();
