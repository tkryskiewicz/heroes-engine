import { HeroClassData } from "heroes-core";

import { CreatureId } from "./creatures";
import { HeroClassId } from "./HeroClassId";
import { Skill } from "./Skill";
import { TerrainType } from "./TerrainType";

export const heroClasses: HeroClassData[] = [
  {
    army: [
      {
        creature: CreatureId.Peasant,
        max: 50,
        min: 30,
      },
      {
        creature: CreatureId.Archer,
        max: 5,
        min: 0,
      },
    ],
    id: HeroClassId.Knight,
    skills: {
      [Skill.Attack]: 1,
      [Skill.Defense]: 2,
      [Skill.SpellPower]: 1,
      [Skill.Knowledge]: 1,
    },
  },
  {
    army: [
      {
        creature: CreatureId.Goblin,
        max: 25,
        min: 15,
      },
      {
        creature: CreatureId.Orc,
        max: 5,
        min: 0,
      },
    ],
    id: HeroClassId.Barbarian,
    skills: {
      [Skill.Attack]: 2,
      [Skill.Defense]: 1,
      [Skill.SpellPower]: 1,
      [Skill.Knowledge]: 1,
    },
    terrainMovementCostModifier: {
      type: "multiply",
      value: 1,
    },
  },
  {
    army: [
      {
        creature: CreatureId.Sprite,
        max: 20,
        min: 10,
      },
      {
        creature: CreatureId.Dwarf,
        max: 4,
        min: 0,
      },
    ],
    id: HeroClassId.Sorceress,
    skills: {
      [Skill.Attack]: 0,
      [Skill.Defense]: 0,
      [Skill.SpellPower]: 2,
      [Skill.Knowledge]: 3,
    },
    terrainMobilityModifier: {
      [TerrainType.Water]: {
        type: "multiply",
        value: 2,
      },
    },
  },
  {
    army: [
      {
        creature: CreatureId.Centaur,
        max: 10,
        min: 6,
      },
      {
        creature: CreatureId.Gargoyle,
        max: 4,
        min: 0,
      },
    ],
    id: HeroClassId.Warlock,
    skills: {
      [Skill.Attack]: 0,
      [Skill.Defense]: 0,
      [Skill.SpellPower]: 3,
      [Skill.Knowledge]: 2,
    },
  },
];
