import { connect } from "react-redux";

import { AppState } from "heroes-homm1-state";

import { TroopSlotContainer, TroopSlotContainerProps } from "./TroopSlotContainer";

const mapStateToProps = (state: AppState): Pick<TroopSlotContainerProps, "creatureById"> => ({
  creatureById: state.game.data.creatures,
});

const ContainerConnected = connect(mapStateToProps)(TroopSlotContainer);

type ContainerConnectedProps = ExtractProps<typeof ContainerConnected>;

export {
  ContainerConnected as TroopSlot,
  ContainerConnectedProps as TroopSlotProps,
};
