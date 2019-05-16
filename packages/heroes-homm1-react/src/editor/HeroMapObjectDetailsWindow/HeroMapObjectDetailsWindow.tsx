import { Col, Row } from "antd";
import * as React from "react";
import { FormattedMessage } from "react-intl";

import { GameData, Troop } from "heroes-core";
import { HeroMapObjectDetails } from "heroes-homm1";

import * as styles from "./HeroMapObjectDetailsWindow.module.scss";

import { GameCheckbox, GameInputNumber } from "../../base";
import { GameParagraph, GameText } from "../../core";
import { getArtifactNameMessage, getCreatureNameMessage, getHeroNameMessage } from "../../messages";
import { EditorSettingsWindow, EditorSettingsWindowProps } from "../EditorSettingsWindow";
import { messages } from "./messages";

// TODO: move
const ArtifactCount = 4;

export interface HeroMapObjectDetailsWindowProps extends EditorSettingsWindowProps {
  readonly data: GameData;
  readonly value: HeroMapObjectDetails;
  readonly onValueChange: (value: HeroMapObjectDetails) => void;
}

type DefaultProp =
  "onValueChange";

// FIXME: component assumes that every troop is set
export class HeroMapObjectDetailsWindow extends React.Component<HeroMapObjectDetailsWindowProps> {
  public static readonly defaultProps: Pick<HeroMapObjectDetailsWindowProps, DefaultProp> = {
    onValueChange: () => undefined,
  };

  public render() {
    const { data, value } = this.props;

    const army = [...new Array(data.armySize).keys()]
      .map((i) => value.army[i]!);

    return (
      <EditorSettingsWindow
        visible={this.props.visible}
        onConfirmClick={this.props.onConfirmClick}
        onCancelClick={this.props.onCancelClick}
      >
        <div className={styles.root}>
          <div className={styles.title}>
            <GameParagraph textSize="large">
              <FormattedMessage {...messages.title} />
            </GameParagraph>
          </div>
          <div>
            <Row>
              <Col span={4} />
              <Col
                className={styles.detailColumn}
                span={4}
              >
                <GameText size="large">
                  <FormattedMessage {...messages.creatureId} />
                </GameText>
              </Col>
              <Col span={6}>
                <GameText size="large">
                  <FormattedMessage {...messages.creatureName} />
                </GameText>
              </Col>
              <Col
                className={styles.detailColumn}
                span={4}
              >
                <GameText size="large">
                  <FormattedMessage {...messages.creatureQuantity} />
                </GameText>
              </Col>
            </Row>
            {army.map((t, i) => this.renderTroop(i, t))}
          </div>
          <Row className={styles.owner}>
            <Col span={14}>
              <GameText size="large">
                <FormattedMessage {...messages.owner} />:
            </GameText>
            </Col>
            <Col span={10}>
              {data.alignments.map((a, i) => this.renderAlignment(i, a, value.alignment))}
            </Col>
          </Row>
          <Row>
            <Col
              className={styles.detailRow}
              span={6}
            >
              <GameText size="large">
                <FormattedMessage {...messages.heroId} />
              </GameText>
            </Col>
            <Col
              className={styles.detailColumn}
              span={4}
            >
              <GameInputNumber
                min={0}
                max={35}
                value={Object.keys(data.heroes).indexOf(value.hero)}
                onChange={this.onHeroChange}
              />
            </Col>
            <Col span={6}>
              <GameText size="large">
                <FormattedMessage {...getHeroNameMessage(value.hero)} />
              </GameText>
            </Col>
          </Row>
          <div>
            {[...new Array(ArtifactCount).keys()].map((i) => this.renderArtifact(i, value.artifacts[i]))}
          </div>
          <Row>
            <Col
              className={styles.detailRow}
              span={6}
            >
              <GameText size="large">
                <FormattedMessage {...messages.experience} />
              </GameText>
            </Col>
            <Col
              className={styles.detailColumn}
              span={4}
            >
              <GameInputNumber
                min={0}
                max={999}
                value={value.experience}
                onChange={this.onExperienceChange}
              />
            </Col>
            <Col span={6} />
          </Row>
        </div>
      </EditorSettingsWindow>
    );
  }

