import { heroes } from "heroes-homm1";

export const heroOptions: { [s: string]: string } = heroes.reduce((p: { [id: string]: string }, c) => {
  p[c.name] = c.id;

  return p;
}, {});
