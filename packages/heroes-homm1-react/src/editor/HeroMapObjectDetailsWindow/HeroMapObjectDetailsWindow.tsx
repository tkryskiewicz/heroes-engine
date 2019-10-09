import { Col, Row } from "antd";
import React from "react";
import { FormattedMessage } from "react-intl";

import { Army, GameData, Troop } from "heroes-core";
import { ArtifactId, HeroMapObjectDetails } from "heroes-homm1";

import * as styles from "./HeroMapObjectDetailsWindow.module.scss";

import { GameInputNumber } from "../../base";
import { GameParagraph, GameText } from "../../core";
import { getArtifactNameMessage, getHeroNameMessage } from "../../messages";
import { AlignmentDetails } from "../AlignmentDetails";
import { ArmyDetails } from "../ArmyDetails";
import { EditorSettingsWindow, EditorSettingsWindowProps } from "../EditorSettingsWindow";
import { ValueRangePrompt } from "../ValueRangePrompt";
import { messages } from "./messages";

export interface HeroMapObjectDetailsWindowProps extends EditorSettingsWindowProps {
  readonly data: Pick<GameData, "alignments" | "creatures" | "editor" | "heroes" | "items">;
  readonly value: HeroMapObjectDetails;
  readonly onValueChange: (value: HeroMapObjectDetails) => void;
}

interface State {
  readonly creatureValueRangePromptVisible: boolean;
}

type DefaultProp =
  "onValueChange";

export class HeroMapObjectDetailsWindow extends React.Component<HeroMapObjectDetailsWindowProps, State> {
  public static readonly defaultProps: Pick<HeroMapObjectDetailsWindowProps, DefaultProp> = {
    onValueChange: () => undefined,
  };

  public readonly state: State = {
    creatureValueRangePromptVisible: false,
  };

  public render() {
    const { data, value } = this.props;

    const army = value.army.filter((t): t is Troop => t !== undefined);

    const heroes = this.getHeroes();

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
          <ArmyDetails
            creatures={this.getCreatures()}
            value={army}
            onValueChange={this.onArmyChange}
            onOpenCreatureValueRangePrompt={this.onOpenCreatureValueRangePrompt}
          />
          <AlignmentDetails
            alignments={data.alignments}
            value={value.alignment}
            onValueChange={this.onAlignmentChange}
          />
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
                max={heroes.length - 1}
                value={heroes.indexOf(value.heroId)}
                onChange={this.onHeroChange}
              />
            </Col>
            <Col span={6}>
              <GameText size="large">
                <FormattedMessage {...getHeroNameMessage(value.heroId)} />
              </GameText>
            </Col>
          </Row>
          {this.renderArtifacts()}
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
                max={data.editor.maxHeroExperience}
                value={value.experience}
                onChange={this.onExperienceChange}
              />
            </Col>
            <Col span={6} />
          </Row>
          {this.state.creatureValueRangePromptVisible && this.renderCreatureValueRangePrompt()}
        </div>
      </EditorSettingsWindow>
    );
  }

  private readonly onArmyChange = (value: Army) => {
    const newValue: HeroMapObjectDetails = {
      ...this.props.value,
      army: value,
    };

    this.props.onValueChange(newValue);
  }

  private readonly onOpenCreatureValueRangePrompt = () => {
    this.setState({
      creatureValueRangePromptVisible: true,
    });
  }

  private renderCreatureValueRangePrompt() {
    const creatures = this.getCreatures();

    return (
      <ValueRangePrompt
        visible={true}
        min={0}
        max={creatures.length - 1}
        onConfirmClick={this.onCloseCreatureValueRangePrompt}
      />
    );
  }

  private readonly onCloseCreatureValueRangePrompt = () => {
    this.setState({
      creatureValueRangePromptVisible: false,
    });
  }

  private getCreatures() {
    return Object.keys(this.props.data.creatures);
  }

  private readonly onAlignmentChange = (value?: string) => {
    const newValue: HeroMapObjectDetails = {
      ...this.props.value,
      alignment: value!,
    };

    this.props.onValueChange(newValue);
  }

  private readonly onHeroChange = (value: number) => {
    const heroes = this.getHeroes();

    const hero = heroes[value];

    if (!hero) {
      return;
    }

    const newValue: HeroMapObjectDetails = {
      ...this.props.value,
      heroId: hero,
    };

    this.props.onValueChange(newValue);
  }

  private getHeroes() {
    return Object.keys(this.props.data.heroes);
  }

  private renderArtifacts() {
    const { data, value } = this.props;

    return (
      <div>
        {[...new Array(data.editor.heroArtifactCount).keys()].map((i) => this.renderArtifact(i, value.artifacts[i]))}
      </div>
    );
  }

  private renderArtifact(index: number, artifact: string | undefined) {
    const artifacts = this.getArtifacts();

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
            max={artifacts.length}
            value={artifact ? artifacts.indexOf(artifact) + 1 : 0}
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

    const artifacts = this.getArtifacts();

    const artifact = artifacts[v - 1];

    const newValue: HeroMapObjectDetails = {
      ...value,
      artifacts: [...new Array(data.editor.heroArtifactCount).keys()]
        .map((i) => i === index ? artifact : value.artifacts[i]),
    };

    this.props.onValueChange(newValue);
  }

  private getArtifacts() {
    // TODO: extract logic
    return Object.keys(this.props.data.items)
      .filter((i) => i !== ArtifactId.Spellbook);
  }

  private readonly onExperienceChange = (value: number) => {
    const newValue: HeroMapObjectDetails = {
      ...this.props.value,
      experience: value,
    };

    this.props.onValueChange(newValue);
  }
}
