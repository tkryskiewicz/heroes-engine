import { defineMessages } from "react-intl";

import { Troop } from "heroes-core";

export const messages = defineMessages({
  lastTroopCombine: {
    defaultMessage: "Cannot combine Hero's last army",
    id: "game.ui.army.lastTroopCombine",
  },
  lastTroopMove: {
    defaultMessage: "Cannot move last army to garrison.",
    id: "game.ui.army.lastArmy",
  },
  moveTroop: {
    defaultMessage: "Move {selectedTroopName}",
    id: "game.ui.army.moveTroop",
  },
  selectSlot: {
    defaultMessage: "Select {troopName}",
    id: "game.ui.army.selectSlot",
  },
  showTroopDetails: {
    defaultMessage: "View {troopName}",
    id: "game.ui.army.showTroopDetails",
  },
  slotEmpty: {
    defaultMessage: "Empty",
    id: "game.ui.army.slotEmpty",
  },
  swapTroops: {
    defaultMessage: "Exchange {selectedTroopName} with {troopName}",
    id: "game.ui.army.swapTroops",
  },
});

export const getArmyStripStatusTextMessage = (
  selectedTroop: Troop | undefined,
  troop: Troop | undefined,
  lastTroop: boolean,
) => {
  if (lastTroop) {
    return messages.lastTroopMove;
  }

  if (selectedTroop) {
    if (troop) {
      if (troop === selectedTroop) {
        return messages.showTroopDetails;
      } else {
        return messages.swapTroops;
      }
    } else {
      return messages.moveTroop;
    }
  } else {
    if (troop) {
      return messages.selectSlot;
    } else {
      return messages.slotEmpty;
    }
  }
};
