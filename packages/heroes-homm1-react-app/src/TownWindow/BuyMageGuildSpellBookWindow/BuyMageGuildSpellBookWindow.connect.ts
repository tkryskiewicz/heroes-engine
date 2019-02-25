import { connect } from "react-redux";
import { Dispatch } from "redux";

import { gameActions, townWindowActions } from "heroes-homm1-state";

import { BuyMageGuildSpellBookWindow, BuyMageGuildSpellBookWindowProps } from "./BuyMageGuildSpellBookWindow";

type DispatchProp =
  "onConfirmClick";

const mapDispatchToProps = (dispatch: Dispatch): Pick<BuyMageGuildSpellBookWindowProps, DispatchProp> => ({
  onConfirmClick(hero, town, cost) {
    dispatch(gameActions.buyMageGuildSpellBook(hero, town, cost));

    dispatch(townWindowActions.closeStructureDetails());
  },
});

const ComponentConnected = connect(null, mapDispatchToProps)(BuyMageGuildSpellBookWindow);

type ComponentConnectedProps = ExtractProps<typeof ComponentConnected>;

export {
  ComponentConnected as BuyMageGuildSpellBookWindow,
  ComponentConnectedProps as BuyMageGuildSpellBookWindowProps,
};
