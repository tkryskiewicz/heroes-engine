const pattern = /([a-z]+)\.jpg$/;

const req = require.context(".", false, /([a-z]+)\.jpg$/);

export const movementSpeedImages = req.keys().reduce<{ readonly [index: string]: string }>((p, key) => {
  const index = key.match(pattern)![1];

  return {
    ...p,
    [index]: req(key),
  };
}, {});
