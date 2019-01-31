import { defineMessages, FormattedMessage, Messages } from "react-intl";

import { FarmStructureId, ForestStructureId, MountainsStructureId, PlainsStructureId, StructureId } from "heroes-homm1";

import { convertValue, unknownMessage } from "./util";

const getDescriptionKey = (structure: string) =>
  `${convertValue(structure)}Description`;

const getPlaceholderKey = (structure: string) =>
  `${convertValue(structure)}Placeholder`;

const commonStructureMessages = defineMessages({
  castle: {
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
  mageGuild: {
    defaultMessage: "Mage Guild",
    id: "game.structure.mageGuild",
  },
  [getDescriptionKey(StructureId.MageGuild)]: {
    defaultMessage: "The {structureName} allows heroes to learn and replenish spells.",
    id: "game.structure.mageGuild.description",
  },
  shipyard: {
    defaultMessage: "Shipyard",
    id: "game.structure.shipyard",
  },
  [getDescriptionKey(StructureId.Shipyard)]: {
    defaultMessage: "The {structureName} allows ships to be built.",
    id: "game.structure.shipyard.description",
  },
  tavern: {
    defaultMessage: "Tavern",
    id: "game.structure.tavern",
  },
  [getDescriptionKey(StructureId.Tavern)]: {
    defaultMessage: "The {structureName} increases morale for troops defending the castle.",
    id: "game.structure.tavern.description",
  },
  thievesGuild: {
    defaultMessage: "Thieves' Guild",
    id: "game.structure.thievesGuild",
  },
  [getDescriptionKey(StructureId.ThievesGuild)]: {
    defaultMessage: "The {structureName} provides information on enemy players. " +
      "{structureName} can also provide scouting information on enemy towns. " +
      "Additional Guilds provide more information.",
    id: "game.structure.thievesGuild.description",
  },
  well: {
    defaultMessage: "Well",
    id: "game.structure.well",
  },
  [getDescriptionKey(StructureId.Well)]: {
    defaultMessage: "The {structureName} increases the growth rate of all dwellings by 2 creatures per week.",
    id: "game.structure.well.description",
  },
});

const dwellingStructureDescriptionMessage: FormattedMessage.MessageDescriptor = {
  defaultMessage: "The {structureName} produces {creatureName}.",
  id: "game.structure.dwelling.description",
};

const farmStructureMessages = defineMessages({
  archeryRange: {
    defaultMessage: "Archery Range",
    id: "game.structure.farm.archeryRange",
  },
  [getDescriptionKey(FarmStructureId.ArcheryRange)]: {
    ...dwellingStructureDescriptionMessage,
  },
  armory: {
    defaultMessage: "Armory",
    id: "game.structure.farm.armory",
  },
  [getDescriptionKey(FarmStructureId.Armory)]: {
    ...dwellingStructureDescriptionMessage,
  },
  blacksmith: {
    defaultMessage: "Blacksmith",
    id: "game.structure.farm.blacksmith",
  },
  [getDescriptionKey(FarmStructureId.Blacksmith)]: {
    ...dwellingStructureDescriptionMessage,
  },
  cathedral: {
    defaultMessage: "Cathedral",
    id: "game.structure.farm.cathedral",
  },
  [getDescriptionKey(FarmStructureId.Cathedral)]: {
    ...dwellingStructureDescriptionMessage,
  },
  joustingArena: {
    defaultMessage: "Jousting Arena",
    id: "game.structure.farm.joustingArena",
  },
  [getDescriptionKey(FarmStructureId.JoustingArena)]: {
    ...dwellingStructureDescriptionMessage,
  },
  thatchedHut: {
    defaultMessage: "Thatched Hut",
    id: "game.structure.farm.thatchedHut",
  },
  [getDescriptionKey(FarmStructureId.ThatchedHut)]: {
    ...dwellingStructureDescriptionMessage,
  },
});

const plainsStructureMessages = defineMessages({
  adobe: {
    defaultMessage: "Adobe",
    id: "game.structure.plains.adobe",
  },
  [getDescriptionKey(PlainsStructureId.Adobe)]: {
    ...dwellingStructureDescriptionMessage,
  },
  bridge: {
    defaultMessage: "Bridge",
    id: "game.structure.plains.bridge",
  },
  [getDescriptionKey(PlainsStructureId.Bridge)]: {
    ...dwellingStructureDescriptionMessage,
  },
  den: {
    defaultMessage: "Den",
    id: "game.structure.plains.den",
  },
  [getDescriptionKey(PlainsStructureId.Den)]: {
    ...dwellingStructureDescriptionMessage,
  },
  hut: {
    defaultMessage: "Hut",
    id: "game.structure.plains.hut",
  },
  [getDescriptionKey(PlainsStructureId.Hut)]: {
    ...dwellingStructureDescriptionMessage,
  },
  pyramid: {
    defaultMessage: "Pyramid",
    id: "game.structure.plains.pyramid",
  },
  [getDescriptionKey(PlainsStructureId.Pyramid)]: {
    ...dwellingStructureDescriptionMessage,
  },
  stickHut: {
    defaultMessage: "Stick Hut",
    id: "game.structure.plains.stickHut",
  },
  [getDescriptionKey(PlainsStructureId.StickHut)]: {
    ...dwellingStructureDescriptionMessage,
  },
});

const forestStructureMessages = defineMessages({
  archeryRange: {
    defaultMessage: "Archery Range",
    id: "game.structure.forest.archeryRange",
  },
  [getDescriptionKey(ForestStructureId.ArcheryRange)]: {
    ...dwellingStructureDescriptionMessage,
  },
  cottage: {
    defaultMessage: "Cottage",
    id: "game.structure.forest.cottage",
  },
  [getDescriptionKey(ForestStructureId.Cottage)]: {
    ...dwellingStructureDescriptionMessage,
  },
  fencedMeadow: {
    defaultMessage: "Fenced Meadow",
    id: "game.structure.forest.fencedMeadow",
  },
  [getDescriptionKey(ForestStructureId.FencedMeadow)]: {
    ...dwellingStructureDescriptionMessage,
  },
  redTower: {
    defaultMessage: "Red Tower",
    id: "game.structure.forest.redTower",
  },
  [getDescriptionKey(ForestStructureId.RedTower)]: {
    ...dwellingStructureDescriptionMessage,
  },
  stonehenge: {
    defaultMessage: "Stonehenge",
    id: "game.structure.forest.stonehenge",
  },
  [getDescriptionKey(ForestStructureId.Stonehenge)]: {
    ...dwellingStructureDescriptionMessage,
  },
  treehouse: {
    defaultMessage: "Treehouse",
    id: "game.structure.forest.treehouse",
  },
  [getDescriptionKey(ForestStructureId.Treehouse)]: {
    ...dwellingStructureDescriptionMessage,
  },
});

const mountainsStructureMessages = defineMessages({
  blackTower: {
    defaultMessage: "Black Tower",
    id: "game.structure.mountains.blackTower",
  },
  [getDescriptionKey(MountainsStructureId.BlackTower)]: {
    ...dwellingStructureDescriptionMessage,
  },
  cave: {
    defaultMessage: "Cave",
    id: "game.structure.mountains.cave",
  },
  [getDescriptionKey(MountainsStructureId.Cave)]: {
    ...dwellingStructureDescriptionMessage,
  },
  crypt: {
    defaultMessage: "Crypt",
    id: "game.structure.mountains.crypt",
  },
  [getDescriptionKey(MountainsStructureId.Crypt)]: {
    ...dwellingStructureDescriptionMessage,
  },
  maze: {
    defaultMessage: "Maze",
    id: "game.structure.mountains.maze",
  },
  [getDescriptionKey(MountainsStructureId.Maze)]: {
    ...dwellingStructureDescriptionMessage,
  },
  nest: {
    defaultMessage: "Nest",
    id: "game.structure.mountains.nest",
  },
  [getDescriptionKey(MountainsStructureId.Nest)]: {
    ...dwellingStructureDescriptionMessage,
  },
  swamp: {
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
  const index = convertValue(structure);

  const nameMessage = structureMessages[index];
  const placeholderNameMessage = structureMessages[getPlaceholderKey(structure)];

  return (!isBuilt && placeholderNameMessage) || nameMessage || unknownMessage;
};

export const getStructureDescriptionMessage = (structure: string) =>
  structureMessages[getDescriptionKey(structure)] || unknownMessage;
