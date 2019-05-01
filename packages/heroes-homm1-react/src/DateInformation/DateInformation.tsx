import * as React from "react";
import { FormattedMessage } from "react-intl";

import * as styles from "./DateInformation.module.scss";

import { moonImages, SunImage } from "./assets";

import { GameText } from "../core";
import { dateMessages } from "../messages";
import { StatusWindow } from "../StatusWindow";

export interface DateInformationProps {
  readonly month: number;
  readonly week: number;
  readonly day: number;
}

export class DateInformation extends React.Component<DateInformationProps> {
  public render() {
    return (
      <StatusWindow>
        <div className={styles.root}>
          {this.renderImage(this.props.week, this.props.day)}
          <div className={styles.month}>
            <GameText size="normal">
              <FormattedMessage {...dateMessages.month} />: {this.props.month}
            </GameText>
          </div>
          <div className={styles.week}>
            <GameText size="normal">
              <FormattedMessage {...dateMessages.week} />: {this.props.week}
            </GameText>
          </div>
          <div className={styles.day}>
            <GameText size="large">
              <FormattedMessage {...dateMessages.day} />: {this.props.day}
            </GameText>
          </div>
        </div>
      </StatusWindow>
    );
  }

  private renderImage(week: number, day: number) {
    return (
      <img
        src={day !== 1 ? SunImage : moonImages[week - 1]}
      />
    );
  }
}
