import { defineMessages, Messages } from "react-intl";

import { CampaignId, Skill } from "heroes-homm1";

export { getArtifactNameMessage, getArtifactShortNameMessage, getArtifactDescriptionMessage } from "./artifacts";
export { getCreatureNameMessage, getCreaturePluralNameMessage } from "./creatures";
export { getHeroClassNameMessage, getHeroClassTitleMessage } from "./heroClasses";
export { getHeroNameMessage } from "./heroes";
export {
  luckMessages,
  getLuckDescriptionMessage,
  getLuckModifierTypeMessage,
  getLuckNameMessage,
  getLuckValueMessage,
} from "./luck";
export { getMapObjectNameMessage } from "./mapObjects";
export {
  moraleMessages,
  getMoraleTypeDescriptionMessage,
  getMoraleModifierTypeMessage,
  getMoraleTypeNameMessage,
  getMoraleTypeValueMessage,
  getOriginNameMessage,
} from "./morale";
export {
  getScenarioDifficultyMessage,
  getScenarioSizeMessage,
  getKingOfTheHillMessage,
  getOpponentSettingNameMessage,
} from "./scenarios";
export { getSpellNameMessage, getSpellLongNameMessage, getSpellDescriptionMessage } from "./spells";
export { getStructureDescriptionMessage, getStructureNameMessage } from "./structures";

import { unknownMessage } from "./util";

export const gameDifficultyMessages: Messages = defineMessages({
  easy: {
    defaultMessage: "Easy",
    id: "game.gameDifficulty.easy",
  },
  expert: {
    defaultMessage: "Expert",
    id: "game.gameDifficulty.expert",
  },
  hard: {
    defaultMessage: "Hard",
    id: "game.gameDifficulty.hard",
  },
  normal: {
    defaultMessage: "Normal",
    id: "game.gameDifficulty.normal",
  },
});

export const getGameDifficultyMessage = (difficulty: string) =>
  gameDifficultyMessages[difficulty];

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
      return unknownMessage;
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
      return unknownMessage;
  }
};

const campaignMessages = defineMessages({
  lordAlamar: {
    defaultMessage: "Lord Alamar",
    id: "game.campaign.lordAlamar",
  },
  lordIronfist: {
    defaultMessage: "Lord Ironfist",
    id: "game.campaign.lordIronfist",
  },
  lordSlayer: {
    defaultMessage: "Lord Slayer",
    id: "game.campaign.lordSlayer",
  },
  queenLamanda: {
    defaultMessage: "Queen Lamanda",
    id: "game.campaign.queenLamanda",
  },
});

export const getCampaignNameMessage = (campaign: string) => {
  switch (campaign) {
    case CampaignId.LordIronfist:
      return campaignMessages.lordIronfist;
    case CampaignId.LordSlayer:
      return campaignMessages.lordSlayer;
    case CampaignId.QueenLamanda:
      return campaignMessages.queenLamanda;
    case CampaignId.LordAlamar:
      return campaignMessages.lordAlamar;
    default:
      return unknownMessage;
  }
};

export const experienceMessages = defineMessages({
  level: {
    defaultMessage: "Level {value}",
    id: "game.experience.level",
  },
  nextLevel: {
    defaultMessage: "Next level {value}",
    id: "game.experience.nextLevel",
  },
  title: {
    defaultMessage: "Experience",
    id: "game.experience",
  },
  value: {
    defaultMessage: "Current Experience {value}",
    id: "game.experience.value",
  },
});
