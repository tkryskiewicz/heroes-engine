import React from "react";
import { FormattedMessage } from "react-intl";

import { Army, GameData, Troop } from "heroes-core";
import { noop } from "heroes-helpers";
import { TownObjectDetails } from "heroes-homm1";

import * as styles from "./TownMapObjectDetailsWindow.module.scss";

import { GameCheckbox } from "../../base";
import { GameText } from "../../core";
import { ArmyDetails } from "../ArmyDetails";
import { EditorSettingsWindow, EditorSettingsWindowProps } from "../EditorSettingsWindow";
import { OwnerDetails } from "../OwnerDetails";
import { ValueRangePrompt } from "../ValueRangePrompt";
import { messages } from "./messages";

export interface TownMapObjectDetailsWindowProps extends EditorSettingsWindowProps {
  readonly data: Pick<GameData, "playerColors" | "creatures">;
  readonly value: TownObjectDetails;
  readonly onValueChange: (value: TownObjectDetails) => void;
}

interface State {
  readonly creatureValueRangePromptVisible: boolean;
}

type DefaultProp =
  "onValueChange";

export class TownMapObjectDetailsWindow extends React.Component<TownMapObjectDetailsWindowProps, State> {
  public static readonly defaultProps: Pick<TownMapObjectDetailsWindowProps, DefaultProp> = {
    onValueChange: noop,
  };

  public readonly state: State = {
    creatureValueRangePromptVisible: false,
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
          <div className={styles.title}>
            <GameText size="large">
              <FormattedMessage {...messages.title} />
            </GameText>
          </div>
          <div className={styles.customize}>
            <GameText size="large">
              <FormattedMessage {...messages.customize} />
            </GameText>
            {" "}
            <GameCheckbox
              checked={value.customized}
              onClick={this.onCustomizedChange}
            />
          </div>
          {value.customized && this.renderCustomizatiion()}
        </div>
      </EditorSettingsWindow>
    );
  }

  private readonly onCustomizedChange = (value: boolean) => {
    const newValue: TownObjectDetails = {
      ...this.props.value,
      customized: value,
    };

    this.props.onValueChange(newValue);
  }

  private renderCustomizatiion() {
    const { value } = this.props;

    const army = value.army
      .filter((t): t is Troop => t !== undefined);

    const creatures = this.getCreatures();

    return (
      <div>
        <ArmyDetails
          creatures={creatures}
          value={army}
          onValueChange={this.onArmyChange}
          onOpenCreatureValueRangePrompt={this.onOpenCreatureValueRangePrompt}
        />
        {this.state.creatureValueRangePromptVisible && this.renderCreatureValueRangePrompt()}
        <div>
          <OwnerDetails
            playerColors={this.props.data.playerColors}
            allowNeutral={true}
            value={value.owner}
            onValueChange={this.onOwnerChange}
          />
        </div>
        <div>
          STRUCTURES
        </div>
      </div>
    );
  }

  private readonly onArmyChange = (value: Army) => {
    const newValue: TownObjectDetails = {
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

  private readonly onOwnerChange = (value?: string) => {
    const newValue: TownObjectDetails = {
      ...this.props.value,
      owner: value,
    };

    this.props.onValueChange(newValue);
  }
}
