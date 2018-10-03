import { defineMessages, FormattedMessage } from "react-intl";

export const farmCreatureMessages = defineMessages({
  archer: {
    defaultMessage: "Archer",
    id: "game.creature.archer",
  },
  cavalry: {
    defaultMessage: "Cavalry",
    id: "game.creature.cavalry",
  },
  paladin: {
    defaultMessage: "Paladin",
    id: "game.creature.paladin",
  },
  peasant: {
    defaultMessage: "Peasant",
    id: "game.creature.peasant",
  },
  pikeman: {
    defaultMessage: "Pikeman",
    id: "game.creature.pikeman",
  },
  swordsman: {
    defaultMessage: "Swordsman",
    id: "game.creature.swordsman",
  },
});

export const plainsCreatureMessages = defineMessages({
  cyclops: {
    defaultMessage: "Cyclops",
    id: "game.creature.cyclops",
  },
  goblin: {
    defaultMessage: "Goblin",
    id: "game.creature.goblin",
  },
  ogre: {
    defaultMessage: "Ogre",
    id: "game.creature.ogre",
  },
  orc: {
    defaultMessage: "Orc",
    id: "game.creature.orc",
  },
  troll: {
    defaultMessage: "Troll",
    id: "game.creature.troll",
  },
  wolf: {
    defaultMessage: "Wolf",
    id: "game.creature.wolf",
  },
});

export const forestCreatureMessages = defineMessages({
  druid: {
    defaultMessage: "Druid",
    id: "game.creautre.druid",
  },
  dwarf: {
    defaultMessage: "Dwarf",
    id: "game.creature.dwarf",
  },
  elf: {
    defaultMessage: "Elf",
    id: "game.creature.elf",
  },
  phoenix: {
    defaultMessage: "Phoenix",
    id: "game.creature.phoenix",
  },
  sprite: {
    defaultMessage: "Sprite",
    id: "game.creature.sprite",
  },
  unicorn: {
    defaultMessage: "Unicorn",
    id: "game.creature.unicorn",
  },
});

export const mountainsCreatureMessages = defineMessages({
  centaur: {
    defaultMessage: "Centaur",
    id: "game.creature.centaur",
  },
  dragon: {
    defaultMessage: "Dragon",
    id: "game.creature.dragon",
  },
  gargoyle: {
    defaultMessage: "Gargoyle",
    id: "game.creature.gargoyle",
  },
  griffin: {
    defaultMessage: "Griffin",
    id: "game.creature.griffin",
  },
  hydra: {
    defaultMessage: "Hydra",
    id: "game.creature.hydra",
  },
  minotaur: {
    defaultMessage: "Minotaur",
    id: "game.creature.minotaur",
  },
});

export const neutralCreatureMessages = defineMessages({
  genie: {
    defaultMessage: "Genie",
    id: "game.creature.genie",
  },
  ghost: {
    defaultMessage: "Ghost",
    id: "game.creature.ghost",
  },
  nomad: {
    defaultMessage: "Nomad",
    id: "game.creature.nomad",
  },
  rogue: {
    defaultMessage: "Rogue",
    id: "game.creature.rogue",
  },
});

export const creatureMessages: { [creature: string]: FormattedMessage.MessageDescriptor } = {
  ...farmCreatureMessages,
  ...plainsCreatureMessages,
  ...forestCreatureMessages,
  ...mountainsCreatureMessages,
  ...neutralCreatureMessages,
};

export const getCreatureNameMessage = (creature: string) => {
  return creatureMessages[creature];
};
