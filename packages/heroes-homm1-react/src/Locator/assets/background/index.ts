const pattern = /background-(\d+)\.jpg$/;

const req = require.context(".", false, /background-(\d+)\.jpg$/);

export const backgroundImages = req.keys().reduce<{ readonly [index: number]: string }>((p, key) => {
  const index = Number(key.match(pattern)![1]);

  return {
    ...p,
    [index]: req(key),
  };
}, {});
