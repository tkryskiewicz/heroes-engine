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
  changeHeroMapObjectHero,
  createGameMapObject,
  CreatureMapObjectDetails,
  getCreatureMapObjectDetails,
  getHeroMapObjectDetails,
  getTownMapObjectDetails,
  HeroMapObjectDetails,
  isHeroMapObject,
  isRandomCreatureMapObject,
  isRandomTownMapObject,
  MapObjectDetails,
  MapObjectId,
  MapObjectType,
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
  MapObjectId.Mountain1,
  MapObjectId.Mountain2,
  MapObjectId.Mountain3,
  MapObjectId.Mountain4,
];

const terrainMountainObjects = [
  MapObjectId.Mountain5,
  MapObjectId.Mountain6,
  MapObjectId.Mountain7,
  MapObjectId.Mountain8,
];

const treesObjects = [
  MapObjectId.Trees23,
  MapObjectId.Trees24,
  MapObjectId.Trees21,
  MapObjectId.Trees22,
  MapObjectId.Trees25,
  MapObjectId.Trees26,
  MapObjectId.Trees3,
  MapObjectId.Trees4,
  MapObjectId.Trees1,
  MapObjectId.Trees2,
  MapObjectId.Trees5,
  MapObjectId.Trees6,
];

const trees2Objects = [
  MapObjectId.Trees17,
  MapObjectId.Trees18,
  MapObjectId.Trees15,
  MapObjectId.Trees16,
  MapObjectId.Trees19,
  MapObjectId.Trees20,
];

const snowTreesObjects = [
  MapObjectId.Trees9,
  MapObjectId.Trees10,
  MapObjectId.Trees7,
  MapObjectId.Trees8,
  MapObjectId.Trees11,
  MapObjectId.Trees12,
  MapObjectId.Trees13,
  MapObjectId.Trees14,
];

const desertTreesObjects = [
  MapObjectId.Trees27,
  MapObjectId.Trees28,
  MapObjectId.Trees29,
];

const mineObjects = [
  MapObjectId.OreMine,
  MapObjectId.SulfurMine,
  MapObjectId.CrystalMine,
  MapObjectId.GemsMine,
  MapObjectId.GoldMine,
];

const lakeObjects = [
  MapObjectId.GrassLakeBig,
  MapObjectId.GrassLake,
  MapObjectId.SnowLakeSmall,
  MapObjectId.SnowLake,
  MapObjectId.SnowLakeBig,
  MapObjectId.SwampLakeBig,
  MapObjectId.SwampLake,
  MapObjectId.DirtLakeBig,
  MapObjectId.DirtLake,
];

const riverObjects = [
  MapObjectId.River1,
  MapObjectId.River2,
  MapObjectId.River3,
  MapObjectId.River4,
  MapObjectId.River5,
  MapObjectId.River6,
  MapObjectId.River7,
  MapObjectId.River8,
  MapObjectId.River9,
];

const objectOrder: string[] = [
  ...mountainObjects,
  ...terrainMountainObjects,
  ...treesObjects,
  ...snowTreesObjects,
  ...desertTreesObjects,
  ...trees2Objects,
  MapObjectId.Alchemist,
  MapObjectId.DragonCity,
  MapObjectId.Lighthouse,
  ...mineObjects,
  MapObjectId.Sawmill,
  MapObjectId.Signpost, // order changes
  MapObjectId.Fireplace2,
  MapObjectId.ThatchedHutSnow,
  MapObjectId.CottageSnow,
  MapObjectId.Grass1,
  MapObjectId.Grass2,
  MapObjectId.Swamp1,
  MapObjectId.Dirt1,
  MapObjectId.Dirt2,
  MapObjectId.Cave,
  MapObjectId.FaerieRing,
  MapObjectId.Grass3,
  MapObjectId.Grass4,
  MapObjectId.Swamp4,
  MapObjectId.Swamp2,
  MapObjectId.Dirt3,
  MapObjectId.Dirt4,
  MapObjectId.Dirt5,
  MapObjectId.Gazebo,
  MapObjectId.Hut,
  MapObjectId.ThatchedHut,
  MapObjectId.Cottage,
  ...lakeObjects,
  MapObjectId.Shrine,
  MapObjectId.Grass5,
  MapObjectId.Grass6,
  MapObjectId.Swamp5,
  MapObjectId.Lava1,
  MapObjectId.Lava2,
  MapObjectId.Lava3,
  MapObjectId.Lava5,
  MapObjectId.Lava6,
  MapObjectId.Lava4,
  MapObjectId.Skeleton,
  MapObjectId.Desert1,
  MapObjectId.Desert2,
  MapObjectId.Oasis,
  MapObjectId.Dirt6,
  MapObjectId.Dirt7,
  MapObjectId.Obelisk,
  MapObjectId.Grass7,
  MapObjectId.Grass8,
  MapObjectId.Grass9,
  MapObjectId.Grass10,
  MapObjectId.Snow1,
  MapObjectId.Snow2,
  MapObjectId.Snow3,
  MapObjectId.Lava10,
  MapObjectId.Lava7,
  MapObjectId.Lava8,
  MapObjectId.Lava9,
  MapObjectId.Desert3,
  MapObjectId.DesertTent,
  MapObjectId.Dirt8,
  MapObjectId.Dirt9,
  MapObjectId.Dirt10,
  MapObjectId.Dirt11,
  MapObjectId.Rosebush,
  MapObjectId.Shrine2,
  MapObjectId.Swamp3,
  MapObjectId.OakTree,
  MapObjectId.TravelGate2,
  MapObjectId.Fountain,
  MapObjectId.Graveyard,
  MapObjectId.Hole,
  MapObjectId.Waterwheel,
  MapObjectId.Statue,
  MapObjectId.Buoy,
  MapObjectId.Water3,
  MapObjectId.Water1,
  MapObjectId.Water2,
  MapObjectId.Shipwreck,
  MapObjectId.Whirlpool,
  ...riverObjects,
  MapObjectId.TreeStump,
  MapObjectId.TravelGate,
  MapObjectId.WagonCamp,
  MapObjectId.Windmill,
  MapObjectId.RandomCreature,
  MapObjectId.RandomCreature1,
  MapObjectId.RandomCreature2,
  MapObjectId.RandomCreature3,
  MapObjectId.RandomCreature4,
  MapObjectId.Hero,
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
  if (isHeroMapObject(object)) {
    const hero = changeHeroMapObjectHero(object, Object.keys(data.heroes)[0], data);

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
  if (isCreatureObject(object, data) || isRandomCreatureMapObject(object, data)) {
    return getCreatureMapObjectDetails(object);
  }

  if (isHeroMapObject(object)) {
    return getHeroMapObjectDetails(object);
  }

  if (isRandomTownMapObject(object)) {
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
  if (isCreatureObject(object, data) || isRandomCreatureMapObject(object, data)) {
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

  if (isHeroMapObject(object)) {
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

  if (isRandomTownMapObject(object)) {
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
  if (isCreatureObject(object, data) || isRandomCreatureMapObject(object, data)) {
    return setCreatureMapObjectDetails(object, value as CreatureMapObjectDetails);
  }

  if (isHeroMapObject(object)) {
    return setHeroMapObjectDetails(object, value as HeroMapObjectDetails, data);
  }

  if (isRandomTownMapObject(object)) {
    return setTownMapObjectDetails(object, value as TownMapObjectDetails);
  }

  return object;
};
