const pattern = /puzzle-(\d+)\.png$/;

const req = require.context(".", false, /puzzle-(\d+)\.png$/);

export const puzzleImages = req.keys().reduce<{ readonly [index: number]: string }>((p, key) => {
  const index = Number(key.match(pattern)![1]);

  return {
    ...p,
    [index]: req(key),
  };
}, {});
