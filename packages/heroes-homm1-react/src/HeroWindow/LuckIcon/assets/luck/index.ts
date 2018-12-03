const pattern = /luck-([a-z]+)\.png/;

const req = require.context(".", false, /luck-([a-z]+)\.png/);

export const luckImages = req.keys().reduce<{ [index: string]: string }>((p, key) => {
  const index = key.match(pattern)![1];

  p[index] = req(key);

  return p;
}, {});
