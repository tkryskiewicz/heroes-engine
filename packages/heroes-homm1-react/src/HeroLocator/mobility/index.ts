const pattern = /(\d+)\.png$/;

const req = require.context(".", false, /(\d+)\.png$/);

export const mobilityImages = req.keys().reduce<{ [value: number]: string }>((p, key) => {
  const index = Number(key.match(pattern)![1]);

  p[index] = req(key);

  return p;
}, {});
