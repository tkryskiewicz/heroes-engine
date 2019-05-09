import { connect } from "react-redux";
import { Dispatch } from "redux";

import { AppState, editorWindowActions } from "heroes-homm1-state";

import { EditorWindow, EditorWindowProps } from "./EditorWindowContainer";

type StateProp =
  "data" |
  "map" |
  "position" |
  "selectedOption" |
  "selectedTerrain" |
  "selectedObjectType" |
  "selectedObject" |
  "objectsWindowVisible" |
  "zoomed";

const mapStateToProps = (state: AppState): Pick<EditorWindowProps, StateProp> => ({
  data: state.game.data,
  map: state.editorWindow.map,
  objectsWindowVisible: state.editorWindow.objectsWindowVisible,
  position: state.editorWindow.position,
  selectedObject: state.editorWindow.selectedObject,
  selectedObjectType: state.editorWindow.selectedObjectType,
  selectedOption: state.editorWindow.selectedOption,
  selectedTerrain: state.editorWindow.selectedTerrain,
  zoomed: state.editorWindow.zoomed,
});

type DispatchProp =
  "onChangePosition" |
  "onSelectedOptionChange" |
  "onSelectedTerrainChange" |
  "onChangeTerrainClick" |
  "onSelectedObjectTypeChange" |
  "onSelectedObjectChange" |
  "onOpenObjectsWindowClick" |
  "onCloseObjectsWindowClick" |
  "onPlaceObjectClick" |
  "onZoomInClick" |
  "onZoomOutClick";

const mapDispatchToProps = (dispatch: Dispatch): Pick<EditorWindowProps, DispatchProp> => ({
  onChangePosition(value) {
    dispatch(editorWindowActions.changePosition(value));
  },
  onSelectedOptionChange(value) {
    dispatch(editorWindowActions.changeSelectedOption(value));
  },
  onSelectedTerrainChange(value) {
    dispatch(editorWindowActions.changeSelectedTerrain(value));
  },
  onChangeTerrainClick(point, terrain) {
    dispatch(editorWindowActions.changeTerrain(point, terrain));
  },
  onSelectedObjectTypeChange(value) {
    dispatch(editorWindowActions.changeSelectedObjectType(value));

    dispatch(editorWindowActions.changeSelectedObject());
  },
  onSelectedObjectChange(value) {
    dispatch(editorWindowActions.changeSelectedObject(value));

    dispatch(editorWindowActions.closeObjectsWindow());
  },
  onOpenObjectsWindowClick() {
    dispatch(editorWindowActions.openObjectsWindow());
  },
  onCloseObjectsWindowClick() {
    dispatch(editorWindowActions.closeObjectsWindow());
  },
  onPlaceObjectClick(point, object) {
    dispatch(editorWindowActions.placeObject(point, object));
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
