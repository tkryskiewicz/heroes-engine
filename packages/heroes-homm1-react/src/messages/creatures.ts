import { defineMessages, Messages } from "react-intl";

import { CreatureId } from "heroes-homm1";

import { unknownMessage } from "./util";

export const farmCreatureMessages = defineMessages({
  [CreatureId.Archer]: {
    defaultMessage: "Archer",
    id: "game.creature.archer",
  },
  [CreatureId.Cavalry]: {
    defaultMessage: "Cavalry",
    id: "game.creature.cavalry",
  },
  [CreatureId.Paladin]: {
    defaultMessage: "Paladin",
    id: "game.creature.paladin",
  },
  [CreatureId.Peasant]: {
    defaultMessage: "Peasant",
    id: "game.creature.peasant",
  },
  [CreatureId.Pikeman]: {
    defaultMessage: "Pikeman",
    id: "game.creature.pikeman",
  },
  [CreatureId.Swordsman]: {
    defaultMessage: "Swordsman",
    id: "game.creature.swordsman",
  },
});

export const plainsCreatureMessages = defineMessages({
  [CreatureId.Cyclops]: {
    defaultMessage: "Cyclops",
    id: "game.creature.cyclops",
  },
  [CreatureId.Goblin]: {
    defaultMessage: "Goblin",
    id: "game.creature.goblin",
  },
  [CreatureId.Ogre]: {
    defaultMessage: "Ogre",
    id: "game.creature.ogre",
  },
  [CreatureId.Orc]: {
    defaultMessage: "Orc",
    id: "game.creature.orc",
  },
  [CreatureId.Troll]: {
    defaultMessage: "Troll",
    id: "game.creature.troll",
  },
  [CreatureId.Wolf]: {
    defaultMessage: "Wolf",
    id: "game.creature.wolf",
  },
});

export const forestCreatureMessages = defineMessages({
  [CreatureId.Druid]: {
    defaultMessage: "Druid",
    id: "game.creautre.druid",
  },
  [CreatureId.Dwarf]: {
    defaultMessage: "Dwarf",
    id: "game.creature.dwarf",
  },
  [CreatureId.Elf]: {
    defaultMessage: "Elf",
    id: "game.creature.elf",
  },
  [CreatureId.Phoenix]: {
    defaultMessage: "Phoenix",
    id: "game.creature.phoenix",
  },
  [CreatureId.Sprite]: {
    defaultMessage: "Sprite",
    id: "game.creature.sprite",
  },
  [CreatureId.Unicorn]: {
    defaultMessage: "Unicorn",
    id: "game.creature.unicorn",
  },
});

export const mountainsCreatureMessages = defineMessages({
  [CreatureId.Centaur]: {
    defaultMessage: "Centaur",
    id: "game.creature.centaur",
  },
  [CreatureId.Dragon]: {
    defaultMessage: "Dragon",
    id: "game.creature.dragon",
  },
  [CreatureId.Gargoyle]: {
    defaultMessage: "Gargoyle",
    id: "game.creature.gargoyle",
  },
  [CreatureId.Griffin]: {
    defaultMessage: "Griffin",
    id: "game.creature.griffin",
  },
  [CreatureId.Hydra]: {
    defaultMessage: "Hydra",
    id: "game.creature.hydra",
  },
  [CreatureId.Minotaur]: {
    defaultMessage: "Minotaur",
    id: "game.creature.minotaur",
  },
});

export const neutralCreatureMessages = defineMessages({
  [CreatureId.Genie]: {
    defaultMessage: "Genie",
    id: "game.creature.genie",
  },
  [CreatureId.Ghost]: {
    defaultMessage: "Ghost",
    id: "game.creature.ghost",
  },
  [CreatureId.Nomad]: {
    defaultMessage: "Nomad",
    id: "game.creature.nomad",
  },
  [CreatureId.Rogue]: {
    defaultMessage: "Rogue",
    id: "game.creature.rogue",
  },
});

export const creatureMessages: Messages = {
  ...farmCreatureMessages,
  ...plainsCreatureMessages,
  ...forestCreatureMessages,
  ...mountainsCreatureMessages,
  ...neutralCreatureMessages,
};

export const getCreatureNameMessage = (creature: string) =>
  creatureMessages[creature] || unknownMessage;
