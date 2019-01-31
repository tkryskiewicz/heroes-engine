import { defineMessages, FormattedMessage, Messages } from "react-intl";

import { convertValue, unknownMessage } from "./util";

const commonStructureMessages = defineMessages({
  castle: {
    defaultMessage: "Castle",
    id: "game.structure.castle",
  },
  castleDescription: {
    defaultMessage: "The {structureName} improves town defense and income.",
    id: "game.structure.castle.description",
  },
  castlePlaceholder: {
    defaultMessage: "Tent",
    id: "game.structure.castle.placeholder",
  },
  mageGuild: {
    defaultMessage: "Mage Guild",
    id: "game.structure.mageGuild",
  },
  mageGuildDescription: {
    defaultMessage: "The {structureName} allows heroes to learn and replenish spells.",
    id: "game.structure.mageGuild.description",
  },
  shipyard: {
    defaultMessage: "Shipyard",
    id: "game.structure.shipyard",
  },
  shipyardDescription: {
    defaultMessage: "The {structureName} allows ships to be built.",
    id: "game.structure.shipyard.description",
  },
  tavern: {
    defaultMessage: "Tavern",
    id: "game.structure.tavern",
  },
  tavernDescription: {
    defaultMessage: "The {structureName} increases morale for troops defending the castle.",
    id: "game.structure.tavern.description",
  },
  thievesGuild: {
    defaultMessage: "Thieves' Guild",
    id: "game.structure.thievesGuild",
  },
  thievesGuildDescription: {
    defaultMessage: "The {structureName} provides information on enemy players. " +
      "{structureName} can also provide scouting information on enemy towns. " +
      "Additional Guilds provide more information.",
    id: "game.structure.thievesGuild.description",
  },
  well: {
    defaultMessage: "Well",
    id: "game.structure.well",
  },
  wellDescription: {
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
  archeryRangeDescription: {
    ...dwellingStructureDescriptionMessage,
  },
  armory: {
    defaultMessage: "Armory",
    id: "game.structure.farm.armory",
  },
  armoryDescription: {
    ...dwellingStructureDescriptionMessage,
  },
  blacksmith: {
    defaultMessage: "Blacksmith",
    id: "game.structure.farm.blacksmith",
  },
  blacksmithDescription: {
    ...dwellingStructureDescriptionMessage,
  },
  cathedral: {
    defaultMessage: "Cathedral",
    id: "game.structure.farm.cathedral",
  },
  cathedralDescription: {
    ...dwellingStructureDescriptionMessage,
  },
  joustingArena: {
    defaultMessage: "Jousting Arena",
    id: "game.structure.farm.joustingArena",
  },
  joustingArenaDescription: {
    ...dwellingStructureDescriptionMessage,
  },
  thatchedHut: {
    defaultMessage: "Thatched Hut",
    id: "game.structure.farm.thatchedHut",
  },
  thatchedHutDescription: {
    ...dwellingStructureDescriptionMessage,
  },
});

const plainsStructureMessages = defineMessages({
  adobe: {
    defaultMessage: "Adobe",
    id: "game.structure.plains.adobe",
  },
  adobeDescription: {
    ...dwellingStructureDescriptionMessage,
  },
  bridge: {
    defaultMessage: "Bridge",
    id: "game.structure.plains.bridge",
  },
  bridgeDescription: {
    ...dwellingStructureDescriptionMessage,
  },
  den: {
    defaultMessage: "Den",
    id: "game.structure.plains.den",
  },
  denDescription: {
    ...dwellingStructureDescriptionMessage,
  },
  hut: {
    defaultMessage: "Hut",
    id: "game.structure.plains.hut",
  },
  hutDescription: {
    ...dwellingStructureDescriptionMessage,
  },
  pyramid: {
    defaultMessage: "Pyramid",
    id: "game.structure.plains.pyramid",
  },
  pyramidDescription: {
    ...dwellingStructureDescriptionMessage,
  },
  stickHut: {
    defaultMessage: "Stick Hut",
    id: "game.structure.plains.stickHut",
  },
  stickHutDescription: {
    ...dwellingStructureDescriptionMessage,
  },
});

const forestStructureMessages = defineMessages({
  archeryRange: {
    defaultMessage: "Archery Range",
    id: "game.structure.forest.archeryRange",
  },
  archeryRangeDescription: {
    ...dwellingStructureDescriptionMessage,
  },
  cottage: {
    defaultMessage: "Cottage",
    id: "game.structure.forest.cottage",
  },
  cottageDescription: {
    ...dwellingStructureDescriptionMessage,
  },
  fencedMeadow: {
    defaultMessage: "Fenced Meadow",
    id: "game.structure.forest.fencedMeadow",
  },
  fencedMeadowDescription: {
    ...dwellingStructureDescriptionMessage,
  },
  redTower: {
    defaultMessage: "Red Tower",
    id: "game.structure.forest.redTower",
  },
  redTowerDescription: {
    ...dwellingStructureDescriptionMessage,
  },
  stonehenge: {
    defaultMessage: "Stonehenge",
    id: "game.structure.forest.stonehenge",
  },
  stonehengeDescription: {
    ...dwellingStructureDescriptionMessage,
  },
  treehouse: {
    defaultMessage: "Treehouse",
    id: "game.structure.forest.treehouse",
  },
  treehouseDescription: {
    ...dwellingStructureDescriptionMessage,
  },
});

const mountainsStructureMessages = defineMessages({
  blackTower: {
    defaultMessage: "Black Tower",
    id: "game.structure.mountains.blackTower",
  },
  blackTowerDescription: {
    ...dwellingStructureDescriptionMessage,
  },
  cave: {
    defaultMessage: "Cave",
    id: "game.structure.mountains.cave",
  },
  caveDescription: {
    ...dwellingStructureDescriptionMessage,
  },
  crypt: {
    defaultMessage: "Crypt",
    id: "game.structure.mountains.crypt",
  },
  cryptDescription: {
    ...dwellingStructureDescriptionMessage,
  },
  maze: {
    defaultMessage: "Maze",
    id: "game.structure.mountains.maze",
  },
  mazeDescription: {
    ...dwellingStructureDescriptionMessage,
  },
  nest: {
    defaultMessage: "Nest",
    id: "game.structure.mountains.nest",
  },
  nestDescription: {
    ...dwellingStructureDescriptionMessage,
  },
  swamp: {
    defaultMessage: "Swamp",
    id: "game.structure.mountains.swamp",
  },
  swampDescription: {
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
  const placeholderNameMessage = structureMessages[`${index}Placeholder`];

  return (!isBuilt && placeholderNameMessage) || nameMessage || unknownMessage;
};

export const getStructureDescriptionMessage = (structure: string) =>
  structureMessages[`${convertValue(structure)}Description`] || unknownMessage;
