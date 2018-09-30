import { Alignment, creatures, HeroClass, heroes, Resource, Skill, TownId } from "heroes-homm1";

interface SelectOptions {
  [s: string]: string;
}

export const alignmentOptions = Object.keys(Alignment).reduce<SelectOptions>((p, c: any) => {
  p[c] = Alignment[c];

  return p;
}, {});

export const resourceOptions = Object.keys(Resource).reduce<SelectOptions>((p, c: any) => {
  p[c] = Resource[c];

  return p;
}, {});

export const heroClassOptions = Object.keys(HeroClass).reduce<SelectOptions>((p, c: any) => {
  p[c] = HeroClass[c];

  return p;
}, {});

// TODO: names should have spaces
export const skillOptions = Object.keys(Skill).reduce<SelectOptions>((p, c: any) => {
  p[c] = Skill[c];

  return p;
}, {});

export const heroOptions = heroes.reduce<SelectOptions>((p, c) => {
  p[c.name] = c.id;

  return p;
}, {});

export const townOptions = Object.keys(TownId).reduce<SelectOptions>((p, c: any) => {
  p[c] = TownId[c];

  return p;
}, {});

export const creatureOptions = creatures.reduce<SelectOptions>((p, c) => {
  p[c.id] = c.id;

  return p;
}, {});
