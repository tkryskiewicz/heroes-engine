import React from "react";
import { FormattedMessage } from "react-intl";

import { GameData } from "heroes-core";
import { CreatureMapObjectDetails } from "heroes-homm1";

import * as styles from "./CreatureMapObjectDetailsWindow.module.scss";

import { GameInputNumber } from "../../base";
import { GameParagraph } from "../../core";
import { EditorSettingsWindow, EditorSettingsWindowProps } from "../EditorSettingsWindow";
import { ValueRangePrompt } from "../ValueRangePrompt";
import { messages } from "./messages";

export interface CreatureMapObjectDetailsWindowProps extends EditorSettingsWindowProps {
  readonly data: Pick<GameData, "editor">;
  readonly value: CreatureMapObjectDetails;
  readonly onValueChange: (value: number) => void;
}

interface State {
  readonly countValueRangePromptVisible: boolean;
}

type DefaultProp =
  "onValueChange";

export class CreatureMapObjectDetailsWindow extends React.Component<CreatureMapObjectDetailsWindowProps, State> {
  public static readonly defaultProps: Pick<CreatureMapObjectDetailsWindowProps, DefaultProp> = {
    onValueChange: () => undefined,
  };

  public readonly state: State = {
    countValueRangePromptVisible: false,
  };

  public render() {
    const { data } = this.props;

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
          <div className={styles.description}>
            <GameParagraph textSize="large">
              <FormattedMessage {...messages.random} />
            </GameParagraph>
            <GameParagraph textSize="large">
              <FormattedMessage {...messages.value} />
            </GameParagraph>
          </div>
          <GameInputNumber
            min={0}
            max={data.editor.maxCreatureCount}
            value={this.props.value}
            onChange={this.onValueChange}
          />
          {this.state.countValueRangePromptVisible && this.renderCountValueRangePrompt()}
        </div>
      </EditorSettingsWindow>
    );
  }

  private readonly onValueChange = (v: number) => {
    const { data } = this.props;

    let value = v;

    if (value > data.editor.maxCreatureCount) {
      this.onOpenCountValueRangePromptClick();

      value = data.editor.maxCreatureCount;
    }

    this.props.onValueChange(value);
  }

  private readonly onOpenCountValueRangePromptClick = () => {
    this.setState({
      countValueRangePromptVisible: true,
    });
  }

  private renderCountValueRangePrompt() {
    const { data } = this.props;

    return (
      <ValueRangePrompt
        visible={true}
        min={0}
        max={data.editor.maxCreatureCount}
        minIsRandom={true}
        onConfirmClick={this.onCloseCountValueRangePromptClick}
      />
    );
  }

  private readonly onCloseCountValueRangePromptClick = () => {
    this.setState({
      countValueRangePromptVisible: false,
    });
  }
}
