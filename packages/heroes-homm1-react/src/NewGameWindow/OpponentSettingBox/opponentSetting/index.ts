const pattern = /opponent-([a-z]+)\.jpg$/;

const req = require.context(".", false, /opponent-([a-z]+)\.jpg$/);

export const opponentSettingImages = req.keys().reduce<{ [index: string]: string }>((p, key) => {
  const index = key.match(pattern)![1];

  p[index] = req(key);

  return p;
}, {});
