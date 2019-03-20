export enum ScenarioInfoWindowActionType {
  Open = "scenarioInfoWindow/open",
  Close = "scenarioInfoWindow/close",
}

export type ScenarioInfoWindowAction =
  OpenAction |
  CloseAction;

export interface OpenAction {
  readonly type: ScenarioInfoWindowActionType.Open;
}

export const open = (): OpenAction => ({
  type: ScenarioInfoWindowActionType.Open,
});

export interface CloseAction {
  readonly type: ScenarioInfoWindowActionType.Close;
}

export const close = (): CloseAction => ({
  type: ScenarioInfoWindowActionType.Close,
});
