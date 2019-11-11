import React from "react";

import { noop } from "heroes-helpers";

import * as styles from "./CampaignScenarioInfoWindow.module.scss";

import { buttonImages, scenarioNumberImages } from "./assets";

import { ImageButton } from "../base";
import { GameText, withGameWindow } from "../core";

interface Props {
  readonly scenarioNumber: number;
  readonly scenarioName: string;
  readonly scenarioDescription: string;
  readonly onOkayClick: () => void;
  readonly onRestartScenarioClick: () => void;
}

type DefaultProp =
  "onOkayClick" |
  "onRestartScenarioClick";

class CampaignScenarioInfoWindow extends React.Component<Props> {
  public static readonly defaultProps: Pick<Props, DefaultProp> = {
    onOkayClick: noop,
    onRestartScenarioClick: noop,
  };

  public render() {
    return (
      <div className={styles.root}>
        <img
          data-test-id="scenario-number"
          className={styles.scenarioNumber}
          src={scenarioNumberImages[this.props.scenarioNumber]}
        />
        <GameText
          data-test-id="scenario-name"
          className={styles.scenarioName}
          size="large"
        >
          {this.props.scenarioName}
        </GameText>
        <GameText
          data-test-id="scenario-description"
          className={styles.scenarioDescription}
          size="large"
        >
          {this.props.scenarioDescription}
        </GameText>
        <ImageButton
          data-test-id="okay"
          className={styles.okay}
          images={buttonImages.okay}
          onClick={this.props.onOkayClick}
        />
        <ImageButton
          data-test-id="restart-scenario"
          className={styles.restart}
          images={buttonImages.restartScenario}
          onClick={this.props.onRestartScenarioClick}
        />
      </div>
    );
  }
}

const ComponentWrapped = withGameWindow(428)(CampaignScenarioInfoWindow);

type ComponentWrappedProps = ExtractProps<typeof ComponentWrapped>;

export {
  ComponentWrapped as CampaignScenarioInfoWindow,
  ComponentWrappedProps as CampaignScenarioInfoWindowProps,
};
