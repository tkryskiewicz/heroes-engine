import { Col, Row } from "antd";
import * as React from "react";

import * as styles from "./CampaignScenarioInfoWindow.module.scss";

import { buttonImages, scenarioNumberImages } from "./assets";

import { ImageButton } from "../base";
import { GameText, withGameWindow } from "../core";

interface Scenario {
  readonly scenarioNumber: number;
  readonly name: string;
  readonly description: string;
}

interface CampaignScenarioInfoWindowProps {
  readonly scenario: Scenario;
  readonly onOkayClick?: () => void;
  readonly onRestartScenarioClick?: () => void;
}

class CampaignScenarioInfoWindow extends React.Component<CampaignScenarioInfoWindowProps> {
  public render() {
    return (
      <div className={styles.root}>
        <Row className={styles.title}>
          <Col
            className={styles.number}
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
        <Row className={styles.description}>
          <GameText size="large">
            {this.props.scenario.description}
          </GameText>
        </Row>
        <Row>
          <Col
            className={styles.okay}
            span={9}
          >
            <ImageButton
              images={buttonImages.okay}
              onClick={this.props.onOkayClick}
            />
          </Col>
          <Col
            className={styles.restart}
            span={15}
          >
            <ImageButton
              images={buttonImages.restartScenario}
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

const ComponentWrapped = withGameWindow(480)(CampaignScenarioInfoWindow);

type ComponentWrappedProps = ExtractProps<typeof ComponentWrapped>;

export {
  ComponentWrapped as CampaignScenarioInfoWindow,
  ComponentWrappedProps as CampaignScenarioInfoWindowProps,
};
