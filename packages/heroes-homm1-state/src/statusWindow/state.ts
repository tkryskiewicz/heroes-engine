export enum StatusWindowOption {
  DateInformation = "date-information",
  ResourceSummary = "resource-summary",
  HeroStatus = "hero-status",
}

export interface StatusWindowState {
  readonly selectedOption: StatusWindowOption;
}
