import { connect } from "react-redux";
import { Dispatch } from "redux";

import { AppState, changeSpellBookWindowPage, changeSpellBookWindowSpellType } from "heroes-homm1-state";

import { SpellBookWindow, SpellBookWindowProps } from "./SpellBookWindow";

type StateProp =
  "spellType" |
  "page";

const mapStateToProps = (state: AppState): Pick<SpellBookWindowProps, StateProp> => ({
  page: state.spellBookWindow.page,
  spellType: state.spellBookWindow.spellType,
});

type DispatchProp =
  "onSpellTypeChange" |
  "onPageChange";

const mapDispatchToProps = (dispatch: Dispatch): Pick<SpellBookWindowProps, DispatchProp> => ({
  onSpellTypeChange(value) {
    dispatch(changeSpellBookWindowSpellType(value));
  },
  onPageChange(value) {
    dispatch(changeSpellBookWindowPage(value));
  },
});

const SpellBookWindowConnected = connect(mapStateToProps, mapDispatchToProps)(SpellBookWindow);

export {
  SpellBookWindowConnected as SpellBookWindow,
};
