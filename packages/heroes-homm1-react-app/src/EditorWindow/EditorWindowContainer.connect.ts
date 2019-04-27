import { connect } from "react-redux";
import { Dispatch } from "redux";

import { AppState, editorWindowActions } from "heroes-homm1-state";

import { EditorWindow, EditorWindowProps } from "./EditorWindowContainer";

type StateProp =
  "data" |
  "map" |
  "x" |
  "y" |
  "selectedOption" |
  "selectedTerrain" |
  "zoomed";

const mapStateToProps = (state: AppState): Pick<EditorWindowProps, StateProp> => ({
  data: state.game.data,
  map: state.editorWindow.map,
  selectedOption: state.editorWindow.selectedOption,
  selectedTerrain: state.editorWindow.selectedTerrain,
  x: state.editorWindow.x,
  y: state.editorWindow.y,
  zoomed: state.editorWindow.zoomed,
});

type DispatchProp =
  "onSelectedOptionChange" |
  "onSelectedTerrainChange" |
  "onZoomInClick" |
  "onZoomOutClick";

const mapDispatchToProps = (dispatch: Dispatch): Pick<EditorWindowProps, DispatchProp> => ({
  onSelectedOptionChange(value) {
    dispatch(editorWindowActions.changeSelectedOption(value));
  },
  onSelectedTerrainChange(value) {
    dispatch(editorWindowActions.changeSelectedTerrain(value));
  },
  onZoomInClick() {
    dispatch(editorWindowActions.zoomIn());
  },
  onZoomOutClick() {
    dispatch(editorWindowActions.zoomOut());
  },
});

const ContainerConnected = connect(mapStateToProps, mapDispatchToProps)(EditorWindow);

type ContainerConnectedProps = ExtractProps<typeof ContainerConnected>;

export {
  ContainerConnected as EditorWindow,
  ContainerConnectedProps as EditorWindowProps,
};
