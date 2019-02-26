import { defineMessages, FormattedMessage, Messages } from "react-intl";

import { FarmStructureId, ForestStructureId, MountainsStructureId, PlainsStructureId, StructureId } from "heroes-homm1";

import { convertValue, unknownMessage } from "./util";

const getKey = (structure: string) =>
  `${convertValue(structure)}`;

const getDescriptionKey = (structure: string) =>
  `${convertValue(structure)}Description`;

const getPlaceholderKey = (structure: string) =>
  `${convertValue(structure)}Placeholder`;

const commonStructureMessages = defineMessages({
  [getKey(StructureId.Castle)]: {
    defaultMessage: "Castle",
    id: "game.structure.castle",
  },
  [getDescriptionKey(StructureId.Castle)]: {
    defaultMessage: "The {structureName} improves town defense and income.",
    id: "game.structure.castle.description",
  },
  [getPlaceholderKey(StructureId.Castle)]: {
    defaultMessage: "Tent",
    id: "game.structure.castle.placeholder",
  },
  [getKey(StructureId.MageGuild)]: {
    defaultMessage: "Mage Guild",
    id: "game.structure.mageGuild",
  },
  [getDescriptionKey(StructureId.MageGuild)]: {
    defaultMessage: "The {structureName} allows heroes to learn and replenish spells.",
    id: "game.structure.mageGuild.description",
  },
  [getKey(StructureId.Shipyard)]: {
    defaultMessage: "Shipyard",
    id: "game.structure.shipyard",
  },
  [getDescriptionKey(StructureId.Shipyard)]: {
    defaultMessage: "The {structureName} allows ships to be built.",
    id: "game.structure.shipyard.description",
  },
  [getKey(StructureId.Tavern)]: {
    defaultMessage: "Tavern",
    id: "game.structure.tavern",
  },
  [getDescriptionKey(StructureId.Tavern)]: {
    defaultMessage: "The {structureName} increases morale for troops defending the castle.",
    id: "game.structure.tavern.description",
  },
  [getKey(StructureId.ThievesGuild)]: {
    defaultMessage: "Thieves' Guild",
    id: "game.structure.thievesGuild",
  },
  [getDescriptionKey(StructureId.ThievesGuild)]: {
    defaultMessage: "The {structureName} provides information on enemy players. " +
      "{structureName} can also provide scouting information on enemy towns. " +
      "Additional Guilds provide more information.",
    id: "game.structure.thievesGuild.description",
  },
  [getKey(StructureId.Well)]: {
    defaultMessage: "Well",
    id: "game.structure.well",
  },
  [getDescriptionKey(StructureId.Well)]: {
    defaultMessage: "The {structureName} increases the growth rate of all dwellings by 2 creatures per week.",
    id: "game.structure.well.description",
  },
});

// TODO: override message ids
const dwellingStructureDescriptionMessage: FormattedMessage.MessageDescriptor = {
  defaultMessage: "The {structureName} produces {creatureName}.",
  id: "game.structure.dwelling.description",
};

const farmStructureMessages = defineMessages({
  [getKey(FarmStructureId.ArcheryRange)]: {
    defaultMessage: "Archery Range",
    id: "game.structure.farm.archeryRange",
  },
  [getDescriptionKey(FarmStructureId.ArcheryRange)]: {
    ...dwellingStructureDescriptionMessage,
  },
  [getKey(FarmStructureId.Armory)]: {
    defaultMessage: "Armory",
    id: "game.structure.farm.armory",
  },
  [getDescriptionKey(FarmStructureId.Armory)]: {
    ...dwellingStructureDescriptionMessage,
  },
  [getKey(FarmStructureId.Blacksmith)]: {
    defaultMessage: "Blacksmith",
    id: "game.structure.farm.blacksmith",
  },
  [getDescriptionKey(FarmStructureId.Blacksmith)]: {
    ...dwellingStructureDescriptionMessage,
  },
  [getKey(FarmStructureId.Cathedral)]: {
    defaultMessage: "Cathedral",
    id: "game.structure.farm.cathedral",
  },
  [getDescriptionKey(FarmStructureId.Cathedral)]: {
    ...dwellingStructureDescriptionMessage,
  },
  [getKey(FarmStructureId.JoustingArena)]: {
    defaultMessage: "Jousting Arena",
    id: "game.structure.farm.joustingArena",
  },
  [getDescriptionKey(FarmStructureId.JoustingArena)]: {
    ...dwellingStructureDescriptionMessage,
  },
  [getKey(FarmStructureId.ThatchedHut)]: {
    defaultMessage: "Thatched Hut",
    id: "game.structure.farm.thatchedHut",
  },
  [getDescriptionKey(FarmStructureId.ThatchedHut)]: {
    ...dwellingStructureDescriptionMessage,
  },
});

