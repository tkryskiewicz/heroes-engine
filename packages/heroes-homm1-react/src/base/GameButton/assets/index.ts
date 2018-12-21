const pattern = /([a-z-]+)\/([a-z-]+)\/(enabled|disabled)\.png$/;

const req = require.context(".", true, /([a-z-]+)\/([a-z-]+)\/(enabled|disabled)\.png$/);

interface ButtonImages {
  enabled: string;
  disabled: string;
  [index: string]: string;
}

interface ButtonGroupImages {
  [type: string]: ButtonImages;
}

export const buttonImages = req.keys().reduce<{ [group: string]: ButtonGroupImages }>((p, key) => {
  const [, group, type, state] = key.match(pattern)!;

  // FIXME: simplify???
  p[group] = {
    ...p[group],
  };

  p[group][type] = {
    ...p[group][type],
  };

  p[group][type][state] = req(key);

  return p;
}, {});
