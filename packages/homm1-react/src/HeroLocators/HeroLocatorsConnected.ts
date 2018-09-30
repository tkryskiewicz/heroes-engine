import { connect } from "react-redux";
import { Dispatch } from "redux";

import { AppState, selectLocator } from "heroes-homm1-state";

import { HeroLocators, HeroLocatorsProps } from "./HeroLocators";

const mapStateToProps = (state: AppState): HeroLocatorsProps => ({
  heroes: state.game.heroes,
  selectedIndex: state.locators.selectedIndex,
});

const mapDispatchToProps = (dispatch: Dispatch): Pick<HeroLocatorsProps, "onSelectLocator"> => ({
  onSelectLocator(index) {
    dispatch(selectLocator(index));
  },
});

export const HeroLocatorsConnected = connect(mapStateToProps, mapDispatchToProps)(HeroLocators);