const plainsStructureMessages = defineMessages({
  [getKey(PlainsStructureId.Adobe)]: {
    defaultMessage: "Adobe",
    id: "game.structure.plains.adobe",
  },
  [getDescriptionKey(PlainsStructureId.Adobe)]: {
    ...dwellingStructureDescriptionMessage,
  },
  [getKey(PlainsStructureId.Bridge)]: {
    defaultMessage: "Bridge",
    id: "game.structure.plains.bridge",
  },
  [getDescriptionKey(PlainsStructureId.Bridge)]: {
    ...dwellingStructureDescriptionMessage,
  },
  [getKey(PlainsStructureId.Den)]: {
    defaultMessage: "Den",
    id: "game.structure.plains.den",
  },
  [getDescriptionKey(PlainsStructureId.Den)]: {
    ...dwellingStructureDescriptionMessage,
  },
  [getKey(PlainsStructureId.Hut)]: {
    defaultMessage: "Hut",
    id: "game.structure.plains.hut",
  },
  [getDescriptionKey(PlainsStructureId.Hut)]: {
    ...dwellingStructureDescriptionMessage,
  },
  [getKey(PlainsStructureId.Pyramid)]: {
    defaultMessage: "Pyramid",
    id: "game.structure.plains.pyramid",
  },
  [getDescriptionKey(PlainsStructureId.Pyramid)]: {
    ...dwellingStructureDescriptionMessage,
  },
  [getKey(PlainsStructureId.StickHut)]: {
    defaultMessage: "Stick Hut",
    id: "game.structure.plains.stickHut",
  },
  [getDescriptionKey(PlainsStructureId.StickHut)]: {
    ...dwellingStructureDescriptionMessage,
  },
});

const forestStructureMessages = defineMessages({
  [getKey(ForestStructureId.ArcheryRange)]: {
    defaultMessage: "Archery Range",
    id: "game.structure.forest.archeryRange",
  },
  [getDescriptionKey(ForestStructureId.ArcheryRange)]: {
    ...dwellingStructureDescriptionMessage,
  },
  [getKey(ForestStructureId.Cottage)]: {
    defaultMessage: "Cottage",
    id: "game.structure.forest.cottage",
  },
  [getDescriptionKey(ForestStructureId.Cottage)]: {
    ...dwellingStructureDescriptionMessage,
  },
  [getKey(ForestStructureId.FencedMeadow)]: {
    defaultMessage: "Fenced Meadow",
    id: "game.structure.forest.fencedMeadow",
  },
  [getDescriptionKey(ForestStructureId.FencedMeadow)]: {
    ...dwellingStructureDescriptionMessage,
  },
  [getKey(ForestStructureId.RedTower)]: {
    defaultMessage: "Red Tower",
    id: "game.structure.forest.redTower",
  },
  [getDescriptionKey(ForestStructureId.RedTower)]: {
    ...dwellingStructureDescriptionMessage,
  },
  [getKey(ForestStructureId.Stonehenge)]: {
    defaultMessage: "Stonehenge",
    id: "game.structure.forest.stonehenge",
  },
  [getDescriptionKey(ForestStructureId.Stonehenge)]: {
    ...dwellingStructureDescriptionMessage,
  },
  [getKey(ForestStructureId.Treehouse)]: {
    defaultMessage: "Treehouse",
    id: "game.structure.forest.treehouse",
  },
  [getDescriptionKey(ForestStructureId.Treehouse)]: {
    ...dwellingStructureDescriptionMessage,
  },
});

const mountainsStructureMessages = defineMessages({
  [getKey(MountainsStructureId.BlackTower)]: {
    defaultMessage: "Black Tower",
    id: "game.structure.mountains.blackTower",
  },
  [getDescriptionKey(MountainsStructureId.BlackTower)]: {
    ...dwellingStructureDescriptionMessage,
  },
  [getKey(MountainsStructureId.Cave)]: {
    defaultMessage: "Cave",
    id: "game.structure.mountains.cave",
  },
  [getDescriptionKey(MountainsStructureId.Cave)]: {
    ...dwellingStructureDescriptionMessage,
  },
  [getKey(MountainsStructureId.Crypt)]: {
    defaultMessage: "Crypt",
    id: "game.structure.mountains.crypt",
  },
  [getDescriptionKey(MountainsStructureId.Crypt)]: {
    ...dwellingStructureDescriptionMessage,
  },
  [getKey(MountainsStructureId.Maze)]: {
    defaultMessage: "Maze",
    id: "game.structure.mountains.maze",
  },
  [getDescriptionKey(MountainsStructureId.Maze)]: {
    ...dwellingStructureDescriptionMessage,
  },
  [getKey(MountainsStructureId.Nest)]: {
    defaultMessage: "Nest",
    id: "game.structure.mountains.nest",
  },
  [getDescriptionKey(MountainsStructureId.Nest)]: {
    ...dwellingStructureDescriptionMessage,
  },
  [getKey(MountainsStructureId.Swamp)]: {
    defaultMessage: "Swamp",
    id: "game.structure.mountains.swamp",
  },
  [getDescriptionKey(MountainsStructureId.Swamp)]: {
    ...dwellingStructureDescriptionMessage,
  },
});

const structureMessages: Messages = defineMessages({
  ...commonStructureMessages,
  ...farmStructureMessages,
  ...plainsStructureMessages,
  ...forestStructureMessages,
  ...mountainsStructureMessages,
});

// TODO: should isBuilt be always passed?
export const getStructureNameMessage = (structure: string, isBuilt: boolean = true) => {
  const nameMessage = structureMessages[getKey(structure)];
  const placeholderNameMessage = structureMessages[getPlaceholderKey(structure)];

  return (!isBuilt && placeholderNameMessage) || nameMessage || unknownMessage;
};

export const getStructureDescriptionMessage = (structure: string) =>
  structureMessages[getDescriptionKey(structure)] || unknownMessage;
