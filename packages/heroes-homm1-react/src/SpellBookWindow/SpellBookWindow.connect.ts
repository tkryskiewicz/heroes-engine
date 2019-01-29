import { connect } from "react-redux";
import { Dispatch } from "redux";

import {
  AppState,
  spellBookWindowActions,
} from "heroes-homm1-state";

import { SpellBookWindow, SpellBookWindowProps } from "./SpellBookWindow";

type StateProp =
  "spellType" |
  "page" |
  "visibleSpellDetails";

const mapStateToProps = (state: AppState): Pick<SpellBookWindowProps, StateProp> => ({
  page: state.spellBookWindow.page,
  spellType: state.spellBookWindow.spellType,
  visibleSpellDetails: state.spellBookWindow.visibleSpellDetails,
});

type DispatchProp =
  "onSpellTypeChange" |
  "onPageChange" |
  "onSpellClick" |
  "onCloseSpellDetailsClick";

const mapDispatchToProps = (dispatch: Dispatch): Pick<SpellBookWindowProps, DispatchProp> => ({
  onSpellTypeChange(value) {
    dispatch(spellBookWindowActions.changeSpellType(value));
  },
  onPageChange(value) {
    dispatch(spellBookWindowActions.changePage(value));
  },
  onSpellClick(value) {
    dispatch(spellBookWindowActions.changeVisibleSpellDetails(value));
  },
  onCloseSpellDetailsClick() {
    dispatch(spellBookWindowActions.changeVisibleSpellDetails());
  },
});

const SpellBookWindowConnected = connect(mapStateToProps, mapDispatchToProps)(SpellBookWindow);

export {
  SpellBookWindowConnected as SpellBookWindow,
  SpellBookWindowProps,
};
