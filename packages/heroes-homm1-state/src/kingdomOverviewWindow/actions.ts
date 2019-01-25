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

export const openKingdomOverviewWindow = (): OpenKingdomOverviewWindowAction => ({
  type: KingdomOverviewWindowActionType.Open,
});

export interface CloseKingdomOverviewWindowAction {
  readonly type: KingdomOverviewWindowActionType.Close;
}

export const closeKingdomOverviewWindow = (): CloseKingdomOverviewWindowAction => ({
  type: KingdomOverviewWindowActionType.Close,
});
