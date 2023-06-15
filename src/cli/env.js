const KEY_MASK = 'RSS_';

const parseEnv = () => {
  const rssKey = Object.entries(process.env).reduce((acc, value) => {
    if (value[0].includes(KEY_MASK)) {
      acc.push(value.join('='));
    }
    return acc;
  }, []);

  console.log(`${rssKey.join('; ')}\n`);
};

parseEnv();