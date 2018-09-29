import { defineMessages } from "react-intl";

import { Skill } from "heroes-homm1";

// TODO: move to general messages?
export const skillMessages = defineMessages({
  attackSkill: {
    defaultMessage: "Attack Skill",
    id: "game.skill.attackSkill.name",
  },
  attackSkillDescription: {
    defaultMessage: "Your attack skill is a bonus added to each creature's attack skill.",
    id: "game.skill.attackSkill.description",
  },
  defenseSkill: {
    defaultMessage: "Defense Skill",
    id: "game.skill.defenseSkill.name",
  },
  defenseSkillDescription: {
    defaultMessage: "Your defense skill is a bonus added to each creature's defense skill.",
    id: "game.skill.defenseSkill.description",
  },
  knowledge: {
    defaultMessage: "Knowledge",
    id: "game.skill.knowledge.name",
  },
  knowledgeDescription: {
    defaultMessage: "Your knowledge is the number of each spell you are able to memorize.",
    id: "game.skill.knowledge.description",
  },
  spellPower: {
    defaultMessage: "Spell Power",
    id: "game.skill.spellPower.name",
  },
  spellPowerDescription: {
    defaultMessage: "Your spell power determines the length or power of a spell.",
    id: "game.skill.spellPower.description",
  },
  // TODO: do we need messages for unknown skills?
  unknown: {
    defaultMessage: "Unknown",
    id: "game.skill.unknown.name",
  },
  unknownDescription: {
    defaultMessage: "No description.",
    id: "game.skill.unknown.description",
  },
});

export const getSkillNameMessage = (skill: string) => {
  switch (skill) {
    case Skill.AttackSkill:
      return skillMessages.attackSkill;
    case Skill.DefenseSkill:
      return skillMessages.defenseSkill;
    case Skill.SpellPower:
      return skillMessages.spellPower;
    case Skill.Knowledge:
      return skillMessages.knowledge;
    default:
      return skillMessages.unknown;
  }
};

export const getSkillDescriptionMessage = (skill: string) => {
  switch (skill) {
    case Skill.AttackSkill:
      return skillMessages.attackSkillDescription;
    case Skill.DefenseSkill:
      return skillMessages.defenseSkillDescription;
    case Skill.SpellPower:
      return skillMessages.spellPowerDescription;
    case Skill.Knowledge:
      return skillMessages.knowledgeDescription;
    default:
      return skillMessages.unknownDescription;
  }
};
