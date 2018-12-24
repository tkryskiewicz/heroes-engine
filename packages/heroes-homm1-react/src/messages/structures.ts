import { defineMessages, Messages } from "react-intl";

import { convertValue, unknownMessage } from "./util";

const commonStructureMessages = defineMessages({
  castle: {
    defaultMessage: "Castle",
    id: "game.structure.castle",
  },
  castleDescription: {
    defaultMessage: "The Castle improves town defense and income.",
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
    defaultMessage: "The Mage Guild allows heroes to learn and replenish spells.",
    id: "game.structure.mageGuild.description",
  },
  shipyard: {
    defaultMessage: "Shipyard",
    id: "game.structure.shipyard",
  },
  shipyardDescription: {
    defaultMessage: "The Shipyard allows ships to be built.",
    id: "game.structure.shipyard.description",
  },
  tavern: {
    defaultMessage: "Tavern",
    id: "game.structure.tavern",
  },
  tavernDescription: {
    defaultMessage: "The tavern increases the morale of all garrisoned troops.",
    id: "game.structure.tavern.description",
  },
  thievesGuild: {
    defaultMessage: "Thieves' Guild",
    id: "game.structure.thievesGuild",
  },
  thievesGuildDescription: {
    defaultMessage: "The Thieves' Guild provides information on enemy players. " +
      "Thieves' Guilds can also provide scouting information on enemy towns. " +
      "Additional Guilds provide more information.",
    id: "game.structure.thievesGuild.description",
  },
  well: {
    defaultMessage: "Well",
    id: "game.structure.well",
  },
  wellDescription: {
    defaultMessage: "The Well increases the growth rate of all dwellings by 2 creatures per week.",
    id: "game.structure.well.description",
  },
});

const farmStructureMessages = defineMessages({
  archeryRange: {
    defaultMessage: "Archery Range",
    id: "game.structure.farm.archeryRange",
  },
  armory: {
    defaultMessage: "Armory",
    id: "game.structure.farm.armory",
  },
  blacksmith: {
    defaultMessage: "Blacksmith",
    id: "game.structure.farm.blacksmith",
  },
  cathedral: {
    defaultMessage: "Cathedral",
    id: "game.structure.farm.cathedral",
  },
  joustingArena: {
    defaultMessage: "Jousting Arena",
    id: "game.structure.farm.joustingArena",
  },
  thatchedHut: {
    defaultMessage: "Thatched Hut",
    id: "game.structure.farm.thatchedHut",
  },
});

const plainsStructureMessages = defineMessages({
  adobe: {
    defaultMessage: "Adobe",
    id: "game.structure.plains.adobe",
  },
  bridge: {
    defaultMessage: "Bridge",
    id: "game.structure.plains.bridge",
  },
  den: {
    defaultMessage: "Den",
    id: "game.structure.plains.den",
  },
  hut: {
    defaultMessage: "Hut",
    id: "game.structure.plains.hut",
  },
  pyramid: {
    defaultMessage: "Pyramid",
    id: "game.structure.plains.pyramid",
  },
  stickHut: {
    defaultMessage: "Stick Hut",
    id: "game.structure.plains.stickHut",
  },
});

const forestStructureMessages = defineMessages({
  archeryRange: {
    defaultMessage: "Archery Range",
    id: "game.structure.forest.archeryRange",
  },
  cottage: {
    defaultMessage: "Cottage",
    id: "game.structure.forest.cottage",
  },
  fencedMeadow: {
    defaultMessage: "Fenced Meadow",
    id: "game.structure.forest.fencedMeadow",
  },
  redTower: {
    defaultMessage: "Red Tower",
    id: "game.structure.forest.redTower",
  },
  stonehenge: {
    defaultMessage: "Stonehenge",
    id: "game.structure.forest.stonehenge",
  },
  treehouse: {
    defaultMessage: "Treehouse",
    id: "game.structure.forest.treehouse",
  },
});

const mountainsStructureMessages = defineMessages({
  blackTower: {
    defaultMessage: "Black Tower",
    id: "game.structure.mountains.blackTower",
  },
  cave: {
    defaultMessage: "Cave",
    id: "game.structure.mountains.cave",
  },
  crypt: {
    defaultMessage: "Crypt",
    id: "game.structure.mountains.crypt",
  },
  maze: {
    defaultMessage: "Maze",
    id: "game.structure.mountains.maze",
  },
  nest: {
    defaultMessage: "Nest",
    id: "game.structure.mountains.nest",
  },
  swamp: {
    defaultMessage: "Swamp",
    id: "game.structure.mountains.swamp",
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
