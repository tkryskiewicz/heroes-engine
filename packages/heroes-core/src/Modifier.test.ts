import {
  applyComplexModifier,
  applyModifier,
  applySimpleModifier,
  ComplexModifier,
  getModifierFor,
  hasModifierFor,
  Modifier,
  SimpleModifier,
} from "./Modifier";

describe("applySimpleModifier", () => {
  it("should apply add modifier", () => {
    const modifier: SimpleModifier = {
      type: "add",
      value: 1,
    };

    const result = applySimpleModifier(1, modifier);

    expect(result).toBe(2);
  });

  it("should apply multiply modifier", () => {
    const modifier: SimpleModifier = {
      type: "multiply",
      value: 2,
    };

    const result = applySimpleModifier(1, modifier);

    expect(result).toBe(2);
  });
});

describe("applyComplexModifier", () => {
  it("should return value when no modifier", () => {
    const modifier: ComplexModifier = {};

    const result = applyComplexModifier(1, modifier, "type");

    expect(result).toBe(1);
  });

  it("should apply modifier", () => {
    const modifier: ComplexModifier = {
      type: {
        type: "add",
        value: 1,
      },
    };

    const result = applyComplexModifier(1, modifier, "type");

    expect(result).toBe(2);
  });
});

describe("hasModifierFor", () => {
  it("should return false when no modifier", () => {
    const result = hasModifierFor(undefined, "type");

    expect(result).toBe(false);
  });

  it("should return true when simple modifier", () => {
    const modifier: SimpleModifier = {
      type: "add",
      value: 1,
    };

    const result = hasModifierFor(modifier, "type");

    expect(result).toBe(true);
  });

  it("should return true when complex modifier and modifier specified", () => {
    const modifier: ComplexModifier = {
      type: {
        type: "add",
        value: 1,
      },
    };

    const result = hasModifierFor(modifier, "type");

    expect(result).toBe(true);
  });

  it("should return false when complex modifier and no modifier specified", () => {
    const modifier: ComplexModifier = {};

    const result = hasModifierFor(modifier, "type");

    expect(result).toBe(false);
  });
});

describe("getModifierFor", () => {
  it("should return undefined when no modifier", () => {
    const result = getModifierFor(undefined, "type");

    expect(result).toBe(undefined);
  });

  it("should return modifier when simple modifier", () => {
    const modifier: SimpleModifier = {
      type: "add",
      value: 1,
    };

    const result = getModifierFor(modifier, "type");

    expect(result).toBe(modifier);
  });

  it("should return modifier when complex modifier and modifier specified", () => {
    const simpleModifier: SimpleModifier = {
      type: "add",
      value: 1,
    };

    const modifier: ComplexModifier = {
      type: simpleModifier,
    };

    const result = getModifierFor(modifier, "type");

    expect(result).toBe(simpleModifier);
  });

  it("should return undefined when complex modifier and no modifier specified", () => {
    const modifier: ComplexModifier = {};

    const result = getModifierFor(modifier, "type");

    expect(result).toBe(undefined);
  });
});

describe("applyModifier", () => {
  it("should return value when no modifier", () => {
    const result = applyModifier(1, undefined);

    expect(result).toBe(1);
  });

  it("should apply simple modifier", () => {
    const modifier: Modifier = {
      type: "add",
      value: 1,
    };

    const result = applyModifier(1, modifier);

    expect(result).toBe(2);
  });

  it("should apply simple modifier when type specified", () => {
    const modifier: Modifier = {
      type: "add",
      value: 1,
    };

    const result = applyModifier(1, modifier, "type");

    expect(result).toBe(2);
  });

  it("should apply complex modifier", () => {
    const modifier: Modifier = {
      type: {
        type: "add",
        value: 1,
      },
    };

    const result = applyModifier(1, modifier, "type");

    expect(result).toBe(2);
  });

  it("should return value when complex modifier and no type", () => {
    const modifier: Modifier = {
      type: {
        type: "add",
        value: 1,
      },
    };

    const result = applyModifier(1, modifier);

    expect(result).toBe(1);
  });
});
