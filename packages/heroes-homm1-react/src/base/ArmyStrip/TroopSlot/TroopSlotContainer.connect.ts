import { connect } from "react-redux";

import { AppState } from "heroes-homm1-state";

import { TroopSlotContainer, TroopSlotContainerProps } from "./TroopSlotContainer";

const mapStateToProps = (state: AppState): Pick<TroopSlotContainerProps, "creatureById"> => ({
  creatureById: state.game.data.creatureById,
});

const TroopSlotContainerConnected = connect(mapStateToProps)(TroopSlotContainer);

type TroopSlotContainerConnectedProps = ExtractProps<typeof TroopSlotContainerConnected>;

export {
  TroopSlotContainerConnected as TroopSlot,
  TroopSlotContainerConnectedProps as TroopSlotProps,
};
