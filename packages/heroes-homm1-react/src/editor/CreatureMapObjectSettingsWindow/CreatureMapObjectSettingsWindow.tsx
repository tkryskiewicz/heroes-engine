import * as React from "react";
import { FormattedMessage } from "react-intl";

import { MaxRandomCreatureCount } from "heroes-homm1";

import * as styles from "./CreatureMapObjectSettingsWindow.module.scss";

import { GameInputNumber } from "../../base";
import { GameParagraph } from "../../core";
import { EditorSettingsWindow, EditorSettingsWindowProps } from "../EditorSettingsWindow";
import { messages } from "./messages";

export interface CreatureMapObjectSettingsWindowProps extends EditorSettingsWindowProps {
  readonly count: number;
  readonly onCountChange: (value: number) => void;
}

export class CreatureMapObjectSettingsWindow extends React.Component<CreatureMapObjectSettingsWindowProps> {
  public static readonly defaultProps: Pick<CreatureMapObjectSettingsWindowProps, "onCountChange"> = {
    onCountChange: () => undefined,
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
            onChange={this.props.onCountChange}
          />
        </div>
      </EditorSettingsWindow>
    );
  }
}
