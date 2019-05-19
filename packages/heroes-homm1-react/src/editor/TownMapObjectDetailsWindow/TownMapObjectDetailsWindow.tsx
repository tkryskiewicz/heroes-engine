import * as React from "react";
import { FormattedMessage } from "react-intl";

import { Army, GameData, Troop } from "heroes-core";
import { TownMapObjectDetails } from "heroes-homm1";

import * as styles from "./TownMapObjectDetailsWindow.module.scss";

import { GameCheckbox } from "../../base";
import { GameText } from "../../core";
import { AlignmentDetails } from "../AlignmentDetails";
import { ArmyDetails } from "../ArmyDetails";
import { EditorSettingsWindow, EditorSettingsWindowProps } from "../EditorSettingsWindow";
import { ValueRangePrompt } from "../ValueRangePrompt";
import { messages } from "./messages";

export interface TownMapObjectDetailsWindowProps extends EditorSettingsWindowProps {
  readonly data: GameData;
  readonly value: TownMapObjectDetails;
  readonly onValueChange: (value: TownMapObjectDetails) => void;
}

interface State {
  readonly creatureValueRangePromptVisible: boolean;
}

type DefaultProp =
  "onValueChange";

export class TownMapObjectDetailsWindow extends React.Component<TownMapObjectDetailsWindowProps, State> {
  public static readonly defaultProps: Pick<TownMapObjectDetailsWindowProps, DefaultProp> = {
    onValueChange: () => undefined,
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
    const newValue: TownMapObjectDetails = {
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
          <AlignmentDetails
            alignments={this.props.data.alignments}
            allowNeutral={true}
            value={value.alignment}
            onValueChange={this.onAlignmentChange}
          />
        </div>
        <div>
          STRUCTURES
        </div>
      </div>
    );
  }

  private readonly onArmyChange = (value: Army) => {
    const newValue: TownMapObjectDetails = {
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
    const newValue: TownMapObjectDetails = {
      ...this.props.value,
      alignment: value,
    };

    this.props.onValueChange(newValue);
  }
}
