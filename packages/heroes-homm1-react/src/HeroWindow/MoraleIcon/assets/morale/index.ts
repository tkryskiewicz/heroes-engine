const pattern = /morale-([a-z]+)\.png/;

const req = require.context(".", false, /morale-([a-z]+)\.png/);

export const moraleImages = req.keys().reduce<{ readonly [index: string]: string }>((p, key) => {
  const index = key.match(pattern)![1];

  return {
    ...p,
    [index]: req(key),
  };
}, {});
