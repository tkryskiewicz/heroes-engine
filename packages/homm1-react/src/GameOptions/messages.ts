import { defineMessages } from "react-intl";

import { MovementSpeed } from "heroes-homm1";

export const messages = defineMessages({
  autoSave: {
    defaultMessage: "Auto Save",
    id: "game.gameOptions.autoSave",
  },
  effectsVolume: {
    defaultMessage: "Effects",
    id: "game.gameOptions.effectsVolume",
  },
  movementSpeed: {
    defaultMessage: "Speed",
    id: "game.gameOptions.movementSpeed",
  },
  musicVolume: {
    defaultMessage: "Music",
    id: "game.gameOptions.musicVolume",
  },
  off: {
    defaultMessage: "Off",
    id: "game.gameOptions.off",
  },
  on: {
    defaultMessage: "On",
    id: "game.gameOptions.on",
  },
  showPath: {
    defaultMessage: "Show Path",
    id: "game.gameOptions.showPath",
  },
  viewEnemyMovement: {
    defaultMessage: "View Enemy Movement",
    id: "game.gameOptions.viewEnemyMovement",
  },
  volume: {
    defaultMessage: "Volume {value}",
    id: "game.gameOptions.volume",
  },
});

export const movementSpeedMessages = defineMessages({
  canter: {
    defaultMessage: "Canter",
    id: "game.gameOptions.movementSpeed.canter",
  },
  gallop: {
    defaultMessage: "Gallop",
    id: "game.gameOptions.movementSpeed.gallop",
  },
  jump: {
    defaultMessage: "Jump",
    id: "game.gameOptions.movementSpeed.jump",
  },
  trot: {
    defaultMessage: "Trot",
    id: "game.gameOptions.movementSpeed.trot",
  },
  walk: {
    defaultMessage: "Walk",
    id: "game.gameOptions.movementSpeed.walk",
  },
});

export const getMovementSpeedMessage = (value: MovementSpeed) => {
  switch (value) {
    case MovementSpeed.Walk:
      return movementSpeedMessages.walk;
    case MovementSpeed.Trot:
      return movementSpeedMessages.trot;
    case MovementSpeed.Canter:
      return movementSpeedMessages.canter;
    case MovementSpeed.Gallop:
      return movementSpeedMessages.gallop;
    case MovementSpeed.Jump:
      return movementSpeedMessages.jump;
  }
};
