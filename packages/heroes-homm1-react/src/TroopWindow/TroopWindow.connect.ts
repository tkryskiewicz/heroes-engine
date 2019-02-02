import { connect } from "react-redux";

import { AppState } from "heroes-homm1-state";

import { TroopWindow, TroopWindowProps } from "./TroopWindow";

const mapStateToProps = (
  state: AppState,
  ownProps: Pick<TroopWindowProps, "troop">,
): Pick<TroopWindowProps, "creature"> => ({
  creature: state.game.data.creatureById[ownProps.troop.creature],
});

const TroopWindowConnected = connect(mapStateToProps)(TroopWindow);

export {
  TroopWindowConnected as TroopWindow,
  TroopWindowProps,
};
