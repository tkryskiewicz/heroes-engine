const pattern = /difficulty-([a-z]+)\.jpg/;

const req = require.context(".", false, /difficulty-([a-z]+)\.jpg/);

export const difficultyImages = req.keys().reduce<{ readonly [index: string]: string }>((p, key) => {
  const index = key.match(pattern)![1];

  return {
    ...p,
    [index]: req(key),
  };
}, {});
