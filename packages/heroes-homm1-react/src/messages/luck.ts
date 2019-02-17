import { defineMessages } from "react-intl";

import { LuckModifierType, LuckType } from "heroes-homm1";

export const luckMessages = defineMessages({
  title: {
    defaultMessage: "Luck",
    id: "game.luck",
  },
});

const getTypeDescriptionKey = (value: LuckType) =>
  `${value}Description`;

const getTypeValueKey = (value: LuckType) =>
  `${value}Value`;

const luckTypeMessages = defineMessages({
  [LuckType.Bad]: {
    defaultMessage: "Bad Luck",
    id: "game.luck.bad",
  },
  [getTypeDescriptionKey(LuckType.Bad)]: {
    defaultMessage: "Bad luck sometimes falls on your armies in combat, causing their attacks to only do half damage.",
    id: "game.luck.bad.description",
  },
  [getTypeValueKey(LuckType.Bad)]: {
    defaultMessage: "Bad",
    id: "game.luck.badValue",
  },
  [LuckType.Good]: {
    defaultMessage: "Good Luck",
    id: "game.luck.good",
  },
  [getTypeDescriptionKey(LuckType.Good)]: {
    defaultMessage: "Good luck sometimes lets your armies get lucky attacks (double strength) in combat.",
    id: "game.luck.good.description",
  },
  [getTypeValueKey(LuckType.Good)]: {
    defaultMessage: "Good",
    id: "game.luck.goodValue",
  },
  [LuckType.Neutral]: {
    defaultMessage: "Netural Luck",
    id: "game.luck.neutral",
  },
  [getTypeDescriptionKey(LuckType.Neutral)]: {
    defaultMessage: "Neutral luck means your armies will never get lucky or unlucky attacks on the enemy.",
    id: "game.luck.neutral.description",
  },
  [getTypeValueKey(LuckType.Neutral)]: {
    defaultMessage: "Neutral",
    id: "game.luck.neutralValue",
  },
});

export const getLuckNameMessage = (value: LuckType) =>
  luckTypeMessages[value];

export const getLuckDescriptionMessage = (value: LuckType) =>
  luckTypeMessages[getTypeDescriptionKey(value)];

export const getLuckValueMessage = (value: LuckType) =>
  luckTypeMessages[getTypeValueKey(value)];

const getLuckModifierTypeId = (value: LuckModifierType) =>
  `game.luck.modifier.${value}`;

const luckModifierTypeMessages = defineMessages({
  [LuckModifierType.Artifact]: {
    defaultMessage: "{name}",
    id: getLuckModifierTypeId(LuckModifierType.Artifact),
  },
  [LuckModifierType.StructureVisited]: {
    defaultMessage: "{name} visited",
    id: getLuckModifierTypeId(LuckModifierType.StructureVisited),
  },
});

export const getLuckModifierTypeMessage = (value: LuckModifierType) =>
  luckModifierTypeMessages[value];
