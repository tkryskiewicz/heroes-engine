export enum LocatorType {
  Hero = "hero",
  Town = "town",
}

export interface Locator {
  type: LocatorType;
  index: number;
}

export interface LocatorsState {
  selectedLocator?: Locator;
}
