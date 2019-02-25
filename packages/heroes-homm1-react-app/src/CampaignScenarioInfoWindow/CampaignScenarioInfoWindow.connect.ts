import { connect } from "react-redux";
import { Dispatch } from "redux";

import { CampaignScenarioInfoWindow, CampaignScenarioInfoWindowProps } from "heroes-homm1-react";
import { AppState, scenarioInforWindowActions } from "heroes-homm1-state";

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

const ComponentConnected = connect(mapStateToProps, mapDispatchToProps)(CampaignScenarioInfoWindow);

type ComponentConnectedProps = ExtractProps<typeof ComponentConnected>;

export {
  ComponentConnected as CampaignScenarioInfoWindow,
  ComponentConnectedProps as CampaignScenarioInfoWindowProps,
};
