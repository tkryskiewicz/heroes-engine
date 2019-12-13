import { defineMessages } from "react-intl";

import { SkillId } from "heroes-homm1";

import { convertValue, unknownMessage } from "./util";

const getKey = (skill: string) =>
  convertValue(skill);

const getDescriptionKey = (skill: string) =>
  `${convertValue(skill)}Description`;

const skillMessages = defineMessages({
  [getKey(SkillId.Attack)]: {
    defaultMessage: "Attack Skill",
    id: "game.skill.attack.name",
  },
  [getDescriptionKey(SkillId.Attack)]: {
    defaultMessage: "Your attack skill is a bonus added to each creature's attack skill.",
    id: "game.skill.attack.description",
  },
  [getKey(SkillId.Defense)]: {
    defaultMessage: "Defense Skill",
    id: "game.skill.defense.name",
  },
  [getDescriptionKey(SkillId.Defense)]: {
    defaultMessage: "Your defense skill is a bonus added to each creature's defense skill.",
    id: "game.skill.defense.description",
  },
  [getKey(SkillId.Knowledge)]: {
    defaultMessage: "Knowledge",
    id: "game.skill.knowledge.name",
  },
  [getDescriptionKey(SkillId.Knowledge)]: {
    defaultMessage: "Your knowledge is the number of each spell you are able to memorize.",
    id: "game.skill.knowledge.description",
  },
  [getKey(SkillId.SpellPower)]: {
    defaultMessage: "Spell Power",
    id: "game.skill.spellPower.name",
  },
  [getDescriptionKey(SkillId.SpellPower)]: {
    defaultMessage: "Your spell power determines the length or power of a spell.",
    id: "game.skill.spellPower.description",
  },
});

export const getSkillNameMessage = (skill: string) =>
  skillMessages[getKey(skill)] || unknownMessage;

export const getSkillDescriptionMessage = (skill: string) =>
  skillMessages[getDescriptionKey(skill)] || unknownMessage;
