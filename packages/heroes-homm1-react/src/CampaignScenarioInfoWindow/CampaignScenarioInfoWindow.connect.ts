import { connect } from "react-redux";
import { Dispatch } from "redux";

import { AppState, closeScenarioInfoWindow } from "heroes-homm1-state";

import { CampaignScenarioInfoWindow, CampaignScenarioInfoWindowProps } from "./CampaignScenarioInfoWindow";

type StateProp =
  "scenario";

const mapStateToProps = (state: AppState): Pick<CampaignScenarioInfoWindowProps, StateProp> => ({
  scenario: {
    ...state.game.scenario,
    scenarioNumber: 1,
  },
});

type DispatchProp =
  "onOkayClick";

const mapDispatchToProps = (dispatch: Dispatch): Pick<CampaignScenarioInfoWindowProps, DispatchProp> => ({
  onOkayClick() {
    dispatch(closeScenarioInfoWindow());
  },
});

const CampaignScenarioInfoWindowConnected = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CampaignScenarioInfoWindow);

export {
  CampaignScenarioInfoWindowConnected as CampaignScenarioInfoWindow,
  CampaignScenarioInfoWindowProps,
};