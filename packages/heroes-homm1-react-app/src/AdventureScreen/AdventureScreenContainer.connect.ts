import { connect } from "react-redux";

import { AppState } from "heroes-homm1-state";

import { AdventureScreenContainer, AdventureScreenContainerProps } from "./AdventureScreenContainer";

type StateProp =
  "adventureOptionsVisible" |
  "puzzleWindowVisible";

const mapStateToProps = (state: AppState): Pick<AdventureScreenContainerProps, StateProp> => ({
  adventureOptionsVisible: state.adventureOptions.visible,
  puzzleWindowVisible: state.puzzleWindow.visible,
});

const ContainerConnected = connect(mapStateToProps)(AdventureScreenContainer);

type ContainerConnectedProps = ExtractProps<typeof ContainerConnected>;

export {
  ContainerConnected as AdventureScreen,
  ContainerConnectedProps as AdventureScreenProps,
};
