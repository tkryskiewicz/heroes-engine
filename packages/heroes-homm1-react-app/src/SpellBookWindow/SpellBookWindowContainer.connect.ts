import { connect } from "react-redux";
import { Dispatch } from "redux";

import {
  AppState,
  spellBookWindowActions,
} from "heroes-homm1-state";

import { SpellBookWindowContainer, SpellBookWindowContainerProps } from "./SpellBookWindowContainer";

type StateProp =
  "spellById" |
  "spellType" |
  "page" |
  "visibleSpellDetails";

const mapStateToProps = (state: AppState): Pick<SpellBookWindowContainerProps, StateProp> => ({
  page: state.spellBookWindow.page,
  spellById: state.game.data.spellById as SpellBookWindowContainerProps["spellById"],
  spellType: state.spellBookWindow.spellType,
  visibleSpellDetails: state.spellBookWindow.visibleSpellDetails,
});

type DispatchProp =
  "onSpellTypeChange" |
  "onPageChange" |
  "onSpellClick" |
  "onCloseSpellDetailsClick";

const mapDispatchToProps = (dispatch: Dispatch): Pick<SpellBookWindowContainerProps, DispatchProp> => ({
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

const SpellBookWindowContainerConnected = connect(mapStateToProps, mapDispatchToProps)(SpellBookWindowContainer);

type SpellBookWindowContainerConnectedProps = ExtractProps<typeof SpellBookWindowContainerConnected>;

export {
  SpellBookWindowContainerConnected as SpellBookWindow,
  SpellBookWindowContainerConnectedProps as SpellBookWindowProps,
};
