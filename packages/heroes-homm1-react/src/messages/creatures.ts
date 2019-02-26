import { defineMessages, Messages } from "react-intl";

import { CreatureId } from "heroes-homm1";

import { convertValue, unknownMessage } from "./util";

const getKey = (creature: string) =>
  convertValue(creature);

const getPluralKey = (creature: string) =>
  `${convertValue(creature)}Plural`;

const farmCreatureMessages = defineMessages({
  [getKey(CreatureId.Archer)]: {
    defaultMessage: "Archer",
    id: "game.creature.archer",
  },
  [getPluralKey(CreatureId.Archer)]: {
    defaultMessage: "Archers",
    id: "game.creature.archer.plural",
  },
  [getKey(CreatureId.Cavalry)]: {
    defaultMessage: "Cavalry",
    id: "game.creature.cavalry",
  },
  [getPluralKey(CreatureId.Cavalry)]: {
    defaultMessage: "Cavalries",
    id: "game.creature.cavalry.plural",
  },
  [getKey(CreatureId.Paladin)]: {
    defaultMessage: "Paladin",
    id: "game.creature.paladin",
  },
  [getPluralKey(CreatureId.Paladin)]: {
    defaultMessage: "Paladins",
    id: "game.creature.paladin.plural",
  },
  [getKey(CreatureId.Peasant)]: {
    defaultMessage: "Peasant",
    id: "game.creature.peasant",
  },
  [getPluralKey(CreatureId.Peasant)]: {
    defaultMessage: "Peasants",
    id: "game.creature.peasant.plural",
  },
  [getKey(CreatureId.Pikeman)]: {
    defaultMessage: "Pikeman",
    id: "game.creature.pikeman",
  },
  [getPluralKey(CreatureId.Pikeman)]: {
    defaultMessage: "Pikemen",
    id: "game.creature.archer.plural",
  },
  [getKey(CreatureId.Swordsman)]: {
    defaultMessage: "Swordsman",
    id: "game.creature.swordsman",
  },
  [getPluralKey(CreatureId.Swordsman)]: {
    defaultMessage: "Swordsmen",
    id: "game.creature.swordsman.plural",
  },
});

const plainsCreatureMessages = defineMessages({
  [getKey(CreatureId.Cyclops)]: {
    defaultMessage: "Cyclops",
    id: "game.creature.cyclops",
  },
  [getPluralKey(CreatureId.Cyclops)]: {
    defaultMessage: "Cyclopes",
    id: "game.creature.cyclops.plural",
  },
  [getKey(CreatureId.Goblin)]: {
    defaultMessage: "Goblin",
    id: "game.creature.goblin",
  },
  [getPluralKey(CreatureId.Goblin)]: {
    defaultMessage: "Goblins",
    id: "game.creature.goblin.plural",
  },
  [getKey(CreatureId.Ogre)]: {
    defaultMessage: "Ogre",
    id: "game.creature.ogre",
  },
  [getPluralKey(CreatureId.Ogre)]: {
    defaultMessage: "Ogres",
    id: "game.creature.ogre.plural",
  },
  [getKey(CreatureId.Orc)]: {
    defaultMessage: "Orc",
    id: "game.creature.orc",
  },
  [getPluralKey(CreatureId.Orc)]: {
    defaultMessage: "Orcs",
    id: "game.creature.orc.plural",
  },
  [getKey(CreatureId.Troll)]: {
    defaultMessage: "Troll",
    id: "game.creature.troll",
  },
  [getPluralKey(CreatureId.Troll)]: {
    defaultMessage: "Trolls",
    id: "game.creature.troll.plural",
  },
  [getKey(CreatureId.Wolf)]: {
    defaultMessage: "Wolf",
    id: "game.creature.wolf",
  },
  [getPluralKey(CreatureId.Wolf)]: {
    defaultMessage: "Wolves",
    id: "game.creature.wolf.plural",
  },
});

