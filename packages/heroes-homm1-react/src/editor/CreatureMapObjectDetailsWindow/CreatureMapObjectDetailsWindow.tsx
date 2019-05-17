import * as React from "react";
import { FormattedMessage } from "react-intl";

import { MaxRandomCreatureCount } from "heroes-homm1";

import * as styles from "./CreatureMapObjectDetailsWindow.module.scss";

import { GameInputNumber } from "../../base";
import { GameParagraph } from "../../core";
import { EditorSettingsWindow, EditorSettingsWindowProps } from "../EditorSettingsWindow";
import { ValueRangePrompt } from "../ValueRangePrompt";
import { messages } from "./messages";

export interface CreatureMapObjectDetailsWindowProps extends EditorSettingsWindowProps {
  readonly count: number;
  readonly onCountChange: (value: number) => void;
  readonly countValueRangePromptVisible: boolean;
  readonly onOpenCountValueRangePromptClick: () => void;
  readonly onCloseCountValueRangePromptClick: () => void;
}

type DefaultProp =
  "onCountChange" |
  "countValueRangePromptVisible" |
  "onOpenCountValueRangePromptClick" |
  "onCloseCountValueRangePromptClick";

export class CreatureMapObjectDetailsWindow extends React.Component<CreatureMapObjectDetailsWindowProps> {
  public static readonly defaultProps: Pick<CreatureMapObjectDetailsWindowProps, DefaultProp> = {
    countValueRangePromptVisible: false,
    onCloseCountValueRangePromptClick: () => undefined,
    onCountChange: () => undefined,
    onOpenCountValueRangePromptClick: () => undefined,
  };

  public render() {
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
            max={MaxRandomCreatureCount}
            value={this.props.count}
            onChange={this.onCountChange}
          />
          {this.props.countValueRangePromptVisible && this.renderCountValueRangePrompt()}
        </div>
      </EditorSettingsWindow>
    );
  }

  private readonly onCountChange = (v: number) => {
    let value = v;

    if (value > MaxRandomCreatureCount) {
      this.props.onOpenCountValueRangePromptClick();

      value = MaxRandomCreatureCount;
    }

    this.props.onCountChange(value);
  }

  private renderCountValueRangePrompt() {
    return (
      <ValueRangePrompt
        visible={true}
        min={0}
        max={MaxRandomCreatureCount}
        minIsRandom={true}
        onConfirmClick={this.props.onCloseCountValueRangePromptClick}
      />
    );
  }
}
