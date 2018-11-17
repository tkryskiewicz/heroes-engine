import {
  enoughResources,
  multiplyResources,
  Resources,
  subtractResources,
} from "./Resource";

describe("multiplyResources", () => {
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

  it("should return empty when no resources", () => {
    const resources: Resources = {};

    const result = multiplyResources(resources, 1);

    const expected: Resources = {};

    expect(result).toEqual(expected);
  });

  it("should clear all resources when multiplying by zero", () => {
    const resources: Resources = {
      resource: 1,
    };

    const result = multiplyResources(resources, 0);

    const expected: Resources = {
      resource: 0,
    };

    expect(result).toEqual(expected);
  });

  it("should allow negative multiplier", () => {
    const resources: Resources = {
      resource: 1,
    };

    const result = multiplyResources(resources, -1);

    const expected: Resources = {
      resource: -1,
    };

    expect(result).toEqual(expected);
  });
});

describe("enoughResources", () => {
  it("should return true when enough resources", () => {
    const resources: Resources = {
      resource: 1,
    };

    const result = enoughResources(resources, { resource: 1 });

    expect(result).toBe(true);
  });

  it("should return false when not enough resources", () => {
    const resources: Resources = {
      resource: 0,
    };

    const result = enoughResources(resources, { resource: 1 });

    expect(result).toBe(false);
  });

  it("should return false when resource is missing", () => {
    const resources: Resources = {};

    const result = enoughResources(resources, { resource: 1 });

    expect(result).toBe(false);
  });

  it("should return true when resource is missing but not required", () => {
    const resources: Resources = {};

    const result = enoughResources(resources, { resource: 0 });

    expect(result).toBe(true);
  });

  it("should return true when no resources required", () => {
    const resources: Resources = {
      resource: 1,
    };

    const result = enoughResources(resources, {});

    expect(result).toBe(true);
  });

  it("should return true when negative amount required", () => {
    const resources: Resources = {
      resource: 0,
    };

    const result = enoughResources(resources, { resource: -1 });

    expect(result).toBe(true);
  });

  it("should return true when negative amount and none required", () => {
    const resources: Resources = {
      resource: -1,
    };

    const result = enoughResources(resources, { resource: 0 });

    expect(result).toBe(true);
  });
});

describe("subtractResources", () => {
  it("should currectly calculate amount", () => {
    const resources: Resources = {
      resource: 1,
    };

    const result = subtractResources(resources, { resource: 1 });

    const expected: Resources = {
      resource: 0,
    };

    expect(result).toEqual(expected);
  });

  it("should handle missing resources", () => {
    const resources: Resources = {};

    const result = subtractResources(resources, { resource: 1 });

    const expected: Resources = {
      resource: -1,
    };

    expect(result).toEqual(expected);
  });

  it("should not change resources when empty", () => {
    const resources: Resources = {
      resource: 1,
    };

    const result = subtractResources(resources, {});

    const expected: Resources = {
      resource: 1,
    };

    expect(result).toEqual(expected);
  });

  it("should add resources when negative amount", () => {
    const resources: Resources = {
      resource: 1,
    };

    const result = subtractResources(resources, { resource: -1 });

    const expected: Resources = {
      resource: 2,
    };

    expect(result).toEqual(expected);
  });
});
