const pattern = /puzzle-(\d+)\.png$/;

const req = require.context(".", false, /puzzle-(\d+)\.png$/);

export const puzzleImages = req.keys().reduce<{ [index: number]: string }>((p, key) => {
  const index = Number(key.match(pattern)![1]);

  p[index] = req(key);

  return p;
}, {});
