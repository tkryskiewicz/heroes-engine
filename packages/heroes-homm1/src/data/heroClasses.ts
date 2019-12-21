import { HeroClassData } from "heroes-core";

import { CreatureId } from "../creatures";
import { HeroClassId } from "./HeroClassId";
import { SkillId } from "./SkillId";
import { TerrainId } from "./TerrainId";

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
      [SkillId.Attack]: 1,
      [SkillId.Defense]: 2,
      [SkillId.SpellPower]: 1,
      [SkillId.Knowledge]: 1,
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
      [SkillId.Attack]: 2,
      [SkillId.Defense]: 1,
      [SkillId.SpellPower]: 1,
      [SkillId.Knowledge]: 1,
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
      [SkillId.Attack]: 0,
      [SkillId.Defense]: 0,
      [SkillId.SpellPower]: 2,
      [SkillId.Knowledge]: 3,
    },
    terrainMobilityModifier: {
      [TerrainId.Water]: {
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
      [SkillId.Attack]: 0,
      [SkillId.Defense]: 0,
      [SkillId.SpellPower]: 3,
      [SkillId.Knowledge]: 2,
    },
  },
];
