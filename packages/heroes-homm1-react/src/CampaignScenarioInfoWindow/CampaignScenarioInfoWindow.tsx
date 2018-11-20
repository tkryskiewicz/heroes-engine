import { Col, Row } from "antd";
import * as React from "react";

import "./CampaignScenarioInfoWindow.scss";

import { GameButton } from "../GameButton";
import { GameText } from "../GameText";

export interface CampaignScenarioInfoWindowProps {
  scenario: {
    number: number; // TODO: rename
    name: string;
    description: string;
  };
  onOkayClick?: () => void;
  onRestartScenarioClick?: () => void;
}

export class CampaignScenarioInfoWindow extends React.Component<CampaignScenarioInfoWindowProps> {
  public render() {
    return (
      <div className="campaign-scenario-info-window">
        {this.renderBackground()}
        <Row className="campaign-scenario-info-window-title">
          <Col
            className="campaign-scenario-info-window-number"
            span={10}
          >
            {this.renderNumber(this.props.scenario.number)}
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

  private renderBackground() {
    return (
      <img
        className="campaign-scenario-info-window-background"
        src="assets/ui/campaign-scenario-info-window/background.jpg"
      />
    );
  }

  private renderNumber(num: number) {
    return (
      <img src={`assets/ui/campaign-scenario-info-window/${num}.png`} />
    );
  }
}
