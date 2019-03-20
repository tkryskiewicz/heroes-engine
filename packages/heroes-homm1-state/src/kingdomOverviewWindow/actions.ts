export enum KingdomOverviewWindowActionType {
  Open = "kingdomOverviewWindow/open",
  Close = "kingdomOverviewWindow/close",
}

export type KingdomOverviewWindowAction =
  OpenAction |
  CloseAction;

export interface OpenAction {
  readonly type: KingdomOverviewWindowActionType.Open;
}

export const open = (): OpenAction => ({
  type: KingdomOverviewWindowActionType.Open,
});

export interface CloseAction {
  readonly type: KingdomOverviewWindowActionType.Close;
}

export const close = (): CloseAction => ({
  type: KingdomOverviewWindowActionType.Close,
});
