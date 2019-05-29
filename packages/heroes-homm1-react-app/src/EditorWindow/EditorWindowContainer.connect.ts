import { connect } from "react-redux";
import { Dispatch } from "redux";

import {
  AppState,
  editorWindowActions,
} from "heroes-homm1-state";

import { EditorWindow, EditorWindowProps } from "./EditorWindowContainer";

type StateProp =
  "data" |
  "scenario" |
  "position" |
  "selectedOption" |
  "selectedTerrain" |
  "selectedObjectType" |
  "selectedObject" |
  "objectsWindowVisible" |
  "visibleObjectDetails" |
  "selectedObjectDetails" |
  "objectDetailsUnavailablePromptVisible" |
  "eraseObjectsSettings" |
  "eraseObjectsSettingsVisible" |
  "scenarioSpecification" |
  "scenarioSpecificationVisible" |
  "zoomed";

const mapStateToProps = (state: AppState): Pick<EditorWindowProps, StateProp> => ({
  data: state.game.data,
  eraseObjectsSettings: state.editorWindow.eraseObjectsSettings,
  eraseObjectsSettingsVisible: state.editorWindow.eraseObejctsSettingsVisible,
  objectDetailsUnavailablePromptVisible: state.editorWindow.objectDetailsUnavailablePromptVisible,
  objectsWindowVisible: state.editorWindow.objectsWindowVisible,
  position: state.editorWindow.position,
  scenario: state.editorWindow.scenario,
  scenarioSpecification: state.editorWindow.scenarioSpecification,
  scenarioSpecificationVisible: state.editorWindow.scenarioSpecificationVisible,
  selectedObject: state.editorWindow.selectedObject,
  selectedObjectDetails: state.editorWindow.selectedObjectDetails,
  selectedObjectType: state.editorWindow.selectedObjectType,
  selectedOption: state.editorWindow.selectedOption,
  selectedTerrain: state.editorWindow.selectedTerrain,
  visibleObjectDetails: state.editorWindow.visibleObjectDetails,
  zoomed: state.editorWindow.zoomed,
});

type DispatchProp =
  "onScenarioChange" |
  "onPositionChange" |
  "onSelectedOptionChange" |
  "onSelectedTerrainChange" |
  "onSelectedObjectTypeChange" |
  "onSelectedObjectChange" |
  "onOpenObjectsWindowClick" |
  "onCloseObjectsWindowClick" |
  "onOpenObjectDetailsClick" |
  "onCloseObjectDetailsClick" |
  "onSelectedObjectDetailsChange" |
  "onOpenObjectDetailsUnavailablePromptClick" |
  "onCloseObjectDetailsUnavailablePromptClick" |
  "onOpenEraseObjectsSettingsClick" |
  "onCloseEraseObjectsSettingsClick" |
  "onEraseObjectsSettingsChange" |
  "onOpenScenarioSpecificationClick" |
  "onCloseScenarioSpecificationClick" |
  "onScenarioSpecificationChange" |
  "onZoomInClick" |
  "onZoomOutClick";

const mapDispatchToProps = (dispatch: Dispatch): Pick<EditorWindowProps, DispatchProp> => ({
  onScenarioChange(value) {
    dispatch(editorWindowActions.changeScenario(value));
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
  onOpenObjectDetailsClick(id, value) {
    dispatch(editorWindowActions.openObjectDetails(id, value));
  },
  onCloseObjectDetailsClick() {
    dispatch(editorWindowActions.closeObjectDetails());
  },
  onSelectedObjectDetailsChange(value) {
    dispatch(editorWindowActions.changeSelectedObjectDetails(value));
  },
  onOpenObjectDetailsUnavailablePromptClick() {
    dispatch(editorWindowActions.openObjectDetailsUnavailablePrompt());
  },
  onCloseObjectDetailsUnavailablePromptClick() {
    dispatch(editorWindowActions.closeObjectDetailsUnavailablePrompt());
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
  onOpenScenarioSpecificationClick() {
    dispatch(editorWindowActions.openScenarioSpecification());
  },
  onCloseScenarioSpecificationClick() {
    dispatch(editorWindowActions.closeScenarioSpecification());
  },
  onScenarioSpecificationChange(value) {
    dispatch(editorWindowActions.changeScenarioSpecification(value));
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
