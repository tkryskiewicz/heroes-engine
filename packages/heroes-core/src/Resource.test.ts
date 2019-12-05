import {
  addResources,
  areResourcesValid,
  divideResources,
  enoughResources,
  multiplyResources,
  Resources,
  subtractResources,
} from "./Resource";

describe("areResourcesValid", () => {
  it("should return true when resources are empty", () => {
    const resources: Resources = {};

    const result = areResourcesValid(resources);

    expect(result).toBe(true);
  });

  it("should return true when amount is zero", () => {
    const resources: Resources = {
      resource: 0,
    };

    const result = areResourcesValid(resources);

    expect(result).toBe(true);
  });

  it("should return true when amount is positive", () => {
    const resources: Resources = {
      resource: 1,
    };

    const result = areResourcesValid(resources);

    expect(result).toBe(true);
  });

  it("should return false when amount is negative", () => {
    const resources: Resources = {
      resource: -1,
    };

    const result = areResourcesValid(resources);

    expect(result).toBe(false);
  });
});

describe("multiplyResources", () => {
  it("should return empty resources when resources are empty", () => {
    const resources: Resources = {};

    const result = multiplyResources(resources, 2);

    const expected: Resources = {};

    expect(result).toEqual(expected);
  });

  it("should correctly calculate amount", () => {
    const resources: Resources = {
      resource: 1,
    };

    const result = multiplyResources(resources, 2);

    const expected: Resources = {
      resource: 2,
    };

    expect(result).toEqual(expected);
  });

  it("should handle multiple resources", () => {
    const resources: Resources = {
      resourceA: 1,
      resourceB: 2,
    };

    const result = multiplyResources(resources, 2);

    const expected: Resources = {
      resourceA: 2,
      resourceB: 4,
    };

    expect(result).toEqual(expected);
  });

  it("should zero amount when multiplying by zero", () => {
    const resources: Resources = {
      resource: 1,
    };

    const result = multiplyResources(resources, 0);

    const expected: Resources = {
      resource: 0,
    };

    expect(result).toEqual(expected);
  });

  it("should throw when multiplier is negative", () => {
    const resources: Resources = {
      resource: 1,
    };

    expect(() => multiplyResources(resources, -1)).toThrowError();
  });

  it("shoud throw when resources are invalid", () => {
    const resources: Resources = {
      resource: -1,
    };

    expect(() => multiplyResources(resources, 2)).toThrowError();
  });
});

describe("divideResources", () => {
  it("should return zero when resources are missing", () => {
    const resources: Resources = {};

    const amount: Resources = {
      resource: 1,
    };

    const result = divideResources(resources, amount);

    expect(result).toBe(0);
  });

  it("should return zero when not enough resources", () => {
    const resources: Resources = {
      resource: 1,
    };

    const amount: Resources = {
      resource: 2,
    };

    const result = divideResources(resources, amount);

    expect(result).toBe(0);
  });

  it("should return correct multiplier", () => {
    const resources: Resources = {
      resource: 2,
    };

    const amount: Resources = {
      resource: 1,
    };

    const result = divideResources(resources, amount);

    expect(result).toBe(2);
  });

  it("should return lowest multiplier when multiple resources", () => {
    const resources: Resources = {
      resourceA: 1,
      resourceB: 2,
    };

    const amount: Resources = {
      resourceA: 1,
      resourceB: 1,
    };

    const result = divideResources(resources, amount);

    expect(result).toBe(1);
  });

  it("should return divide by one when amount is zero", () => {
    const resources: Resources = {
      resource: 1,
    };

    const amount: Resources = {
      resource: 0,
    };

    const result = divideResources(resources, amount);

    expect(result).toBe(1);
  });
});

