import { Creature } from "heroes-core";

import { TownId } from "./towns";

// Farm
export enum CreatureId {
  Peasant = "peasant",
  Archer = "archer",
  Pikeman = "pikeman",
  Swordsman = "swordsman",
  Cavalry = "cavalry",
  Paladin = "paladin",
}

const farmCreatures: Creature[] = [
  {
    attack: 1,
    damage: {
      max: 1,
      min: 1,
    },
    defense: 1,
    id: CreatureId.Peasant,
    town: TownId.Farm,
  },
  {
    attack: 5,
    damage: {
      max: 2,
      min: 3,
    },
    defense: 3,
    id: CreatureId.Archer,
    town: TownId.Farm,
  },
  {
    attack: 5,
    damage: {
      max: 3,
      min: 4,
    },
    defense: 9,
    id: CreatureId.Pikeman,
    town: TownId.Farm,
  },
  {
    attack: 7,
    damage: {
      max: 4,
      min: 6,
    },
    defense: 9,
    id: CreatureId.Swordsman,
    town: TownId.Farm,
  },
  {
    attack: 10,
    damage: {
      max: 5,
      min: 10,
    },
    defense: 9,
    id: CreatureId.Cavalry,
    town: TownId.Farm,
  },
  {
    attack: 11,
    damage: {
      max: 10,
      min: 20,
    },
    defense: 12,
    id: CreatureId.Paladin,
    town: TownId.Farm,
  },
];

// Plains
export enum CreatureId {
  Goblin = "goblin",
  Orc = "orc",
  Wolf = "wolf",
  Ogre = "ogre",
  Troll = "troll",
  Cyclops = "cyclops",
}

const plainsCreatures: Creature[] = [
  {
    attack: 3,
    damage: {
      max: 1,
      min: 2,
    },
    defense: 1,
    id: CreatureId.Goblin,
    town: TownId.Plains,
  },
  {
    attack: 3,
    damage: {
      max: 2,
      min: 3,
    },
    defense: 4,
    id: CreatureId.Orc,
    town: TownId.Plains,
  },
  {
    attack: 6,
    damage: {
      max: 3,
      min: 5,
    },
    defense: 2,
    id: CreatureId.Wolf,
    town: TownId.Plains,
  },
  {
    attack: 9,
    damage: {
      max: 4,
      min: 6,
    },
    defense: 5,
    id: CreatureId.Ogre,
    town: TownId.Plains,
  },
  {
    attack: 10,
    damage: {
      max: 5,
      min: 7,
    },
    defense: 5,
    id: CreatureId.Troll,
    town: TownId.Plains,
  },
  {
    attack: 12,
    damage: {
      max: 12,
      min: 24,
    },
    defense: 9,
    id: CreatureId.Cyclops,
    town: TownId.Plains,
  },
];

// Forest
export enum CreatureId {
  Sprite = "sprite",
  Dwarf = "dwarf",
  Elf = "elf",
  Druid = "druid",
  Unicorn = "unicorn",
  Phoenix = "phoenix",
}

const forestCreatures: Creature[] = [
  {
    attack: 4,
    damage: {
      max: 1,
      min: 2,
    },
    defense: 2,
    id: CreatureId.Sprite,
    town: TownId.Forest,
  },
  {
    attack: 6,
    damage: {
      max: 2,
      min: 4,
    },
    defense: 5,
    id: CreatureId.Dwarf,
    town: TownId.Forest,
  },
  {
    attack: 4,
    damage: {
      max: 2,
      min: 3,
    },
    defense: 3,
    id: CreatureId.Elf,
    town: TownId.Forest,
  },
  {
    attack: 7,
    damage: {
      max: 5,
      min: 8,
    },
    defense: 5,
    id: CreatureId.Druid,
    town: TownId.Forest,
  },
  {
    attack: 10,
    damage: {
      max: 7,
      min: 14,
    },
    defense: 9,
    id: CreatureId.Unicorn,
    town: TownId.Forest,
  },
  {
    attack: 12,
    damage: {
      max: 20,
      min: 40,
    },
    defense: 10,
    id: CreatureId.Phoenix,
    town: TownId.Forest,
  },
];

// Mountains
export enum CreatureId {
  Centaur = "centaur",
  Gargoyle = "gargoyle",
  Griffin = "griffin",
  Minotaur = "minotaur",
  Hydra = "hydra",
  Dragon = "dragon",
}

const mountainsCreatures: Creature[] = [
  {
    attack: 3,
    damage: {
      max: 1,
      min: 2,
    },
    defense: 1,
    id: CreatureId.Centaur,
    town: TownId.Mountains,
  },
  {
    attack: 4,
    damage: {
      max: 2,
      min: 3,
    },
    defense: 7,
    id: CreatureId.Gargoyle,
    town: TownId.Mountains,
  },
  {
    attack: 6,
    damage: {
      max: 3,
      min: 5,
    },
    defense: 6,
    id: CreatureId.Griffin,
    town: TownId.Mountains,
  },
  {
    attack: 9,
    damage: {
      max: 5,
      min: 10,
    },
    defense: 8,
    id: CreatureId.Minotaur,
    town: TownId.Mountains,
  },
  {
    attack: 8,
    damage: {
      max: 6,
      min: 12,
    },
    defense: 9,
    id: CreatureId.Hydra,
    town: TownId.Mountains,
  },
  {
    attack: 12,
    damage: {
      max: 25,
      min: 50,
    },
    defense: 12,
    id: CreatureId.Dragon,
    town: TownId.Mountains,
  },
];

// Neutral
export enum CreatureId {
  Rogue = "rogue",
  Nomad = "nomad",
  Genie = "genie",
  Ghost = "ghost",
}

const neutralCreatures: Creature[] = [
  {
    attack: 6,
    damage: {
      max: 1,
      min: 2,
    },
    defense: 1,
    id: CreatureId.Rogue,
  },
  {
    attack: 7,
    damage: {
      max: 2,
      min: 5,
    },
    defense: 6,
    id: CreatureId.Nomad,
  },
  {
    attack: 10,
    damage: {
      max: 20,
      min: 30,
    },
    defense: 9,
    id: CreatureId.Genie,
  },
  {
    attack: 8,
    damage: {
      max: 4,
      min: 6,
    },
    defense: 7,
    id: CreatureId.Ghost,
  },
];

export const creatures = [
  ...farmCreatures,
  ...plainsCreatures,
  ...forestCreatures,
  ...mountainsCreatures,
  ...neutralCreatures,
];
