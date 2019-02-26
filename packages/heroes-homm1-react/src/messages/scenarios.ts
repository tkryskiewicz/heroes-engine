import { defineMessages } from "react-intl";

import { OpponentSetting, ScenarioDifficulty, ScenarioSize } from "heroes-homm1";

import { unknownMessage } from "./util";

const scenarioSizeMessages = defineMessages({
  [ScenarioSize.Large]: {
    defaultMessage: "Large",
    id: "game.scenario.size.large",
  },
  [ScenarioSize.Medium]: {
    defaultMessage: "Medium",
    id: "game.scenario.size.medium",
  },
  [ScenarioSize.Small]: {
    defaultMessage: "Small",
    id: "game.scenario.size.small",
  },
});

export const getScenarioSizeMessage = (value: ScenarioSize) =>
  scenarioSizeMessages[value] || unknownMessage;

const scenarioDifficultyMessages = defineMessages({
  [ScenarioDifficulty.Easy]: {
    defaultMessage: "Easy",
    id: "game.scenario.difficulty.easy",
  },
  [ScenarioDifficulty.Impossible]: {
    defaultMessage: "Impossible",
    id: "game.scenario.difficulty.impossible",
  },
  [ScenarioDifficulty.Normal]: {
    defaultMessage: "Normal",
    id: "game.scenario.difficulty.normal",
  },
  [ScenarioDifficulty.Tough]: {
    defaultMessage: "Tough",
    id: "game.scenario.difficulty.tough",
  },
});

export const getScenarioDifficultyMessage = (value: ScenarioDifficulty) =>
  scenarioDifficultyMessages[value] || unknownMessage;

const opponentSettingMessages = defineMessages({
  [OpponentSetting.Average]: {
    defaultMessage: "Average",
    id: "game.opponentSetting.average",
  },
  [OpponentSetting.Dumb]: {
    defaultMessage: "Dumb",
    id: "game.opponentSetting.dumb",
  },
  [OpponentSetting.Genius]: {
    defaultMessage: "Genius",
    id: "game.opponentSetting.genius",
  },
  [OpponentSetting.None]: {
    defaultMessage: "None",
    id: "game.opponentSetting.none",
  },
  [OpponentSetting.Smart]: {
    defaultMessage: "Smart",
    id: "game.opponentSetting.smart",
  },
});

// NOTE: extract to general messages?
export const getOpponentSettingNameMessage = (value: OpponentSetting) =>
  opponentSettingMessages[value] || unknownMessage;

const kingOfTheHillMessages = defineMessages({
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
