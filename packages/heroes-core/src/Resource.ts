export interface ResourceData {
  readonly id: string;
  readonly mine: string;
}

export interface Resources {
  readonly [resource: string]: number;
}

export const areResourcesValid = (resources: Resources) =>
  Object.keys(resources).every((r) => resources[r] >= 0);

export const multiplyResources = (resources: Resources, multiplier: number): Resources => {
  if (!areResourcesValid(resources)) {
    throw new Error("Resources are not valid");
  }

  if (multiplier < 0) {
    throw new Error("Multiplier must be non-negative");
  }

  return Object.keys(resources).reduce<Resources>((p, c) => {
    return {
      ...p,
      [c]: resources[c] * multiplier,
    };
  }, {});
};

export const divideResources = (resources: Resources, amount: Resources): number =>
  Math.min(
    ...Object.keys(amount)
      .map((r) => Math.floor((resources[r] || 0) / (amount[r] || 1))),
  );

export const enoughResources = (resources: Resources, amount: Resources): boolean => {
  if (!areResourcesValid(resources)) {
    throw new Error("Resources are not valid");
  }

  if (!areResourcesValid(amount)) {
    throw new Error("Amount resources are not valid");
  }

  return Object.keys(amount)
    .filter((r) => amount[r] !== 0)
    .every((r) => amount[r] <= resources[r]);
};

export const addResources = (resources: Resources, amount: Resources): Resources => {
  if (!areResourcesValid(resources)) {
    throw new Error("Resources are not valid");
  }

  if (!areResourcesValid(amount)) {
    throw new Error("Amount resources are not valid");
  }

  return {
    ...resources,
    ...Object.keys(amount).reduce<Resources>((p, c) => {
      return {
        ...p,
        [c]: (resources[c] || 0) + amount[c],
      };
    }, {}),
  };
};

export const subtractResources = (resources: Resources, amount: Resources): Resources => {
  if (!areResourcesValid(resources)) {
    throw new Error("Resources are not valid");
  }

  if (!areResourcesValid(amount)) {
    throw new Error("Amount resources are not valid");
  }

  return {
    ...resources,
    ...Object.keys(amount).reduce<Resources>((p, c) => {
      return {
        ...p,
        [c]: (resources[c] || 0) - amount[c],
      };
    }, {}),
  };
};
