import { Creature } from "heroes-core";

import { CreatureSpeed } from "./CreatureSpeed";
import { TownId } from "./TownId";

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
    hitPoints: 1,
    id: CreatureId.Peasant,
    speed: CreatureSpeed.Slow,
    town: TownId.Farm,
  },
  {
    attack: 5,
    damage: {
      max: 3,
      min: 2,
    },
    defense: 3,
    hitPoints: 10,
    id: CreatureId.Archer,
    shots: 12,
    speed: CreatureSpeed.Slow,
    town: TownId.Farm,
  },
  {
    attack: 5,
    damage: {
      max: 4,
      min: 3,
    },
    defense: 9,
    hitPoints: 15,
    id: CreatureId.Pikeman,
    speed: CreatureSpeed.Medium,
    town: TownId.Farm,
  },
  {
    attack: 7,
    damage: {
      max: 6,
      min: 4,
    },
    defense: 9,
    hitPoints: 25,
    id: CreatureId.Swordsman,
    speed: CreatureSpeed.Medium,
    town: TownId.Farm,
  },
  {
    attack: 10,
    damage: {
      max: 10,
      min: 5,
    },
    defense: 9,
    hitPoints: 30,
    id: CreatureId.Cavalry,
    speed: CreatureSpeed.Fast,
    town: TownId.Farm,
  },
  {
    attack: 11,
    damage: {
      max: 20,
      min: 10,
    },
    defense: 12,
    hitPoints: 50,
    id: CreatureId.Paladin,
    speed: CreatureSpeed.Fast,
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
      max: 2,
      min: 1,
    },
    defense: 1,
    hitPoints: 3,
    id: CreatureId.Goblin,
    speed: CreatureSpeed.Medium,
    town: TownId.Plains,
  },
  {
    attack: 3,
    damage: {
      max: 3,
      min: 2,
    },
    defense: 4,
    hitPoints: 10,
    id: CreatureId.Orc,
    shots: 8,
    speed: CreatureSpeed.Slow,
    town: TownId.Plains,
  },
  {
    attack: 6,
    damage: {
      max: 5,
      min: 3,
    },
    defense: 2,
    hitPoints: 20,
    id: CreatureId.Wolf,
    speed: CreatureSpeed.Fast,
    town: TownId.Plains,
  },
  {
    attack: 9,
    damage: {
      max: 6,
      min: 4,
    },
    defense: 5,
    hitPoints: 40,
    id: CreatureId.Ogre,
    speed: CreatureSpeed.Slow,
    town: TownId.Plains,
  },
  {
    attack: 10,
    damage: {
      max: 7,
      min: 5,
    },
    defense: 5,
    hitPoints: 40,
    id: CreatureId.Troll,
    shots: 8,
    speed: CreatureSpeed.Medium,
    town: TownId.Plains,
  },
  {
    attack: 12,
    damage: {
      max: 24,
      min: 12,
    },
    defense: 9,
    hitPoints: 80,
    id: CreatureId.Cyclops,
    speed: CreatureSpeed.Medium,
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
      max: 2,
      min: 1,
    },
    defense: 2,
    hitPoints: 2,
    id: CreatureId.Sprite,
    speed: CreatureSpeed.Medium,
    town: TownId.Forest,
  },
  {
    attack: 6,
    damage: {
      max: 4,
      min: 2,
    },
    defense: 5,
    hitPoints: 20,
    id: CreatureId.Dwarf,
    speed: CreatureSpeed.Slow,
    town: TownId.Forest,
  },
  {
    attack: 4,
    damage: {
      max: 3,
      min: 2,
    },
    defense: 3,
    hitPoints: 15,
    id: CreatureId.Elf,
    shots: 24,
    speed: CreatureSpeed.Medium,
    town: TownId.Forest,
  },
  {
    attack: 7,
    damage: {
      max: 8,
      min: 5,
    },
    defense: 5,
    hitPoints: 25,
    id: CreatureId.Druid,
    shots: 8,
    speed: CreatureSpeed.Fast,
    town: TownId.Forest,
  },
  {
    attack: 10,
    damage: {
      max: 14,
      min: 7,
    },
    defense: 9,
    hitPoints: 40,
    id: CreatureId.Unicorn,
    speed: CreatureSpeed.Medium,
    town: TownId.Forest,
  },
  {
    attack: 12,
    damage: {
      max: 40,
      min: 20,
    },
    defense: 10,
    hitPoints: 100,
    id: CreatureId.Phoenix,
    speed: CreatureSpeed.Fast,
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
      max: 2,
      min: 1,
    },
    defense: 1,
    hitPoints: 5,
    id: CreatureId.Centaur,
    shots: 8,
    speed: CreatureSpeed.Medium,
    town: TownId.Mountains,
  },
  {
    attack: 4,
    damage: {
      max: 3,
      min: 2,
    },
    defense: 7,
    hitPoints: 15,
    id: CreatureId.Gargoyle,
    speed: CreatureSpeed.Fast,
    town: TownId.Mountains,
  },
  {
    attack: 6,
    damage: {
      max: 5,
      min: 3,
    },
    defense: 6,
    hitPoints: 25,
    id: CreatureId.Griffin,
    speed: CreatureSpeed.Medium,
    town: TownId.Mountains,
  },
  {
    attack: 9,
    damage: {
      max: 10,
      min: 5,
    },
    defense: 8,
    hitPoints: 35,
    id: CreatureId.Minotaur,
    speed: CreatureSpeed.Medium,
    town: TownId.Mountains,
  },
  {
    attack: 8,
    damage: {
      max: 12,
      min: 6,
    },
    defense: 9,
    hitPoints: 75,
    id: CreatureId.Hydra,
    speed: CreatureSpeed.Slow,
    town: TownId.Mountains,
  },
  {
    attack: 12,
    damage: {
      max: 50,
      min: 25,
    },
    defense: 12,
    hitPoints: 200,
    id: CreatureId.Dragon,
    speed: CreatureSpeed.Medium,
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
      max: 2,
      min: 1,
    },
    defense: 1,
    hitPoints: 4,
    id: CreatureId.Rogue,
    speed: CreatureSpeed.Fast,
  },
  {
    attack: 7,
    damage: {
      max: 5,
      min: 2,
    },
    defense: 6,
    hitPoints: 20,
    id: CreatureId.Nomad,
    speed: CreatureSpeed.Fast,
  },
  {
    attack: 10,
    damage: {
      max: 30,
      min: 20,
    },
    defense: 9,
    hitPoints: 50,
    id: CreatureId.Genie,
    speed: CreatureSpeed.Fast,
  },
  {
    attack: 8,
    damage: {
      max: 6,
      min: 4,
    },
    defense: 7,
    hitPoints: 20,
    id: CreatureId.Ghost,
    speed: CreatureSpeed.Medium,
  },
];

export const creatures = [
  ...farmCreatures,
  ...plainsCreatures,
  ...forestCreatures,
  ...mountainsCreatures,
  ...neutralCreatures,
];

export const creaturesById = creatures.reduce<{ readonly [id: string]: Creature }>((p, c) => {
  return {
    ...p,
    [c.id]: c,
  };
}, {});
