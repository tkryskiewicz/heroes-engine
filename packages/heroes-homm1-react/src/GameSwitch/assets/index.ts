const pattern = /([a-z-]+)\/([a-z-]+)\.jpg$/;

const req = require.context(".", true, /([a-z-]+)\/([a-z-]+)\.jpg$/);

interface SwitchImages {
  checked: string;
  unchecked: string;
}

export const switchImages = req.keys().reduce<{ [index: string]: SwitchImages }>((p, key) => {
  const [, index, state] = key.match(pattern)!;

  p[index] = {
    ...p[index],
    [state]: req(key),
  };

  return p;
}, {});
