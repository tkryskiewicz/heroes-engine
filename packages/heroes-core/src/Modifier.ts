export interface SimpleModifier {
  readonly type: "add" | "multiply";
  readonly value: number;
}

export const isSimpleModifier = (value: SimpleModifier | ComplexModifier): value is SimpleModifier =>
  (value.type === "add" || value.type === "multiply") && typeof value.value === "number";

export const applySimpleModifier = (value: number, modifier: SimpleModifier): number => {
  switch (modifier.type) {
    case "add":
      return value + modifier.value;
    case "multiply":
      return value * modifier.value;
  }

  return value;
};

export interface ComplexModifier {
  readonly [type: string]: SimpleModifier | undefined;
}

export const applyComplexModifier = (value: number, modifier: ComplexModifier, type: string): number => {
  const simpleModifier = modifier[type];

  if (!simpleModifier) {
    return value;
  }

  return applySimpleModifier(value, simpleModifier);
};

export type Modifier = SimpleModifier | ComplexModifier;

export const hasModifierFor = (modifier: Modifier | undefined, type: string): boolean =>
  modifier !== undefined && (isSimpleModifier(modifier) || modifier[type] !== undefined);

export const getModifierFor = (modifier: Modifier | undefined, type: string): SimpleModifier | undefined =>
  modifier && (isSimpleModifier(modifier) ? modifier : modifier[type]);

export const applyModifier = (value: number, modifier: Modifier | undefined, type: string = ""): number => {
  if (!modifier) {
    return value;
  }

  return isSimpleModifier(modifier) ?
    applySimpleModifier(value, modifier) :
    applyComplexModifier(value, modifier, type);
};
