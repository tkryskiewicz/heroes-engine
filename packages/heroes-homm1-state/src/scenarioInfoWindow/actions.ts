export enum ScenarioInfoWindowActionType {
  Open = "scenarioInfoWindow/open",
  Close = "scenarioInfoWindow/close",
}

export type ScenarioInfoWindowAction =
  OpenScenarioInfoWindowAction |
  CloseScenarioInfoWindowAction;

export interface OpenScenarioInfoWindowAction {
  readonly type: ScenarioInfoWindowActionType.Open;
}

export const open = (): OpenScenarioInfoWindowAction => ({
  type: ScenarioInfoWindowActionType.Open,
});

export interface CloseScenarioInfoWindowAction {
  readonly type: ScenarioInfoWindowActionType.Close;
}

export const close = (): CloseScenarioInfoWindowAction => ({
  type: ScenarioInfoWindowActionType.Close,
});
