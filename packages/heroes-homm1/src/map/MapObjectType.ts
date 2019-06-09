export enum MapObjectType {
  Water = "water",
  Grass = "grass",
  Snow = "snow",
  Swamp = "swamp",
  Lava = "lava",
  Desert = "desert",
  Dirt = "dirt",
  Town = "town",
  Monster = "monster",
  Artifact = "artifact",
  Treasure = "treasure",
}

const objectTypes = Object.values(MapObjectType);

export const previousObjectType = (value: MapObjectType): MapObjectType =>
  objectTypes[(objectTypes.length + objectTypes.indexOf(value) - 1) % objectTypes.length];

export const nextObjectType = (value: MapObjectType): MapObjectType =>
  objectTypes[(objectTypes.indexOf(value) + 1) % objectTypes.length];
