import { connect } from "react-redux";
import { Dispatch } from "redux";

import { AppState, changeMageGuildWindowVisibleSpellDetail, closeStructureDetails } from "heroes-homm1-state";

import { MageGuildWindow, MageGuildWindowProps } from "./MageGuildWindow";

type StateProp =
  "visibleSpellDetail";

const mapStateToProps = (state: AppState): Pick<MageGuildWindowProps, StateProp> => ({
  visibleSpellDetail: state.mageGuildWindow.visibleSpellDetail,
});

type DispatchProp =
  "onVisibleSpellDetailChange" |
  "onExitClick";

const mapDispatchToProps = (dispatch: Dispatch): Pick<MageGuildWindowProps, DispatchProp> => ({
  onVisibleSpellDetailChange(spell) {
    dispatch(changeMageGuildWindowVisibleSpellDetail(spell));
  },
  onExitClick() {
    dispatch(closeStructureDetails());
  },
});

const MageGuildWindowConnected = connect(mapStateToProps, mapDispatchToProps)(MageGuildWindow);

export {
  MageGuildWindowConnected as MageGuildWindow,
};
