import { CreatureId } from "./creatures";
import { HeroClass } from "./HeroClass";
import { Skill } from "./Skill";

export const heroClasses = [
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
    id: HeroClass.Knight,
    skills: {
      [Skill.AttackSkill]: 1,
      [Skill.DefenseSkill]: 2,
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
    id: HeroClass.Barbarian,
    skills: {
      [Skill.AttackSkill]: 2,
      [Skill.DefenseSkill]: 1,
      [Skill.SpellPower]: 1,
      [Skill.Knowledge]: 1,
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
    id: HeroClass.Sorceress,
    skills: {
      [Skill.AttackSkill]: 0,
      [Skill.DefenseSkill]: 0,
      [Skill.SpellPower]: 2,
      [Skill.Knowledge]: 3,
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
    id: HeroClass.Warlock,
    skills: {
      [Skill.AttackSkill]: 0,
      [Skill.DefenseSkill]: 0,
      [Skill.SpellPower]: 3,
      [Skill.Knowledge]: 2,
    },
  },
];
