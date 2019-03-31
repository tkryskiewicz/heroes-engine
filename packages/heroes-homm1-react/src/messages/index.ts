import { defineMessages, Messages } from "react-intl";

import { CampaignId } from "heroes-homm1";

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
export { getResourceNameMessage } from "./resources";
export {
  getScenarioDifficultyMessage,
  getScenarioSizeMessage,
  getKingOfTheHillMessage,
  getOpponentSettingNameMessage,
} from "./scenarios";
export * from "./skills";
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