  private renderTroop(index: number, troop: Troop) {
    const onCreatureChange = (value: number) => this.onTroopCreatureChange(index, value);
    const onCountChange = (value: number) => this.onTroopCountChange(index, value);

    return (
      <Row key={index}>
        <Col
          className={styles.detailRow}
          span={4}
        >
          <GameText size="large">
            <FormattedMessage {...messages.creature} values={{ index: index + 1 }} />
          </GameText>
        </Col>
        <Col
          className={styles.detailColumn}
          span={4}
        >
          <GameInputNumber
            min={0}
            max={999}
            value={Object.keys(this.props.data.creatures).indexOf(troop.creature)}
            onChange={onCreatureChange}
          />
        </Col>
        <Col span={6}>
          <GameText size="large">
            <FormattedMessage {...getCreatureNameMessage(troop.creature)} />
          </GameText>
        </Col>
        <Col
          className={styles.detailColumn}
          span={4}
        >
          <GameInputNumber
            min={0}
            max={999}
            value={troop.count}
            onChange={onCountChange}
          />
        </Col>
      </Row>
    );
  }

  private readonly onTroopCreatureChange = (index: number, v: number) => {
    const { data, value } = this.props;

    const creature = Object.keys(data.creatures)[v];

    if (!creature) {
      return;
    }

    const newValue: HeroMapObjectDetails = {
      ...value,
      army: value.army.map((t, i) => i === index ?
        { ...t!, creature } :
        t,
      ),
    };

    this.props.onValueChange(newValue);
  }

  private readonly onTroopCountChange = (index: number, v: number) => {
    const { value } = this.props;

    const newValue: HeroMapObjectDetails = {
      ...value,
      army: value.army.map((t, i) => i === index ?
        { ...t!, count: v } :
        t,
      ),
    };

    this.props.onValueChange(newValue);
  }

  private renderAlignment(index: number, alignment: string, selectedAlignment: string) {
    const onClick = () => this.onAlignmentChange(index);

    return (
      <div
        key={index}
        className={styles.alignment}
      >
        <GameText size="large">
          {index + 1}
        </GameText>
        <GameCheckbox
          checked={selectedAlignment === alignment}
          onClick={onClick}
        />
      </div>
    );
  }

  private readonly onAlignmentChange = (index: number) => {
    const alignment = this.props.data.alignments[index];

    if (!alignment) {
      return;
    }

    const newValue: HeroMapObjectDetails = {
      ...this.props.value,
      alignment,
    };

    this.props.onValueChange(newValue);
  }

  private readonly onHeroChange = (value: number) => {
    const hero = Object.keys(this.props.data.heroes)[value];

    if (!hero) {
      return;
    }

    const newValue: HeroMapObjectDetails = {
      ...this.props.value,
      hero,
    };

    this.props.onValueChange(newValue);
  }

  private renderArtifact(index: number, artifact: string | undefined) {
    const onChange = (value: number) => this.onArtifactChange(index, value);

    return (
      <Row key={index}>
        <Col
          className={styles.detailRow}
          span={6}
        >
          <GameText size="large">
            <FormattedMessage {...messages.artifact} values={{ index: index + 1 }} />
          </GameText>
        </Col>
        <Col
          className={styles.detailColumn}
          span={4}
        >
          <GameInputNumber
            min={0}
            max={37}
            value={artifact ? Object.keys(this.props.data.items).indexOf(artifact) + 1 : 0}
            onChange={onChange}
          />
        </Col>
        <Col span={14}>
          <GameText size="large">
            <FormattedMessage {...artifact ? getArtifactNameMessage(artifact) : messages.noArtifact} />
          </GameText>
        </Col>
      </Row>
    );
  }

  private readonly onArtifactChange = (index: number, v: number) => {
    const { data, value } = this.props;

    const artifact = Object.keys(data.items)[v - 1];

    const newValue: HeroMapObjectDetails = {
      ...value,
      artifacts: [...new Array(ArtifactCount).keys()]
        .map((i) => i === index ? artifact : value.artifacts[i]),
    };

    this.props.onValueChange(newValue);
  }

  private readonly onExperienceChange = (value: number) => {
    const newValue: HeroMapObjectDetails = {
      ...this.props.value,
      experience: value,
    };

    this.props.onValueChange(newValue);
  }
}
