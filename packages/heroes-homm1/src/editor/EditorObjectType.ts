export enum EditorObjectType {
  WaterObjects = "water-objects",
  GrassObjects = "grass-objects",
  SnowObjects = "snow-objects",
  SwampObjects = "swamp-objects",
  LavaObjects = "lava-objects",
  DesertObjects = "desert-objects",
  DirtObjects = "dirt-objects",
  Towns = "towns",
  Monsters = "monsters",
  Artifacts = "artifacts",
  Treasures = "treasures",
}

const objectTypes = [
  EditorObjectType.WaterObjects,
  EditorObjectType.GrassObjects,
  EditorObjectType.SnowObjects,
  EditorObjectType.SwampObjects,
  EditorObjectType.LavaObjects,
  EditorObjectType.DesertObjects,
  EditorObjectType.DirtObjects,
  EditorObjectType.Towns,
  EditorObjectType.Monsters,
  EditorObjectType.Artifacts,
  EditorObjectType.Treasures,
];

export const previousObjectType = (value: EditorObjectType): EditorObjectType =>
  objectTypes[(objectTypes.length + objectTypes.indexOf(value) - 1) % objectTypes.length];

export const nextObjectType = (value: EditorObjectType): EditorObjectType =>
  objectTypes[(objectTypes.indexOf(value) + 1) % objectTypes.length];
