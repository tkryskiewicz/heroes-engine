import { defineMessages } from "react-intl";

export const luckMessages = defineMessages({
  bad: {
    defaultMessage: "Bad Luck",
    id: "game.luck.bad",
  },
  badDescription: {
    defaultMessage: "Bad luck sometimes falls on your armies in combat, causing their attacks to only do half damage.",
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
    defaultMessage: "Good luck sometimes lets your armies get lucky attacks (double strength) in combat.",
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
