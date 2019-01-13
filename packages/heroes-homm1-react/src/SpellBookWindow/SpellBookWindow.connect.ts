import { connect } from "react-redux";
import { Dispatch } from "redux";

import {
  AppState,
  changeSpellBookWindowPage,
  changeSpellBookWindowSpellType,
  changeVisibleSpellBookWindowSpellDetails,
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
    dispatch(changeSpellBookWindowSpellType(value));
  },
  onPageChange(value) {
    dispatch(changeSpellBookWindowPage(value));
  },
  onSpellClick(value) {
    dispatch(changeVisibleSpellBookWindowSpellDetails(value));
  },
  onCloseSpellDetailsClick() {
    dispatch(changeVisibleSpellBookWindowSpellDetails());
  },
});

const SpellBookWindowConnected = connect(mapStateToProps, mapDispatchToProps)(SpellBookWindow);

export {
  SpellBookWindowConnected as SpellBookWindow,
  SpellBookWindowProps,
};
