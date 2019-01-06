import { defineMessages } from "react-intl";

import { OpponentSetting, ScenarioDifficulty, ScenarioSize } from "heroes-homm1";

import { unknownMessage } from "./util";

export const scenarioSizeMessages = defineMessages({
  large: {
    defaultMessage: "Large",
    id: "game.scenario.size.large",
  },
  medium: {
    defaultMessage: "Medium",
    id: "game.scenario.size.medium",
  },
  small: {
    defaultMessage: "Small",
    id: "game.scenario.size.small",
  },
});

export const getScenarioSizeMessage = (value: ScenarioSize) =>
  scenarioSizeMessages[value] || unknownMessage;

export const scenarioDifficultyMessages = defineMessages({
  easy: {
    defaultMessage: "Easy",
    id: "game.scenario.difficulty.easy",
  },
  impossible: {
    defaultMessage: "Impossible",
    id: "game.scenario.difficulty.impossible",
  },
  normal: {
    defaultMessage: "Normal",
    id: "game.scenario.difficulty.normal",
  },
  tough: {
    defaultMessage: "Tough",
    id: "game.scenario.difficulty.tough",
  },
});

export const getScenarioDifficultyMessage = (value: ScenarioDifficulty) =>
  scenarioDifficultyMessages[value] || unknownMessage;

export const opponentSettingMessages = defineMessages({
  average: {
    defaultMessage: "Average",
    id: "game.opponentSetting.average",
  },
  dumb: {
    defaultMessage: "Dumb",
    id: "game.opponentSetting.dumb",
  },
  genius: {
    defaultMessage: "Genius",
    id: "game.opponentSetting.genius",
  },
  none: {
    defaultMessage: "None",
    id: "game.opponentSetting.none",
  },
  smart: {
    defaultMessage: "Smart",
    id: "game.opponentSetting.smart",
  },
});

export const getOpponentSettingNameMessage = (value: OpponentSetting) =>
  opponentSettingMessages[value] || unknownMessage;

export const kingOfTheHillMessages = defineMessages({
  no: {
    defaultMessage: "No",
    id: "game.scenario.kingOfTheHill.no",
  },
  yes: {
    defaultMessage: "Yes",
    id: "game.scenario.kingOfTheHill.yes",
  },
});

export const getKingOfTheHillMessage = (value: boolean) =>
  value ? kingOfTheHillMessages.yes : kingOfTheHillMessages.no;