describe("enoughResources", () => {
  it("should return true when enough resources", () => {
    const resources: Resources = {
      resource: 1,
    };

    const amount: Resources = {
      resource: 1,
    };

    const result = enoughResources(resources, amount);

    expect(result).toBe(true);
  });

  it("should return true when more than enough resources", () => {
    const resources: Resources = {
      resource: 2,
    };

    const amount: Resources = {
      resource: 1,
    };

    const result = enoughResources(resources, amount);

    expect(result).toBe(true);
  });

  it("should return false when not enough resources", () => {
    const resources: Resources = {
      resource: 0,
    };

    const amount: Resources = {
      resource: 1,
    };

    const result = enoughResources(resources, amount);

    expect(result).toBe(false);
  });

  it("should return false when required resource is missing", () => {
    const resources: Resources = {};

    const amount: Resources = {
      resource: 1,
    };

    const result = enoughResources(resources, amount);

    expect(result).toBe(false);
  });

  it("should return false when resource is missing", () => {
    const resources: Resources = {};

    const amount: Resources = {
      resource: 1,
    };

    const result = enoughResources(resources, amount);

    expect(result).toBe(false);
  });

  it("should return true when resource is missing but not required", () => {
    const resources: Resources = {};

    const amount: Resources = {
      resource: 0,
    };

    const result = enoughResources(resources, amount);

    expect(result).toBe(true);
  });

  it("should return true when no resources required", () => {
    const resources: Resources = {
      resource: 1,
    };

    const amount: Resources = {};

    const result = enoughResources(resources, amount);

    expect(result).toBe(true);
  });

  it("should throw when resources are invalid", () => {
    const resources: Resources = {
      resource: -1,
    };

    const amount: Resources = {
      resource: 1,
    };

    expect(() => enoughResources(resources, amount)).toThrowError();
  });

  it("should throw when amount resources are invalid", () => {
    const resources: Resources = {
      resource: 1,
    };

    const amount: Resources = {
      resource: -1,
    };

    expect(() => enoughResources(resources, amount)).toThrowError();
  });
});

describe("addResources", () => {
  it("should currectly calculate amount", () => {
    const resources: Resources = {
      resource: 0,
    };

    const amount: Resources = {
      resource: 1,
    };

    const result = addResources(resources, amount);

    const expected: Resources = {
      resource: 1,
    };

    expect(result).toEqual(expected);
  });

  it("should handle missing resources", () => {
    const resources: Resources = {};

    const amount: Resources = {
      resource: 1,
    };

    const result = addResources(resources, amount);

    const expected: Resources = {
      resource: 1,
    };

    expect(result).toEqual(expected);
  });

  it("should not change resources when empty", () => {
    const resources: Resources = {
      resource: 1,
    };

    const amount: Resources = {};

    const result = addResources(resources, amount);

    const expected: Resources = {
      resource: 1,
    };

    expect(result).toEqual(expected);
  });

  it("should throw when resources are invalid", () => {
    const resources: Resources = {
      resource: -1,
    };

    const amount: Resources = {
      resource: 1,
    };

    expect(() => addResources(resources, amount)).toThrow();
  });

  it("should throw when amount resources are invalid", () => {
    const resources: Resources = {
      resource: 0,
    };

    const amount: Resources = {
      resource: -1,
    };

    expect(() => addResources(resources, amount)).toThrowError();
  });
});

describe("subtractResources", () => {
  it("should currectly calculate amount", () => {
    const resources: Resources = {
      resource: 1,
    };

    const amount: Resources = {
      resource: 1,
    };

    const result = subtractResources(resources, amount);

    const expected: Resources = {
      resource: 0,
    };

    expect(result).toEqual(expected);
  });

  it("should handle missing resources", () => {
    const resources: Resources = {};

    const amount: Resources = {
      resource: 1,
    };

    const result = subtractResources(resources, amount);

    const expected: Resources = {
      resource: -1,
    };

    expect(result).toEqual(expected);
  });

  it("should not change resources when empty", () => {
    const resources: Resources = {
      resource: 1,
    };

    const amount: Resources = {};

    const result = subtractResources(resources, amount);

    const expected: Resources = {
      resource: 1,
    };

    expect(result).toEqual(expected);
  });

  it("should throw when resources are invalid", () => {
    const resources: Resources = {
      resource: -1,
    };

    const amount: Resources = {
      resource: 1,
    };

    expect(() => subtractResources(resources, amount)).toThrow();
  });

  it("should throw when amount resources are invalid", () => {
    const resources: Resources = {
      resource: 1,
    };

    const amount: Resources = {
      resource: -1,
    };

    expect(() => subtractResources(resources, amount)).toThrowError();
  });
});
