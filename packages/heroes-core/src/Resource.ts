export interface Resources {
  [resource: string]: number;
}

export const multiplyResources = (resources: Resources, multiplier: number): Resources =>
  Object.keys(resources).reduce<Resources>((p, c) => {
    p[c] = resources[c] * multiplier;

    return p;
  }, {});

export const enoughResources = (resourcesA: Resources, resourcesB: Resources): boolean =>
  Object.keys(resourcesB).every((r) => resourcesB[r] <= resourcesA[r]);
