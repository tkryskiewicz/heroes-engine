import { GameObjectData } from "../GameObject";

export interface TradableObjectData extends GameObjectData {
  readonly tradable: boolean;
}

export const isTradableObjectData = (objectData: GameObjectData): objectData is TradableObjectData =>
  "tradable" in objectData;

export const isObjectTradable = (objectData: TradableObjectData): boolean =>
  objectData.tradable;
