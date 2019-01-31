import { defineMessages, Messages } from "react-intl";

import { CreatureId } from "heroes-homm1";

import { unknownMessage } from "./util";

const getPluralKey = (creature: string) =>
  `${creature}Plural`;

export const farmCreatureMessages = defineMessages({
  [CreatureId.Archer]: {
    defaultMessage: "Archer",
    id: "game.creature.archer",
  },
  [getPluralKey(CreatureId.Archer)]: {
    defaultMessage: "Archers",
    id: "game.creature.archer.plural",
  },
  [CreatureId.Cavalry]: {
    defaultMessage: "Cavalry",
    id: "game.creature.cavalry",
  },
  [getPluralKey(CreatureId.Cavalry)]: {
    defaultMessage: "Cavalries",
    id: "game.creature.cavalry.plural",
  },
  [CreatureId.Paladin]: {
    defaultMessage: "Paladin",
    id: "game.creature.paladin",
  },
  [getPluralKey(CreatureId.Paladin)]: {
    defaultMessage: "Paladins",
    id: "game.creature.paladin.plural",
  },
  [CreatureId.Peasant]: {
    defaultMessage: "Peasant",
    id: "game.creature.peasant",
  },
  [getPluralKey(CreatureId.Peasant)]: {
    defaultMessage: "Peasants",
    id: "game.creature.peasant.plural",
  },
  [CreatureId.Pikeman]: {
    defaultMessage: "Pikeman",
    id: "game.creature.pikeman",
  },
  [getPluralKey(CreatureId.Pikeman)]: {
    defaultMessage: "Pikemen",
    id: "game.creature.archer.plural",
  },
  [CreatureId.Swordsman]: {
    defaultMessage: "Swordsman",
    id: "game.creature.swordsman",
  },
  [getPluralKey(CreatureId.Swordsman)]: {
    defaultMessage: "Swordsmen",
    id: "game.creature.swordsman.plural",
  },
});

export const plainsCreatureMessages = defineMessages({
  [CreatureId.Cyclops]: {
    defaultMessage: "Cyclops",
    id: "game.creature.cyclops",
  },
  [getPluralKey(CreatureId.Cyclops)]: {
    defaultMessage: "Cyclopes",
    id: "game.creature.cyclops.plural",
  },
  [CreatureId.Goblin]: {
    defaultMessage: "Goblin",
    id: "game.creature.goblin",
  },
  [getPluralKey(CreatureId.Goblin)]: {
    defaultMessage: "Goblins",
    id: "game.creature.goblin.plural",
  },
  [CreatureId.Ogre]: {
    defaultMessage: "Ogre",
    id: "game.creature.ogre",
  },
  [getPluralKey(CreatureId.Ogre)]: {
    defaultMessage: "Ogres",
    id: "game.creature.ogre.plural",
  },
  [CreatureId.Orc]: {
    defaultMessage: "Orc",
    id: "game.creature.orc",
  },
  [getPluralKey(CreatureId.Orc)]: {
    defaultMessage: "Orcs",
    id: "game.creature.orc.plural",
  },
  [CreatureId.Troll]: {
    defaultMessage: "Troll",
    id: "game.creature.troll",
  },
  [getPluralKey(CreatureId.Troll)]: {
    defaultMessage: "Trolls",
    id: "game.creature.troll.plural",
  },
  [CreatureId.Wolf]: {
    defaultMessage: "Wolf",
    id: "game.creature.wolf",
  },
  [getPluralKey(CreatureId.Wolf)]: {
    defaultMessage: "Wolves",
    id: "game.creature.wolf.plural",
  },
});

