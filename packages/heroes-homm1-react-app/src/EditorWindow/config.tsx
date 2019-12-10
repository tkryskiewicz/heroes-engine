import React from "react";

import {
  changeArmedObjectArmy,
  changeObjectOwner,
  GameData,
  isCreatureObject,
  MapObject,
  Troop,
} from "heroes-core";
import {
  changeHeroObjectHero,
  createGameMapObject,
  CreatureMapObjectDetails,
  getCreatureMapObjectDetails,
  getHeroMapObjectDetails,
  getTownMapObjectDetails,
  HeroMapObjectDetails,
  isHeroObject,
  isRandomCreatureObject,
  isRandomTownObject,
  MapObjectDetails,
  MapObjectType,
  ObjectId,
  setCreatureMapObjectDetails,
  setHeroMapObjectDetails,
  setTownMapObjectDetails,
  TownMapObjectDetails,
} from "heroes-homm1";
import {
  CreatureMapObjectDetailsWindow,
  HeroMapObjectDetailsWindow,
  TownMapObjectDetailsWindow,
} from "heroes-homm1-react";

const mountainObjects = [
  ObjectId.Mountain1,
  ObjectId.Mountain2,
  ObjectId.Mountain3,
  ObjectId.Mountain4,
];

const terrainMountainObjects = [
  ObjectId.Mountain5,
  ObjectId.Mountain6,
  ObjectId.Mountain7,
  ObjectId.Mountain8,
];

const treesObjects = [
  ObjectId.Trees23,
  ObjectId.Trees24,
  ObjectId.Trees21,
  ObjectId.Trees22,
  ObjectId.Trees25,
  ObjectId.Trees26,
  ObjectId.Trees3,
  ObjectId.Trees4,
  ObjectId.Trees1,
  ObjectId.Trees2,
  ObjectId.Trees5,
  ObjectId.Trees6,
];

const trees2Objects = [
  ObjectId.Trees17,
  ObjectId.Trees18,
  ObjectId.Trees15,
  ObjectId.Trees16,
  ObjectId.Trees19,
  ObjectId.Trees20,
];

const snowTreesObjects = [
  ObjectId.Trees9,
  ObjectId.Trees10,
  ObjectId.Trees7,
  ObjectId.Trees8,
  ObjectId.Trees11,
  ObjectId.Trees12,
  ObjectId.Trees13,
  ObjectId.Trees14,
];

const desertTreesObjects = [
  ObjectId.Trees27,
  ObjectId.Trees28,
  ObjectId.Trees29,
];

const mineObjects = [
  ObjectId.OreMine,
  ObjectId.SulfurMine,
  ObjectId.CrystalMine,
  ObjectId.GemsMine,
  ObjectId.GoldMine,
];

const lakeObjects = [
  ObjectId.GrassLakeBig,
  ObjectId.GrassLake,
  ObjectId.SnowLakeSmall,
  ObjectId.SnowLake,
  ObjectId.SnowLakeBig,
  ObjectId.SwampLakeBig,
  ObjectId.SwampLake,
  ObjectId.DirtLakeBig,
  ObjectId.DirtLake,
];

const riverObjects = [
  ObjectId.River1,
  ObjectId.River2,
  ObjectId.River3,
  ObjectId.River4,
  ObjectId.River5,
  ObjectId.River6,
  ObjectId.River7,
  ObjectId.River8,
  ObjectId.River9,
];

const objectOrder: string[] = [
  ...mountainObjects,
  ...terrainMountainObjects,
  ...treesObjects,
  ...snowTreesObjects,
  ...desertTreesObjects,
  ...trees2Objects,
  ObjectId.Alchemist,
  ObjectId.DragonCity,
  ObjectId.Lighthouse,
  ...mineObjects,
  ObjectId.Sawmill,
  ObjectId.Signpost, // order changes
  ObjectId.Fireplace2,
  ObjectId.ThatchedHutSnow,
  ObjectId.CottageSnow,
  ObjectId.Grass1,
  ObjectId.Grass2,
  ObjectId.Swamp1,
  ObjectId.Dirt1,
  ObjectId.Dirt2,
  ObjectId.Cave,
  ObjectId.FaerieRing,
  ObjectId.Grass3,
  ObjectId.Grass4,
  ObjectId.Swamp4,
  ObjectId.Swamp2,
  ObjectId.Dirt3,
  ObjectId.Dirt4,
  ObjectId.Dirt5,
  ObjectId.Gazebo,
  ObjectId.Hut,
  ObjectId.ThatchedHut,
  ObjectId.Cottage,
  ...lakeObjects,
  ObjectId.Shrine,
  ObjectId.Grass5,
  ObjectId.Grass6,
  ObjectId.Swamp5,
  ObjectId.Lava1,
  ObjectId.Lava2,
  ObjectId.Lava3,
  ObjectId.Lava5,
  ObjectId.Lava6,
  ObjectId.Lava4,
  ObjectId.Skeleton,
  ObjectId.Desert1,
  ObjectId.Desert2,
  ObjectId.Oasis,
  ObjectId.Dirt6,
  ObjectId.Dirt7,
  ObjectId.Obelisk,
  ObjectId.Grass7,
  ObjectId.Grass8,
  ObjectId.Grass9,
  ObjectId.Grass10,
  ObjectId.Snow1,
  ObjectId.Snow2,
  ObjectId.Snow3,
  ObjectId.Lava10,
  ObjectId.Lava7,
  ObjectId.Lava8,
  ObjectId.Lava9,
  ObjectId.Desert3,
  ObjectId.DesertTent,
  ObjectId.Dirt8,
  ObjectId.Dirt9,
  ObjectId.Dirt10,
  ObjectId.Dirt11,
  ObjectId.Rosebush,
  ObjectId.Shrine2,
  ObjectId.Swamp3,
  ObjectId.OakTree,
  ObjectId.TravelGate2,
  ObjectId.Fountain,
  ObjectId.Graveyard,
  ObjectId.Hole,
  ObjectId.Waterwheel,
  ObjectId.Statue,
  ObjectId.Buoy,
  ObjectId.Water3,
  ObjectId.Water1,
  ObjectId.Water2,
  ObjectId.Shipwreck,
  ObjectId.Whirlpool,
  ...riverObjects,
  ObjectId.TreeStump,
  ObjectId.TravelGate,
  ObjectId.WagonCamp,
  ObjectId.Windmill,
  ObjectId.RandomCreature,
  ObjectId.RandomCreature1,
  ObjectId.RandomCreature2,
  ObjectId.RandomCreature3,
  ObjectId.RandomCreature4,
  ObjectId.Hero,
];