const forestCreatureMessages = defineMessages({
  [getKey(CreatureId.Druid)]: {
    defaultMessage: "Druid",
    id: "game.creautre.druid",
  },
  [getPluralKey(CreatureId.Druid)]: {
    defaultMessage: "Druids",
    id: "game.creature.druid.plural",
  },
  [getKey(CreatureId.Dwarf)]: {
    defaultMessage: "Dwarf",
    id: "game.creature.dwarf",
  },
  [getPluralKey(CreatureId.Dwarf)]: {
    defaultMessage: "Dwarves",
    id: "game.creature.dwarf.plural",
  },
  [getKey(CreatureId.Elf)]: {
    defaultMessage: "Elf",
    id: "game.creature.elf",
  },
  [getPluralKey(CreatureId.Elf)]: {
    defaultMessage: "Elves",
    id: "game.creature.elf.plural",
  },
  [getKey(CreatureId.Phoenix)]: {
    defaultMessage: "Phoenix",
    id: "game.creature.phoenix",
  },
  [getPluralKey(CreatureId.Phoenix)]: {
    defaultMessage: "Phoenix",
    id: "game.creature.phoenix.plural",
  },
  [getKey(CreatureId.Sprite)]: {
    defaultMessage: "Sprite",
    id: "game.creature.sprite",
  },
  [getPluralKey(CreatureId.Sprite)]: {
    defaultMessage: "Sprites",
    id: "game.creature.sprite.plural",
  },
  [getKey(CreatureId.Unicorn)]: {
    defaultMessage: "Unicorn",
    id: "game.creature.unicorn",
  },
  [getPluralKey(CreatureId.Unicorn)]: {
    defaultMessage: "Unicorns",
    id: "game.creature.unicorn.plural",
  },
});

const mountainsCreatureMessages = defineMessages({
  [getKey(CreatureId.Centaur)]: {
    defaultMessage: "Centaur",
    id: "game.creature.centaur",
  },
  [getPluralKey(CreatureId.Centaur)]: {
    defaultMessage: "Centaurs",
    id: "game.creature.centaur.plural",
  },
  [getKey(CreatureId.Dragon)]: {
    defaultMessage: "Dragon",
    id: "game.creature.dragon",
  },
  [getPluralKey(CreatureId.Dragon)]: {
    defaultMessage: "Dragons",
    id: "game.creature.dragon.plural",
  },
  [getKey(CreatureId.Gargoyle)]: {
    defaultMessage: "Gargoyle",
    id: "game.creature.gargoyle",
  },
  [getPluralKey(CreatureId.Gargoyle)]: {
    defaultMessage: "Gargoyles",
    id: "game.creature.gargoyle.plural",
  },
  [getKey(CreatureId.Griffin)]: {
    defaultMessage: "Griffin",
    id: "game.creature.griffin",
  },
  [getPluralKey(CreatureId.Griffin)]: {
    defaultMessage: "Griffins",
    id: "game.creature.griffin.plural",
  },
  [getKey(CreatureId.Hydra)]: {
    defaultMessage: "Hydra",
    id: "game.creature.hydra",
  },
  [getPluralKey(CreatureId.Hydra)]: {
    defaultMessage: "Hydras",
    id: "game.creature.hydra.plural",
  },
  [getKey(CreatureId.Minotaur)]: {
    defaultMessage: "Minotaur",
    id: "game.creature.minotaur",
  },
  [getPluralKey(CreatureId.Minotaur)]: {
    defaultMessage: "Minotaurs",
    id: "game.creature.minotaur.plural",
  },
});

const neutralCreatureMessages = defineMessages({
  [getKey(CreatureId.Genie)]: {
    defaultMessage: "Genie",
    id: "game.creature.genie",
  },
  [getPluralKey(CreatureId.Genie)]: {
    defaultMessage: "Genies",
    id: "game.creature.genie.plural",
  },
  [getKey(CreatureId.Ghost)]: {
    defaultMessage: "Ghost",
    id: "game.creature.ghost",
  },
  [getPluralKey(CreatureId.Ghost)]: {
    defaultMessage: "Ghosts",
    id: "game.creature.ghost.plural",
  },
  [getKey(CreatureId.Nomad)]: {
    defaultMessage: "Nomad",
    id: "game.creature.nomad",
  },
  [getPluralKey(CreatureId.Nomad)]: {
    defaultMessage: "Nomads",
    id: "game.creature.nomad.plural",
  },
  [getKey(CreatureId.Rogue)]: {
    defaultMessage: "Rogue",
    id: "game.creature.rogue",
  },
  [getPluralKey(CreatureId.Rogue)]: {
    defaultMessage: "Rogues",
    id: "game.creature.rogue.plural",
  },
});

const creatureMessages: Messages = {
  ...farmCreatureMessages,
  ...plainsCreatureMessages,
  ...forestCreatureMessages,
  ...mountainsCreatureMessages,
  ...neutralCreatureMessages,
};

export const getCreatureNameMessage = (creature: string) =>
  creatureMessages[getKey(creature)] || unknownMessage;

export const getCreaturePluralNameMessage = (creature: string) =>
  creatureMessages[getPluralKey(creature)] || unknownMessage;
