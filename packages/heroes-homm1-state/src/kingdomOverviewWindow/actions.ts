export enum KingdomOverviewWindowActionType {
  Open = "kingdomOverviewWindow/open",
  Close = "kingdomOverviewWindow/close",
}

export type KingdomOverviewWindowAction =
  OpenKingdomOverviewWindowAction |
  CloseKingdomOverviewWindowAction;

export interface OpenKingdomOverviewWindowAction {
  readonly type: KingdomOverviewWindowActionType.Open;
}

export const open = (): OpenKingdomOverviewWindowAction => ({
  type: KingdomOverviewWindowActionType.Open,
});

export interface CloseKingdomOverviewWindowAction {
  readonly type: KingdomOverviewWindowActionType.Close;
}

export const close = (): CloseKingdomOverviewWindowAction => ({
  type: KingdomOverviewWindowActionType.Close,
});
