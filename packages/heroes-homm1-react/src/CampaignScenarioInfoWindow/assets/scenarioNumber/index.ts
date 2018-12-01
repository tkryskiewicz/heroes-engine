const pattern = /(\d+)\.png$/;

const req = require.context(".", false, /(\d+)\.png$/);

export const scenarioNumberImages = req.keys().reduce<{ [index: number]: string }>((p, key) => {
  const index = Number(key.match(pattern)![1]);

  p[index] = req(key);

  return p;
}, {});
