import { defineMessages, Messages } from "react-intl";

import { CampaignId, Skill } from "heroes-homm1";

export { getArtifactNameMessage, getArtifactDescriptionMessage } from "./artifacts";
export { getCreatureNameMessage } from "./creatures";
export { getHeroClassNameMessage, getHeroClassTitleMessage } from "./heroClasses";
export { getHeroNameMessage } from "./heroes";
export {
  getScenarioDifficultyMessage,
  getScenarioSizeMessage,
  getKingOfTheHillMessage,
  getOpponentSettingNameMessage,
} from "./scenarios";
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

export const moraleMessages = defineMessages({
  bad: {
    defaultMessage: "Bad Morale",
    id: "game.morale.bad",
  },
  badDescription: {
    defaultMessage: "???",
    id: "game.morale.bad.description",
  },
  badValue: {
    defaultMessage: "Bad",
    id: "game.morale.badValue",
  },
  good: {
    defaultMessage: "Good Morale",
    id: "game.morale.good",
  },
  goodDescription: {
    defaultMessage: "Good morale may give your armies extra attacks in combat.",
    id: "game.morale.good.description",
  },
  goodValue: {
    defaultMessage: "Good",
    id: "game.morale.goodValue",
  },
  heroClassBonus: {
    defaultMessage: "{className} bonus +1",
    id: "game.morale.bonus.heroClass",
  },
  humanTroopsBonus: {
    defaultMessage: "All human troops +1",
    id: "game.morale.bonus.humanTroops",
  },
  modifiers: {
    defaultMessage: "Current morale modifiers",
    id: "game.morale.modifiers",
  },
  neutral: {
    defaultMessage: "Neutral Morale",
    id: "game.morale.neutral",
  },
  neutralDescription: {
    defaultMessage: "???",
    id: "game.morale.neutral.description",
  },
  neutralValue: {
    defaultMessage: "Neutral",
    id: "game.morale.neutralValue",
  },
  title: {
    defaultMessage: "Morale",
    id: "game.morale.title",
  },
});

export const getMoraleNameMessage = (morale: number) => {
  if (morale === 0) {
    return moraleMessages.neutral;
  }

  if (morale > 0) {
    return moraleMessages.good;
  }

  return moraleMessages.bad;
};

export const getMoraleDescriptionMessage = (morale: number) => {
  if (morale === 0) {
    return moraleMessages.neutralDescription;
  }

  if (morale > 0) {
    return moraleMessages.goodDescription;
  }

  return moraleMessages.badDescription;
};

export const getMoraleValueMessage = (morale: number) => {
  if (morale === 0) {
    return moraleMessages.neutralValue;
  }

  if (morale > 0) {
    return moraleMessages.goodValue;
  }

  return moraleMessages.badValue;
};

export const luckMessages = defineMessages({
  bad: {
    defaultMessage: "Bad Luck",
    id: "game.luck.bad",
  },
  badDescription: {
    defaultMessage: "???",
    id: "game.luck.bad.description",
  },
  badValue: {
    defaultMessage: "Bad",
    id: "game.luck.badValue",
  },
  good: {
    defaultMessage: "Good Luck",
    id: "game.luck.good",
  },
  goodDescription: {
    defaultMessage: "???",
    id: "game.luck.good.description",
  },
  goodValue: {
    defaultMessage: "Good",
    id: "game.luck.goodValue",
  },
  modifiers: {
    defaultMessage: "Current Luck modifiers",
    id: "game.luck.modifiers",
  },
  neutral: {
    defaultMessage: "Netural Luck",
    id: "game.luck.neutral",
  },
  neutralDescription: {
    defaultMessage: "Neutral luck means your armies will never get lucky or unlucky attacks on the enemy.",
    id: "game.luck.neutral.description",
  },
  neutralValue: {
    defaultMessage: "Neutral",
    id: "game.luck.neutralValue",
  },
  title: {
    defaultMessage: "Luck",
    id: "game.luck",
  },
});

export const getLuckNameMessage = (luck: number) => {
  if (luck === 0) {
    return luckMessages.neutral;
  }

  if (luck > 0) {
    return luckMessages.good;
  }

  return luckMessages.bad;
};

export const getLuckDescriptionMessage = (luck: number) => {
  if (luck === 0) {
    return luckMessages.neutralDescription;
  }

  if (luck > 0) {
    return luckMessages.goodDescription;
  }

  return luckMessages.badDescription;
};

export const getLuckValueMessage = (luck: number) => {
  if (luck === 0) {
    return luckMessages.neutralValue;
  }

  if (luck > 0) {
    return luckMessages.goodValue;
  }

  return luckMessages.badValue;
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
