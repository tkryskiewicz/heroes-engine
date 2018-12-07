import { defineMessages } from "react-intl";

export const messages = defineMessages({
  moveTroop: {
    defaultMessage: "Move {troopName}",
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
    defaultMessage: "Exchange {troopName} with {withTroopName}",
    id: "game.ui.army.swapTroops",
  },
});
