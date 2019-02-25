import { connect } from "react-redux";

import { AppState } from "heroes-homm1-state";

import { TroopWindowContainer, TroopWindowContainerProps } from "./TroopWindowContainer";

const mapStateToProps = (state: AppState): Pick<TroopWindowContainerProps, "creatureById"> => ({
  creatureById: state.game.data.creatureById,
});

const ContainerConnected = connect(mapStateToProps)(TroopWindowContainer);

type ContainerConnectedProps = ExtractProps<typeof ContainerConnected>;

export {
  ContainerConnected as TroopWindow,
  ContainerConnectedProps as TroopWindowProps,
};
