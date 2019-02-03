import { connect } from "react-redux";
import { Dispatch } from "redux";

import { AppState, scenarioInforWindowActions } from "heroes-homm1-state";

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
    dispatch(scenarioInforWindowActions.close());
  },
});

const CampaignScenarioInfoWindowConnected = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CampaignScenarioInfoWindow);

type CampaignScenarioInfoWindowConnectedProps = ExtractProps<typeof CampaignScenarioInfoWindowConnected>;

export {
  CampaignScenarioInfoWindowConnected as CampaignScenarioInfoWindow,
  CampaignScenarioInfoWindowConnectedProps as CampaignScenarioInfoWindowProps,
};
