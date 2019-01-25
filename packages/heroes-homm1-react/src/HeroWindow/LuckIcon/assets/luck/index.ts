const pattern = /luck-([a-z]+)\.png/;

const req = require.context(".", false, /luck-([a-z]+)\.png/);

export const luckImages = req.keys().reduce<{ readonly [index: string]: string }>((p, key) => {
  const index = key.match(pattern)![1];

  return {
    ...p,
    [index]: req(key),
  };
}, {});
