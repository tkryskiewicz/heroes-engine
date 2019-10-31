import { connect } from "react-redux";

import { CampaignScenarioInfoWindow, CampaignScenarioInfoWindowProps } from "heroes-homm1-react";
import { AppState } from "heroes-homm1-state";

type StateProp =
  "scenarioNumber" |
  "scenarioName" |
  "scenarioDescription";

const mapStateToProps = (state: AppState): Pick<CampaignScenarioInfoWindowProps, StateProp> => ({
  scenarioDescription: state.game.scenario.description,
  scenarioName: state.game.scenario.name,
  scenarioNumber: 1,
});

const ComponentConnected = connect(mapStateToProps)(CampaignScenarioInfoWindow);

type ComponentConnectedProps = ExtractProps<typeof ComponentConnected>;

export {
  ComponentConnected as CampaignScenarioInfoWindow,
  ComponentConnectedProps as CampaignScenarioInfoWindowProps,
};
