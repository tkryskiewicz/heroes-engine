import { connect } from "react-redux";
import { Dispatch } from "redux";

import { AppState, mageGuildWindowActions } from "heroes-homm1-state";

import { MageGuildWindowContainer, MageGuildWindowContainerProps } from "./MageGuildWindowContainer";

type StateProp =
  "spellById" |
  "visibleSpellDetail";

const mapStateToProps = (state: AppState): Pick<MageGuildWindowContainerProps, StateProp> => ({
  spellById: state.game.data.spellById as MageGuildWindowContainerProps["spellById"],
  visibleSpellDetail: state.mageGuildWindow.visibleSpellDetail,
});

type DispatchProp =
  "onVisibleSpellDetailChange";

const mapDispatchToProps = (dispatch: Dispatch): Pick<MageGuildWindowContainerProps, DispatchProp> => ({
  onVisibleSpellDetailChange(spell) {
    dispatch(mageGuildWindowActions.changeVisibleSpellDetails(spell));
  },
});

const ContainerConnected = connect(mapStateToProps, mapDispatchToProps)(MageGuildWindowContainer);

type ContainerConnectedProps = ExtractProps<typeof ContainerConnected>;

export {
  ContainerConnected as MageGuildWindow,
  ContainerConnectedProps as MageGuildWindowProps,
};
