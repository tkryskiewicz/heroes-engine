import { connect } from "react-redux";

import { CampaignScenarioInfoWindow, CampaignScenarioInfoWindowProps } from "heroes-homm1-react";
import { AppState } from "heroes-homm1-state";

type StateProp =
  "scenario";

const mapStateToProps = (state: AppState): Pick<CampaignScenarioInfoWindowProps, StateProp> => ({
  scenario: {
    ...state.game.scenario,
    scenarioNumber: 1,
  },
});

const ComponentConnected = connect(mapStateToProps)(CampaignScenarioInfoWindow);

type ComponentConnectedProps = ExtractProps<typeof ComponentConnected>;

export {
  ComponentConnected as CampaignScenarioInfoWindow,
  ComponentConnectedProps as CampaignScenarioInfoWindowProps,
};