// TODO: add town objects
export const getObjects = (type: MapObjectType, data: GameData): string[] =>
  Object.values(data.mapObjects)
    .filter((o) => o.type === type || (Array.isArray(o.type) && o.type.includes(type)))
    .map((o) => o.id)
    .sort((a, b) => objectOrder.indexOf(a) - objectOrder.indexOf(b));

export const createEditorMapObject = (id: string, objectDataId: string, data: GameData): MapObject => {
  const object = createGameMapObject(id, objectDataId, data);

  // FIXME
  if (isHeroObject(object)) {
    const hero = changeHeroObjectHero(object, Object.keys(data.heroes)[0], data);

    // tslint:disable-next-line: no-unnecessary-local-variable
    const obj = {
      ...object,
      ...changeArmedObjectArmy(object, [...new Array(data.armySize).keys()].map((): Troop => ({
        count: 0,
        creature: Object.keys(data.creatures)[0],
      }))),
      heroClass: hero.heroClass,
      heroId: hero.heroId,
      owner: changeObjectOwner(object, data.playerColors[0]).owner,
      skills: hero.skills,
    };

    return obj;
  }

  return object;
};

export const getObjectDetails = (object: MapObject, data: GameData): MapObjectDetails | undefined => {
  if (isCreatureObject(object, data) || isRandomCreatureObject(object, data.mapObjects[object.dataId])) {
    return getCreatureMapObjectDetails(object);
  }

  if (isHeroObject(object)) {
    return getHeroMapObjectDetails(object);
  }

  if (isRandomTownObject(object)) {
    return getTownMapObjectDetails(object);
  }
};

export const renderObjectDetails = (
  object: MapObject,
  value: MapObjectDetails,
  data: GameData,
  props: {
    readonly onValueChange: (value: MapObjectDetails) => void;
    readonly onConfirmClick: () => void;
    readonly onCloseClick: () => void;
  },
) => {
  if (isCreatureObject(object, data) || isRandomCreatureObject(object, data.mapObjects[object.dataId])) {
    return (
      <CreatureMapObjectDetailsWindow
        visible={true}
        data={data}
        value={value as CreatureMapObjectDetails}
        onValueChange={props.onValueChange}
        onConfirmClick={props.onConfirmClick}
        onCancelClick={props.onCloseClick}
      />
    );
  }

  if (isHeroObject(object)) {
    return (
      <HeroMapObjectDetailsWindow
        visible={true}
        data={data}
        value={value as HeroMapObjectDetails}
        onValueChange={props.onValueChange}
        onConfirmClick={props.onConfirmClick}
        onCancelClick={props.onCloseClick}
      />
    );
  }

  if (isRandomTownObject(object)) {
    return (
      <TownMapObjectDetailsWindow
        visible={true}
        data={data}
        value={value as TownMapObjectDetails}
        onValueChange={props.onValueChange}
        onConfirmClick={props.onConfirmClick}
        onCancelClick={props.onCloseClick}
      />
    );
  }
};

export const setObjectDetails = (object: MapObject, value: MapObjectDetails, data: GameData): MapObject => {
  if (isCreatureObject(object, data) || isRandomCreatureObject(object, data.mapObjects[object.dataId])) {
    return setCreatureMapObjectDetails(object, value as CreatureMapObjectDetails);
  }

  if (isHeroObject(object)) {
    return setHeroMapObjectDetails(object, value as HeroMapObjectDetails, data);
  }

  if (isRandomTownObject(object)) {
    return setTownMapObjectDetails(object, value as TownMapObjectDetails);
  }

  return object;
};
