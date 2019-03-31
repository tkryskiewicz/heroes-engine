import { Game } from "../Game";
import { addResources } from "../Resource";
import { MapObjectData } from "./MapObject";
import { isObjectOwnedBy, OwnableMapObject, OwnableMapObjectData } from "./OwnableMapObject";

// TODO: should be like resource generator object?
export interface MineMapObjectData extends MapObjectData, OwnableMapObjectData {
  readonly mine: {
    readonly resource: string;
    readonly amount: number;
  };
}

export const isMineMapObjectData = (objectData: MapObjectData): objectData is MineMapObjectData =>
  (objectData as MineMapObjectData).mine !== undefined;

export type MineMapObject = OwnableMapObject;

export const createMineMapObject = (objectData: MineMapObjectData, owner?: string): MineMapObject => ({
  id: objectData.id,
  owner,
});

export const handleMineMapObject = (
  game: Game,
  object: MineMapObject,
  objectData: MineMapObjectData,
): Game => {
  if (!isObjectOwnedBy(object, game.alignment)) {
    throw new Error(`${objectData.id} (${object.id}) is not owned by ${game.alignment}`);
  }

  return {
    ...game,
    resources: addResources(game.resources, { [objectData.mine.resource]: objectData.mine.amount }),
  };
};
