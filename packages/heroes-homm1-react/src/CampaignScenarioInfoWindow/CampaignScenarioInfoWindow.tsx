import { Col, Row } from "antd";
import * as React from "react";

import "./CampaignScenarioInfoWindow.scss";

import { scenarioNumberImages } from "./assets";

import { GameButton } from "../base";
import { GameText, withGameWindow } from "../core";

export interface CampaignScenarioInfoWindowProps {
  scenario: {
    scenarioNumber: number;
    name: string;
    description: string;
  };
  onOkayClick?: () => void;
  onRestartScenarioClick?: () => void;
}

class CampaignScenarioInfoWindow extends React.Component<CampaignScenarioInfoWindowProps> {
  public render() {
    return (
      <div className="campaign-scenario-info-window">
        <Row className="campaign-scenario-info-window-title">
          <Col
            className="campaign-scenario-info-window-number"
            span={10}
          >
            {this.renderNumber(this.props.scenario.scenarioNumber)}
          </Col>
          <Col
            push={1}
            span={13}
          >
            <GameText size="large">
              {this.props.scenario.name}
            </GameText>
          </Col>
        </Row>
        <Row className="campaign-scenario-info-window-description">
          <GameText size="large">
            {this.props.scenario.description}
          </GameText>
        </Row>
        <Row>
          <Col
            className="campaign-scenario-info-window-okay"
            span={9}
          >
            <GameButton
              group="campaign-scenario-info-window"
              type="okay"
              onClick={this.props.onOkayClick}
            />
          </Col>
          <Col
            className="campaign-scenario-info-window-restart"
            span={15}
          >
            <GameButton
              group="campaign-scenario-info-window"
              type="restart-scenario"
              onClick={this.props.onRestartScenarioClick}
            />
          </Col>
        </Row>
      </div>
    );
  }

  private renderNumber(scenarioNumber: number) {
    return (
      <img src={scenarioNumberImages[scenarioNumber]} />
    );
  }
}

const CampaignScenarioInfoWindowWrapped = withGameWindow(480)
  <typeof CampaignScenarioInfoWindow, CampaignScenarioInfoWindowProps>(CampaignScenarioInfoWindow);

export {
  CampaignScenarioInfoWindowWrapped as CampaignScenarioInfoWindow,
};
