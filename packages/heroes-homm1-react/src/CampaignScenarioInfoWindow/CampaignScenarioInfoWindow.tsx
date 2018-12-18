import { Col, Row } from "antd";
import * as React from "react";

import "./CampaignScenarioInfoWindow.scss";

import { scenarioNumberImages } from "./assets";

import { GameButton } from "../GameButton";
import { GameText } from "../GameText";
import { GameWindow } from "../GameWindow";

export interface CampaignScenarioInfoWindowProps {
  scenario: {
    scenarioNumber: number;
    name: string;
    description: string;
  };
  visible?: boolean;
  onOkayClick?: () => void;
  onRestartScenarioClick?: () => void;
}

export class CampaignScenarioInfoWindow extends React.Component<CampaignScenarioInfoWindowProps> {
  public render() {
    return (
      <GameWindow
        width={480}
        visible={this.props.visible}
      >
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
      </GameWindow>
    );
  }

  private renderNumber(scenarioNumber: number) {
    return (
      <img src={scenarioNumberImages[scenarioNumber]} />
    );
  }
}
