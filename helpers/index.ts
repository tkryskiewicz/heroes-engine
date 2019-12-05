export const noop = () => undefined;

export const isDefined = <T>(value: T | undefined): value is T =>
  value !== undefined;
