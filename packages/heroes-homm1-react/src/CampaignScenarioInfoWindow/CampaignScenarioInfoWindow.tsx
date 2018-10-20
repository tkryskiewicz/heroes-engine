import { Col, Row } from "antd";
import * as React from "react";

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
    const style: React.CSSProperties = {
      height: 287,
      padding: 30,
      paddingTop: 43,
      position: "relative",
      width: 428,
    };

    return (
      <div style={style}>
        {this.renderBackground()}
        <Row style={{ marginBottom: 10 }}>
          <Col
            style={{ textAlign: "right" }}
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
        <Row style={{ height: 160, textAlign: "center" }}>
          <GameText size="large">
            {this.props.scenario.description}
          </GameText>
        </Row>
        <Row>
          <Col
            style={{ textAlign: "left" }}
            span={9}
          >
            <GameButton
              group="campaign-scenario-info-window"
              type="okay"
              onClick={this.props.onOkayClick}
            />
          </Col>
          <Col
            style={{ textAlign: "right" }}
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
    const style: React.CSSProperties = {
      left: 0,
      position: "absolute",
      top: 0,
    };

    return (
      <img
        style={style}
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
