import { defineMessages } from "react-intl";

import { CreatureSpeed } from "heroes-homm1";

export const messages = defineMessages({
  attack: {
    defaultMessage: "Attack Skill",
    id: "game.creature.attack",
  },
  damage: {
    defaultMessage: "Damage",
    id: "game.creature.damage",
  },
  defense: {
    defaultMessage: "Defense Skill",
    id: "game.creature.defense",
  },
  dismissMessage: {
    defaultMessage: "Are you sure you want to dismiss this army?",
    id: "game.creature.dismissMessage",
  },
  hitPoints: {
    defaultMessage: "Hit Points",
    id: "game.creature.hitPoints",
  },
  luck: {
    defaultMessage: "Luck",
    id: "game.creature.luck",
  },
  morale: {
    defaultMessage: "Morale",
    id: "game.creature.morale",
  },
  shots: {
    defaultMessage: "Shots",
    id: "game.creature.shots",
  },
  speed: {
    defaultMessage: "Speed",
    id: "game.creature.speed",
  },
});

export const speedMessages = defineMessages({
  fast: {
    defaultMessage: "Fast",
    id: "game.creature.speed.fast",
  },
  medium: {
    defaultMessage: "Medium",
    id: "game.creature.speed.medium",
  },
  slow: {
    defaultMessage: "Slow",
    id: "game.creature.speed.slow",
  },
});

export const getSpeedMessage = (value: CreatureSpeed) => {
  switch (value) {
    case CreatureSpeed.Slow:
      return speedMessages.slow;
    case CreatureSpeed.Medium:
      return speedMessages.medium;
    case CreatureSpeed.Fast:
      return speedMessages.fast;
  }
};