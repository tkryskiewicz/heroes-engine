import { Col, Row } from "antd";
import React from "react";
import { FormattedMessage } from "react-intl";

import { noop } from "heroes-helpers";
import { ScenarioDifficulty, ScenarioSize, ScenarioSpecification } from "heroes-homm1";

import * as styles from "./ScenarioSpecificationWindow.module.scss";

import { GameCheckbox, GameInput } from "../../base";
import { GameText } from "../../core";
import { getScenarioDifficultyMessage, getScenarioSizeMessage } from "../../messages";
import { EditorSettingsWindow, EditorSettingsWindowProps } from "../EditorSettingsWindow";
import { messages } from "./messages";

export interface ScenarioSpecificationWindowProps extends EditorSettingsWindowProps {
  readonly value: ScenarioSpecification;
  readonly onValueChange: (value: ScenarioSpecification) => void;
}

type DefaultProp =
  "onValueChange";

export class ScenarioSpecificationWindow extends React.Component<ScenarioSpecificationWindowProps> {
  public static readonly defaultProps: Pick<ScenarioSpecificationWindowProps, DefaultProp> = {
    onValueChange: noop,
  };

  public render() {
    const { value } = this.props;

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
                value={value.name}
                onChange={this.onNameChange}
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
                value={value.description}
                onChange={this.onDescriptionChange}
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
                value={value.filePrefix}
                onChange={this.onFilePrefixChange}
              />
            </Col>
          </Row>
        </div>
      </EditorSettingsWindow>
    );
  }

  private renderDifficulty(value: ScenarioDifficulty) {
    const onClick = () => this.onDifficultyChange(value);

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
          checked={this.props.value.difficulty === value}
          onClick={onClick}
        />
      </div>
    );
  }

  private readonly onDifficultyChange = (value: ScenarioDifficulty) => {
    const newValue: ScenarioSpecification = {
      ...this.props.value,
      difficulty: value,
    };

    this.props.onValueChange(newValue);
  }

  private renderSize(value: ScenarioSize) {
    const onClick = () => this.onSizeChange(value);

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
          checked={this.props.value.size === value}
          onClick={onClick}
        />
      </div>
    );
  }

  private readonly onSizeChange = (value: ScenarioSize) => {
    const newValue: ScenarioSpecification = {
      ...this.props.value,
      size: value,
    };

    this.props.onValueChange(newValue);
  }

  private readonly onNameChange = (value: string) => {
    const newValue: ScenarioSpecification = {
      ...this.props.value,
      name: value,
    };

    this.props.onValueChange(newValue);
  }

  private readonly onDescriptionChange = (value: string) => {
    const newValue: ScenarioSpecification = {
      ...this.props.value,
      description: value,
    };

    this.props.onValueChange(newValue);
  }

  private readonly onFilePrefixChange = (value: string) => {
    const newValue: ScenarioSpecification = {
      ...this.props.value,
      filePrefix: value,
    };

    this.props.onValueChange(newValue);
  }
}
