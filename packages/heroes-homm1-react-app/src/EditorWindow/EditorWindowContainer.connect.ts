import { connect } from "react-redux";
import { Dispatch } from "redux";

import {
  AppState,
  creatureMapObjectDetailsActions,
  editorWindowActions,
  heroMapObjectDetailsActions,
  townMapObjectDetailsActions,
} from "heroes-homm1-state";

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
  "visibleObjectDetails" |
  "objectDetailsUnavailablePromptVisible" |
  "creatureMapObjectCount" |
  "heroMapObjectDetails" |
  "townMapObjectDetails" |
  "eraseObjectsSettings" |
  "eraseObjectsSettingsVisible" |
  "zoomed";

const mapStateToProps = (state: AppState): Pick<EditorWindowProps, StateProp> => ({
  creatureMapObjectCount: state.creatureMapObjectDetails.count,
  data: state.game.data,
  eraseObjectsSettings: state.editorWindow.eraseObjectsSettings,
  eraseObjectsSettingsVisible: state.editorWindow.eraseObejctsSettingsVisible,
  heroMapObjectDetails: state.heroMapObjectDetails.value,
  map: state.editorWindow.map,
  objectDetailsUnavailablePromptVisible: state.editorWindow.objectDetailsUnavailablePromptVisible,
  objectsWindowVisible: state.editorWindow.objectsWindowVisible,
  position: state.editorWindow.position,
  selectedObject: state.editorWindow.selectedObject,
  selectedObjectType: state.editorWindow.selectedObjectType,
  selectedOption: state.editorWindow.selectedOption,
  selectedTerrain: state.editorWindow.selectedTerrain,
  townMapObjectDetails: state.townMapObjectDetails.value,
  visibleObjectDetails: state.editorWindow.visibleObjectDetails,
  zoomed: state.editorWindow.zoomed,
});

type DispatchProp =
  "onMapChange" |
  "onPositionChange" |
  "onSelectedOptionChange" |
  "onSelectedTerrainChange" |
  "onSelectedObjectTypeChange" |
  "onSelectedObjectChange" |
  "onOpenObjectsWindowClick" |
  "onCloseObjectsWindowClick" |
  "onOpenObjectDetailsClick" |
  "onCloseObjectDetailsClick" |
  "onOpenObjectDetailsUnavailablePromptClick" |
  "onCloseObjectDetailsUnavailablePromptClick" |
  "onCreatureMapObjectCountChange" |
  "onHeroMapObjectDetailsChange" |
  "onTownMapObjectDetailsChange" |
  "onOpenEraseObjectsSettingsClick" |
  "onCloseEraseObjectsSettingsClick" |
  "onEraseObjectsSettingsChange" |
  "onZoomInClick" |
  "onZoomOutClick";

const mapDispatchToProps = (dispatch: Dispatch): Pick<EditorWindowProps, DispatchProp> => ({
  onMapChange(value) {
    dispatch(editorWindowActions.changeMap(value));
  },
  onPositionChange(value) {
    dispatch(editorWindowActions.changePosition(value));
  },
  onSelectedOptionChange(value) {
    dispatch(editorWindowActions.changeSelectedOption(value));
  },
  onSelectedTerrainChange(value) {
    dispatch(editorWindowActions.changeSelectedTerrain(value));
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
  onOpenObjectDetailsClick(id) {
    dispatch(editorWindowActions.openObjectDetails(id));
  },
  onCloseObjectDetailsClick() {
    dispatch(editorWindowActions.closeObjectDetails());
  },
  onOpenObjectDetailsUnavailablePromptClick() {
    dispatch(editorWindowActions.openObjectDetailsUnavailablePrompt());
  },
  onCloseObjectDetailsUnavailablePromptClick() {
    dispatch(editorWindowActions.closeObjectDetailsUnavailablePrompt());
  },
  onCreatureMapObjectCountChange(value) {
    dispatch(creatureMapObjectDetailsActions.changeCount(value));
  },
  onHeroMapObjectDetailsChange(value) {
    dispatch(heroMapObjectDetailsActions.changeValue(value));
  },
  onTownMapObjectDetailsChange(value) {
    dispatch(townMapObjectDetailsActions.changeValue(value));
  },
  onOpenEraseObjectsSettingsClick() {
    dispatch(editorWindowActions.openEraseObjectsSettings());
  },
  onCloseEraseObjectsSettingsClick() {
    dispatch(editorWindowActions.closeEraseObjectsSettings());
  },
  onEraseObjectsSettingsChange(value) {
    dispatch(editorWindowActions.changeEraseObjectsSettings(value));

    dispatch(editorWindowActions.closeEraseObjectsSettings());
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
