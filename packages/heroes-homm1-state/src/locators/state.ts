export enum LocatorType {
  Hero = "hero",
  Town = "town",
}

export interface Locator {
  readonly type: LocatorType;
  readonly index: number;
}

export interface LocatorsState {
  readonly selectedLocator?: Locator;
}
