import { Alignment, HeroClass, heroes } from "heroes-homm1";

interface SelectOptions {
  [s: string]: string;
}

export const alignmentOptions = Object.keys(Alignment).reduce<SelectOptions>((p, c: any) => {
  p[c] = Alignment[c];

  return p;
}, {});

export const heroClassOptions = Object.keys(HeroClass).reduce<SelectOptions>((p, c: any) => {
  p[c] = HeroClass[c];

  return p;
}, {});

export const heroOptions = heroes.reduce<SelectOptions>((p, c) => {
  p[c.name] = c.id;

  return p;
}, {});
