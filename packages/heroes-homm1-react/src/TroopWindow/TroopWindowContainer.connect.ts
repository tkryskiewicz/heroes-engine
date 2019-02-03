import { connect } from "react-redux";

import { AppState } from "heroes-homm1-state";

import { TroopWindowContainer, TroopWindowContainerProps } from "./TroopWindowContainer";

const mapStateToProps = (state: AppState): Pick<TroopWindowContainerProps, "creatureById"> => ({
  creatureById: state.game.data.creatureById,
});

const TroopWindowContainerConnected = connect(mapStateToProps)(TroopWindowContainer);

type TroopWindowContainerConnectedProps = ExtractProps<typeof TroopWindowContainerConnected>;

export {
  TroopWindowContainerConnected as TroopWindow,
  TroopWindowContainerConnectedProps as TroopWindowProps,
};
