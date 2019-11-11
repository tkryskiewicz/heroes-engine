import { Col, Row } from "antd";
import React from "react";
import { FormattedMessage } from "react-intl";

import { GameData } from "heroes-core";
import { noop } from "heroes-helpers";
import { LandMassSetting, RandomMapSettings } from "heroes-homm1";

import * as styles from "./RandomMapSettingsWindow.module.scss";

import { GameCheckbox } from "../../base";
import { GameText } from "../../core";
import { getTerrainNameMessage } from "../../messages";
import { EditorSettingsWindow, EditorSettingsWindowProps } from "../EditorSettingsWindow";
import { EditorSlider } from "../EditorSlider";
import { messages } from "./messages";

export interface RandomMapSettingsWindowProps extends EditorSettingsWindowProps {
  readonly data: Pick<GameData, "terrains">;
  readonly value: RandomMapSettings;
  readonly onValueChange: (value: RandomMapSettings) => void;
}

type DefaultProp =
  "onValueChange";

export class RandomMapSettingsWindow extends React.Component<RandomMapSettingsWindowProps> {
  public static readonly defaultProps: Pick<RandomMapSettingsWindowProps, DefaultProp> = {
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
        <div>
          {this.renderTerrainSettings(value.terrainAmount)}
          {this.renderObjectSettings(value)}
          {this.renderLandMassSettings(value.landMass)}
          <Row>
            <Col
              className={styles.settingName}
              span={12}
            >
              <GameText size="large">
                <FormattedMessage {...messages.saveWithoutViewing} />:
                {" "}
                <GameCheckbox
                  checked={value.saveWithoutViewing}
                  onClick={this.onSaveWithoutViewingChange}
                />
              </GameText>
            </Col>
          </Row>
        </div>
      </EditorSettingsWindow>
    );
  }

  private renderTerrainSettings(terrains: RandomMapSettings["terrainAmount"]) {
    return (
      <div className={styles.terrainSettings}>
        <Row>
          <Col
            span={2}
            push={6}
          >
            <GameText size="large">
              <FormattedMessage {...messages.none} />
            </GameText>
          </Col>
          <Col
            span={2}
            push={18}
          >
            <GameText size="large">
              <FormattedMessage {...messages.lots} />
            </GameText>
          </Col>
        </Row>
        {Object.keys(this.props.data.terrains).map((t) => this.renderTerrain(t, terrains[t]))}
      </div>
    );
  }

  private renderTerrain(terrain: string, amount: number | undefined) {
    const onChange = (value: number) => this.onTerrainAmountChange(terrain, value);

    return (
      <Row key={terrain}>
        <Col
          className={styles.settingName}
          span={6}
        >
          <GameText size="large">
            <FormattedMessage {...getTerrainNameMessage(terrain)} />:
          </GameText>
        </Col>
        <Col span={18}>
          <EditorSlider
            value={amount || 0}
            onValueChange={onChange}
          />
        </Col>
      </Row>
    );
  }

  private readonly onTerrainAmountChange = (terrain: string, value: number) => {
    const newValue: RandomMapSettings = {
      ...this.props.value,
      terrainAmount: {
        ...this.props.value.terrainAmount,
        [terrain]: value,
      },
    };

    this.props.onValueChange(newValue);
  }

  private renderObjectSettings(value: RandomMapSettings) {
    return (
      <div className={styles.objectSettings}>
        <Row>
          <Col
            span={2}
            push={6}
          >
            <GameText size="large">
              <FormattedMessage {...messages.few} />
            </GameText>
          </Col>
          <Col
            span={2}
            push={18}
          >
            <GameText size="large">
              <FormattedMessage {...messages.many} />
            </GameText>
          </Col>
        </Row>
        <Row>
          <Col
            className={styles.settingName}
            span={6}
          >
            <GameText size="large">
              <FormattedMessage {...messages.mountains} />:
            </GameText>
          </Col>
          <Col span={18}>
            <EditorSlider
              value={value.mountains}
              onValueChange={this.onMountainsChange}
            />
          </Col>
        </Row>
        <Row>
          <Col
            className={styles.settingName}
            span={6}
          >
            <GameText size="large">
              <FormattedMessage {...messages.trees} />:
            </GameText>
          </Col>
          <Col span={18}>
            <EditorSlider
              value={value.trees}
              onValueChange={this.onTreesChange}
            />
          </Col>
        </Row>
        <Row>
          <Col
            className={styles.settingName}
            span={6}
          >
            <GameText size="large">
              <FormattedMessage {...messages.mines} />:
            </GameText>
          </Col>
          <Col span={18}>
            <EditorSlider
              value={value.mines}
              onValueChange={this.onMinesChange}
            />
          </Col>
        </Row>
        <Row>
          <Col
            className={styles.settingName}
            span={6}
          >
            <GameText size="large">
              <FormattedMessage {...messages.treasures} />:
          </GameText>
          </Col>
          <Col span={18}>
            <EditorSlider
              value={value.treasures}
              onValueChange={this.onTreasuresChange}
            />
          </Col>
        </Row>
        <Row>
          <Col
            className={styles.settingName}
            span={6}
          >
            <GameText size="large">
              <FormattedMessage {...messages.monsters} />:
            </GameText>
          </Col>
          <Col span={18}>
            <EditorSlider
              value={value.monsters}
              onValueChange={this.onMonstersChange}
            />
          </Col>
        </Row>
      </div>
    );
  }

  private readonly onMountainsChange = (value: number) => {
    const newValue: RandomMapSettings = {
      ...this.props.value,
      mountains: value,
    };

    this.props.onValueChange(newValue);
  }

  private readonly onTreesChange = (value: number) => {
    const newValue: RandomMapSettings = {
      ...this.props.value,
      trees: value,
    };

    this.props.onValueChange(newValue);
  }

  private readonly onMinesChange = (value: number) => {
    const newValue: RandomMapSettings = {
      ...this.props.value,
      mines: value,
    };

    this.props.onValueChange(newValue);
  }

  private readonly onTreasuresChange = (value: number) => {
    const newValue: RandomMapSettings = {
      ...this.props.value,
      treasures: value,
    };

    this.props.onValueChange(newValue);
  }

  private readonly onMonstersChange = (value: number) => {
    const newValue: RandomMapSettings = {
      ...this.props.value,
      monsters: value,
    };

    this.props.onValueChange(newValue);
  }

  private renderLandMassSettings(value: LandMassSetting) {
    const onScatteredClick = () => this.onLandMassChange(LandMassSetting.Scattered);
    const onCentralizedClick = () => this.onLandMassChange(LandMassSetting.Centralized);

    return (
      <Row className={styles.landMassSettings}>
        <Col
          className={styles.settingName}
          span={6}
        >
          <GameText size="large">
            <FormattedMessage {...messages.landMass} />:
          </GameText>
        </Col>
        <Col span={7}>
          <GameText size="large">
            <FormattedMessage {...messages.scattered} />:
          </GameText>
          {" "}
          <GameCheckbox
            checked={value === LandMassSetting.Scattered}
            onClick={onScatteredClick}
          />
        </Col>
        <Col span={8}>
          <GameText size="large">
            <FormattedMessage {...messages.centralized} />:
          </GameText>
          {" "}
          <GameCheckbox
            checked={value === LandMassSetting.Centralized}
            onClick={onCentralizedClick}
          />
        </Col>
      </Row>
    );
  }

  private readonly onLandMassChange = (value: LandMassSetting) => {
    const newValue: RandomMapSettings = {
      ...this.props.value,
      landMass: value,
    };

    this.props.onValueChange(newValue);
  }

  private readonly onSaveWithoutViewingChange = (checked: boolean) => {
    const newValue: RandomMapSettings = {
      ...this.props.value,
      saveWithoutViewing: checked,
    };

    this.props.onValueChange(newValue);
  }
}
