import { connect } from "react-redux";

import { AppState } from "heroes-homm1-state";

import { TroopSlotContainer, TroopSlotContainerProps } from "./TroopSlotContainer";

const mapStateToProps = (state: AppState): Pick<TroopSlotContainerProps, "data"> => ({
  data: state.game.data,
});

const ContainerConnected = connect(mapStateToProps)(TroopSlotContainer);

type ContainerConnectedProps = ExtractProps<typeof ContainerConnected>;

export {
  ContainerConnected as TroopSlot,
  ContainerConnectedProps as TroopSlotProps,
};
