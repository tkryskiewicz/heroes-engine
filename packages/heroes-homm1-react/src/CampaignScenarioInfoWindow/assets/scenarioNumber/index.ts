const pattern = /(\d+)\.png$/;

const req = require.context(".", false, /(\d+)\.png$/);

export const scenarioNumberImages = req.keys().reduce<{ readonly [index: number]: string }>((p, key) => {
  const index = Number(key.match(pattern)![1]);

  return {
    ...p,
    [index]: req(key),
  };
}, {});
