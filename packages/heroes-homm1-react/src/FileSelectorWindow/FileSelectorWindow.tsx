import { Input } from "antd";
import Classnames from "classnames";
import React from "react";
import { FormattedMessage } from "react-intl";

import { noop } from "heroes-helpers";
import { ScenarioDifficulty, ScenarioSize } from "heroes-homm1";

import * as styles from "./FileSelectorWindow.module.scss";

import { buttonImages } from "./assets";

import { ImageButton } from "../base";
import { GameText, withGameWindow, WithGameWindowProps } from "../core";
import { getScenarioDifficultyMessage, getScenarioSizeMessage } from "../messages";
import { messages } from "./messages";

export type FileSelectorType =
  "save" |
  "load";

export interface ScenarioInfo {
  readonly size: ScenarioSize;
  readonly difficulty: ScenarioDifficulty;
  readonly description: string;
}

interface Props extends WithGameWindowProps {
  readonly type: FileSelectorType;
  readonly files: string[];
  readonly selectedFile?: string;
  readonly onFileClick: (value: string) => void;
  readonly value: string;
  readonly maxLength?: number;
  readonly onValueChange: (value: string) => void;
  readonly scenarioInfo?: ScenarioInfo;
  readonly confirmDisabled: boolean;
  readonly onOkayClick: () => void;
  readonly onCancelClick: () => void;
}

class FileSelectorWindow extends React.Component<Props> {
  public static readonly defaultProps: Props = {
    confirmDisabled: false,
    files: [],
    onCancelClick: noop,
    onFileClick: noop,
    onOkayClick: noop,
    onValueChange: noop,
    type: "save",
    value: "",
  };

  public render() {
    return (
      <div className={Classnames(styles.root, this.props.scenarioInfo && styles.withScenarioInfo)}>
        <div className={styles.title}>
          <GameText
            data-test-id="title"
            size="normal"
          >
            <FormattedMessage {...this.props.type === "save" ? messages.saveTitle : messages.loadTitle} />:
          </GameText>
        </div>
        <div className={styles.list}>
          {this.props.files.map(this.renderFile)}
        </div>
        <Input
          className={styles.input}
          maxLength={this.props.maxLength}
          value={this.props.value}
          onChange={this.onValueChange}
        />
        <ImageButton
          data-test-id="okay"
          className={styles.okay}
          images={buttonImages.okay}
          disabled={this.props.confirmDisabled}
          onClick={this.props.onOkayClick}
        />
        <ImageButton
          data-test-id="cancel"
          className={styles.cancel}
          images={buttonImages.cancel}
          onClick={this.props.onCancelClick}
        />
        {this.props.scenarioInfo && this.renderScenarioInfo(this.props.scenarioInfo)}
      </div>
    );
  }

  private readonly renderFile = (name: string) => {
    const onClick = () => this.props.onFileClick(name);

    return (
      <div
        data-test-id="file"
        key={name}
        className={styles.file}
        onClick={onClick}
      >
        <GameText
          data-test-id="name"
          size="normal"
          selected={name === this.props.selectedFile}
        >
          {name}
        </GameText>
      </div>
    );
  }

  private readonly onValueChange = (event: React.ChangeEvent<any>) => {
    this.props.onValueChange(event.target.value);
  }

  private renderScenarioInfo(scenarioInfo: ScenarioInfo) {
    return (
      <div
        data-test-id="scenario-info"
        className={styles.scenarioInfo}
      >
        <div className={styles.size}>
          <GameText
            data-test-id="scenario-size"
            size="normal"
          >
            <FormattedMessage {...getScenarioSizeMessage(scenarioInfo.size)} />
          </GameText>
        </div>
        <div className={styles.difficulty}>
          <GameText
            data-test-id="scenario-difficulty"
            size="normal"
          >
            <FormattedMessage {...getScenarioDifficultyMessage(scenarioInfo.difficulty)} />
          </GameText>
        </div>
        <div className={styles.description}>
          <GameText
            data-test-id="scenario-description"
            size="normal"
          >
            {scenarioInfo.description}
          </GameText>
        </div>
      </div>
    );
  }
}

const ComponentWrapped = withGameWindow(320)(FileSelectorWindow);

type ComponentWrappedProps = ExtractPublicProps<typeof ComponentWrapped>;

export {
  ComponentWrapped as FileSelectorWindow,
  ComponentWrappedProps as FileSelectorWindowProps,
};
