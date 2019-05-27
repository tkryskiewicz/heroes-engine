import { Col, Row } from "antd";
import * as React from "react";
import { FormattedMessage } from "react-intl";

import { ScenarioDifficulty, ScenarioSize } from "heroes-homm1";

import * as styles from "./MapSpecificationWindow.module.scss";

import { GameCheckbox, GameInput } from "../../base";
import { GameText } from "../../core";
import { getScenarioDifficultyMessage, getScenarioSizeMessage } from "../../messages";
import { EditorSettingsWindow, EditorSettingsWindowProps } from "../EditorSettingsWindow";
import { messages } from "./messages";

export interface MapSpecificationWindowProps extends EditorSettingsWindowProps {
  readonly selectedDifficulty: ScenarioDifficulty;
  readonly onDifficultyChange: (value: ScenarioDifficulty) => void;
  readonly selectedSize: ScenarioSize;
  readonly onSizeChange: (value: ScenarioSize) => void;
  readonly name: string;
  readonly onNameChange: (value: string) => void;
  readonly description: string;
  readonly onDescriptionChange: (value: string) => void;
  readonly filePrefix: string;
  readonly onFilePrefixChange: (value: string) => void;
}

type DefaultProp =
  "onDifficultyChange" |
  "onSizeChange" |
  "onNameChange" |
  "onDescriptionChange" |
  "onFilePrefixChange";

export class MapSpecificationWindow extends React.Component<MapSpecificationWindowProps> {
  public static readonly defaultProps: Pick<MapSpecificationWindowProps, DefaultProp> = {
    onDescriptionChange: () => undefined,
    onDifficultyChange: () => undefined,
    onFilePrefixChange: () => undefined,
    onNameChange: () => undefined,
    onSizeChange: () => undefined,
  };

  public render() {
    return (
      <EditorSettingsWindow
        visible={this.props.visible}
        onConfirmClick={this.props.onConfirmClick}
        onCancelClick={this.props.onCancelClick}
      >
        <div className={styles.root}>
          <Row className={styles.basic}>
            <Col span={8}>
              {Object.values(ScenarioDifficulty).map((v) => this.renderDifficulty(v))}
            </Col>
            <Col span={14}>
              {Object.values(ScenarioSize).map((v) => this.renderSize(v))}
            </Col>
          </Row>
          <Row className={styles.name}>
            <Col span={6}>
              <GameText size="large">
                <FormattedMessage {...messages.name} />:
              </GameText>
            </Col>
            <Col span={18}>
              <GameInput
                size="small"
                maxLength={14}
                value={this.props.name}
                onChange={this.props.onNameChange}
              />
            </Col>
          </Row>
          <Row className={styles.description}>
            <Col span={6}>
              <GameText size="large">
                <FormattedMessage {...messages.description} />:
              </GameText>
            </Col>
            <Col span={18}>
              <GameInput
                size="large"
                value={this.props.description}
                onChange={this.props.onDescriptionChange}
              />
            </Col>
          </Row>
          <Row>
            <Col span={6}>
              <GameText size="large">
                <FormattedMessage {...messages.filePerfix} />:
              </GameText>
            </Col>
            <Col span={18}>
              <GameInput
                size="small"
                maxLength={4}
                value={this.props.filePrefix}
                onChange={this.props.onFilePrefixChange}
              />
            </Col>
          </Row>
        </div>
      </EditorSettingsWindow>
    );
  }

  private renderDifficulty(value: ScenarioDifficulty) {
    const onClick = () => this.props.onDifficultyChange(value);

    return (
      <div
        className={styles.difficulty}
        key={value}
      >
        <GameText size="large">
          <FormattedMessage {...getScenarioDifficultyMessage(value)} />:
        </GameText>
        {" "}
        <GameCheckbox
          checked={this.props.selectedDifficulty === value}
          onClick={onClick}
        />
      </div>
    );
  }

  private renderSize(value: ScenarioSize) {
    const onClick = () => this.props.onSizeChange(value);

    return (
      <div
        className={styles.size}
        key={value}
      >
        <GameText size="large">
          <FormattedMessage {...getScenarioSizeMessage(value)} />:
        </GameText>
        {" "}
        <GameCheckbox
          checked={this.props.selectedSize === value}
          onClick={onClick}
        />
      </div>
    );
  }
}