export const forestCreatureMessages = defineMessages({
  [CreatureId.Druid]: {
    defaultMessage: "Druid",
    id: "game.creautre.druid",
  },
  [getPluralKey(CreatureId.Druid)]: {
    defaultMessage: "Druids",
    id: "game.creature.druid.plural",
  },
  [CreatureId.Dwarf]: {
    defaultMessage: "Dwarf",
    id: "game.creature.dwarf",
  },
  [getPluralKey(CreatureId.Dwarf)]: {
    defaultMessage: "Dwarves",
    id: "game.creature.dwarf.plural",
  },
  [CreatureId.Elf]: {
    defaultMessage: "Elf",
    id: "game.creature.elf",
  },
  [getPluralKey(CreatureId.Elf)]: {
    defaultMessage: "Elves",
    id: "game.creature.elf.plural",
  },
  [CreatureId.Phoenix]: {
    defaultMessage: "Phoenix",
    id: "game.creature.phoenix",
  },
  [getPluralKey(CreatureId.Phoenix)]: {
    defaultMessage: "Phoenix",
    id: "game.creature.phoenix.plural",
  },
  [CreatureId.Sprite]: {
    defaultMessage: "Sprite",
    id: "game.creature.sprite",
  },
  [getPluralKey(CreatureId.Sprite)]: {
    defaultMessage: "Sprites",
    id: "game.creature.sprite.plural",
  },
  [CreatureId.Unicorn]: {
    defaultMessage: "Unicorn",
    id: "game.creature.unicorn",
  },
  [getPluralKey(CreatureId.Unicorn)]: {
    defaultMessage: "Unicorns",
    id: "game.creature.unicorn.plural",
  },
});

export const mountainsCreatureMessages = defineMessages({
  [CreatureId.Centaur]: {
    defaultMessage: "Centaur",
    id: "game.creature.centaur",
  },
  [getPluralKey(CreatureId.Centaur)]: {
    defaultMessage: "Centaurs",
    id: "game.creature.centaur.plural",
  },
  [CreatureId.Dragon]: {
    defaultMessage: "Dragon",
    id: "game.creature.dragon",
  },
  [getPluralKey(CreatureId.Dragon)]: {
    defaultMessage: "Dragons",
    id: "game.creature.dragon.plural",
  },
  [CreatureId.Gargoyle]: {
    defaultMessage: "Gargoyle",
    id: "game.creature.gargoyle",
  },
  [getPluralKey(CreatureId.Gargoyle)]: {
    defaultMessage: "Gargoyles",
    id: "game.creature.gargoyle.plural",
  },
  [CreatureId.Griffin]: {
    defaultMessage: "Griffin",
    id: "game.creature.griffin",
  },
  [getPluralKey(CreatureId.Griffin)]: {
    defaultMessage: "Griffins",
    id: "game.creature.griffin.plural",
  },
  [CreatureId.Hydra]: {
    defaultMessage: "Hydra",
    id: "game.creature.hydra",
  },
  [getPluralKey(CreatureId.Hydra)]: {
    defaultMessage: "Hydras",
    id: "game.creature.hydra.plural",
  },
  [CreatureId.Minotaur]: {
    defaultMessage: "Minotaur",
    id: "game.creature.minotaur",
  },
  [getPluralKey(CreatureId.Minotaur)]: {
    defaultMessage: "Minotaurs",
    id: "game.creature.minotaur.plural",
  },
});

export const neutralCreatureMessages = defineMessages({
  [CreatureId.Genie]: {
    defaultMessage: "Genie",
    id: "game.creature.genie",
  },
  [getPluralKey(CreatureId.Genie)]: {
    defaultMessage: "Genies",
    id: "game.creature.genie.plural",
  },
  [CreatureId.Ghost]: {
    defaultMessage: "Ghost",
    id: "game.creature.ghost",
  },
  [getPluralKey(CreatureId.Ghost)]: {
    defaultMessage: "Ghosts",
    id: "game.creature.ghost.plural",
  },
  [CreatureId.Nomad]: {
    defaultMessage: "Nomad",
    id: "game.creature.nomad",
  },
  [getPluralKey(CreatureId.Nomad)]: {
    defaultMessage: "Nomads",
    id: "game.creature.nomad.plural",
  },
  [CreatureId.Rogue]: {
    defaultMessage: "Rogue",
    id: "game.creature.rogue",
  },
  [getPluralKey(CreatureId.Rogue)]: {
    defaultMessage: "Rogues",
    id: "game.creature.rogue.plural",
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

export const getCreaturePluralNameMessage = (creature: string) =>
  creatureMessages[getPluralKey(creature)] || unknownMessage;
