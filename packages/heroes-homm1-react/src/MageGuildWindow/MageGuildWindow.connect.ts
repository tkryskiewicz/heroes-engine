import { connect } from "react-redux";
import { Dispatch } from "redux";

import { AppState, changeMageGuildWindowVisibleSpellDetail } from "heroes-homm1-state";

import { MageGuildWindow, MageGuildWindowProps } from "./MageGuildWindow";

type StateProp =
  "visibleSpellDetail";

const mapStateToProps = (state: AppState): Pick<MageGuildWindowProps, StateProp> => ({
  visibleSpellDetail: state.mageGuildWindow.visibleSpellDetail,
});

type DispatchProp =
  "onVisibleSpellDetailChange";

const mapDispatchToProps = (dispatch: Dispatch): Pick<MageGuildWindowProps, DispatchProp> => ({
  onVisibleSpellDetailChange(spell) {
    dispatch(changeMageGuildWindowVisibleSpellDetail(spell));
  },
});

const MageGuildWindowConnected = connect(mapStateToProps, mapDispatchToProps)(MageGuildWindow);

export {
  MageGuildWindowConnected as MageGuildWindow,
  MageGuildWindowProps,
};
