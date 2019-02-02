import { connect } from "react-redux";

import { AppState } from "heroes-homm1-state";

import { TroopWindowContainer, TroopWindowContainerProps } from "./TroopWindowContainer";

const mapStateToProps = (state: AppState): Pick<TroopWindowContainerProps, "creatures"> => ({
  creatures: state.game.data.creatureById,
});

const TroopWindowContainerConnected = connect(mapStateToProps)(TroopWindowContainer);

export {
  TroopWindowContainerConnected as TroopWindow,
};
