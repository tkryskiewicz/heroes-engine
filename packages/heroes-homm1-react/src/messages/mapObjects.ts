import { defineMessages } from "react-intl";

import { ObjectId, ObjectType } from "heroes-homm1";

import { convertValue, unknownMessage } from "./util";

const getKey = (mapObject: string) =>
  convertValue(mapObject);

const objectTypeMessages = defineMessages({
  [ObjectType.Water]: {
    defaultMessage: "Water Objs",
    id: "game.editor.objectType.waterObjects",
  },
  [ObjectType.Grass]: {
    defaultMessage: "Grass Objs",
    id: "game.editor.objectType.grassObjects",
  },
  [ObjectType.Snow]: {
    defaultMessage: "Snow Objs",
    id: "game.editor.objectType.snowObjects",
  },
  [ObjectType.Swamp]: {
    defaultMessage: "Swamp Objs",
    id: "game.editor.objectType.swampObjects",
  },
  [ObjectType.Lava]: {
    defaultMessage: "Lava Objs",
    id: "game.editor.objectType.lavaObjects",
  },
  [ObjectType.Desert]: {
    defaultMessage: "Desert Objs",
    id: "game.editor.objectType.desertObjects",
  },
  [ObjectType.Dirt]: {
    defaultMessage: "Dirt Objs",
    id: "game.editor.objectType.dirtObjects",
  },
  [ObjectType.Town]: {
    defaultMessage: "Towns",
    id: "game.editor.objectType.towns",
  },
  [ObjectType.Monster]: {
    defaultMessage: "Monsters",
    id: "game.editor.objectType.monsters",
  },
  [ObjectType.Artifact]: {
    defaultMessage: "Artifacts",
    id: "game.editor.objectType.artifacts",
  },
  [ObjectType.Treasure]: {
    defaultMessage: "Treasures",
    id: "game.editor.objectType.treasures",
  },
});

export const getObjectTypeNameMessage = (type: ObjectType) =>
  objectTypeMessages[type];

const mapObjectMessages = defineMessages({
  // mines
  [getKey(ObjectId.CrystalMine)]: {
    defaultMessage: "Crystal Mine",
    id: "game.mapObject.crystalMine",
  },
  [getKey(ObjectId.GemsMine)]: {
    defaultMessage: "Gem Mine",
    id: "game.mapObject.gemsMine",
  },
  [getKey(ObjectId.GoldMine)]: {
    defaultMessage: "Gold Mine",
    id: "game.mapObject.goldMine",
  },
  [getKey(ObjectId.Alchemist)]: {
    defaultMessage: "Alchemist",
    id: "game.mapObject.alchemist",
  },
  [getKey(ObjectId.OreMine)]: {
    defaultMessage: "Ore Mine",
    id: "game.mapObject.oreMine",
  },
  [getKey(ObjectId.SulfurMine)]: {
    defaultMessage: "Sulfur Mine",
    id: "game.mapObject.sulfurMine",
  },
  [getKey(ObjectId.Sawmill)]: {
    defaultMessage: "Sawmill",
    id: "game.mapObject.sawmill",
  },
  // other
  [getKey(ObjectId.Buoy)]: {
    defaultMessage: "Buoy",
    id: "game.mapObject.buoy",
  },
  [getKey(ObjectId.Cottage)]: {
    defaultMessage: "Cottage",
    id: "game.mapObject.cottage",
  },
  [getKey(ObjectId.FaerieRing)]: {
    defaultMessage: "Faerie ring",
    id: "game.mapObject.faerieRing",
  },
  [getKey(ObjectId.Fountain)]: {
    defaultMessage: "Fountain",
    id: "game.mapObject.fountain",
  },
  [getKey(ObjectId.Graveyard)]: {
    defaultMessage: "Graveyard",
    id: "game.mapObject.graveyard",
  },
  [getKey(ObjectId.Hut)]: {
    defaultMessage: "Hut",
    id: "game.mapObject.hut",
  },
  [getKey(ObjectId.Oasis)]: {
    defaultMessage: "Oasis",
    id: "game.mapObject.oasis",
  },
  [getKey(ObjectId.Obelisk)]: {
    defaultMessage: "Obelisk",
    id: "game.mapObject.obelisk",
  },
  [getKey(ObjectId.Shipwreck)]: {
    defaultMessage: "Shipwreck",
    id: "game.mapObject.shipwreck",
  },
  [getKey(ObjectId.Statue)]: {
    defaultMessage: "Statue",
    id: "game.mapObject.statue",
  },
  [getKey(ObjectId.ThatchedHut)]: {
    defaultMessage: "Thatched Hut",
    id: "game.mapObject.thatchedHut",
  },
});

export const getMapObjectNameMessage = (mapObject: string) =>
  mapObjectMessages[getKey(mapObject)] || unknownMessage;
