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

export const openScenarioInfoWindow = (): OpenScenarioInfoWindowAction => ({
  type: ScenarioInfoWindowActionType.Open,
});

export interface CloseScenarioInfoWindowAction {
  readonly type: ScenarioInfoWindowActionType.Close;
}

export const closeScenarioInfoWindow = (): CloseScenarioInfoWindowAction => ({
  type: ScenarioInfoWindowActionType.Close,
});
