export enum KingdomOverviewWindowActionType {
  Open = "kingdomOverviewWindow/open",
  Close = "kingdomOverviewWindow/close",
}

export type KingdomOverviewWindowAction =
  OpenKingdomOverviewWindowAction |
  CloseKingdomOverviewWindowAction;

export interface OpenKingdomOverviewWindowAction {
  type: KingdomOverviewWindowActionType.Open;
}

export const openKingdomOverviewWindow = (): OpenKingdomOverviewWindowAction => ({
  type: KingdomOverviewWindowActionType.Open,
});

export interface CloseKingdomOverviewWindowAction {
  type: KingdomOverviewWindowActionType.Close;
}

export const closeKingdomOverviewWindow = (): CloseKingdomOverviewWindowAction => ({
  type: KingdomOverviewWindowActionType.Close,
});