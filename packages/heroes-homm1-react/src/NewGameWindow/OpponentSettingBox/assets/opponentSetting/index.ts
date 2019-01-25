const pattern = /opponent-([a-z]+)\.jpg$/;

const req = require.context(".", false, /opponent-([a-z]+)\.jpg$/);

export const opponentSettingImages = req.keys().reduce<{ readonly [index: string]: string }>((p, key) => {
  const index = key.match(pattern)![1];

  return {
    ...p,
    [index]: req(key),
  };
}, {});
