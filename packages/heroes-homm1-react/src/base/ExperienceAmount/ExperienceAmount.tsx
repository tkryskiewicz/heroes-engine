import * as React from "react";
import { FormattedNumber } from "react-intl";

import * as styles from "./ExperienceAmount.module.scss";

import { GameText } from "../../core";
import { ExperienceIcon } from "../ExperienceIcon";

export interface ExperienceAmountProps {
  readonly amount: number;
}

export class ExperienceAmount extends React.Component<ExperienceAmountProps> {
  public render() {
    return (
      <div className={styles.root}>
        <ExperienceIcon
          size="large"
        />
        <div>
          <GameText size="normal">
            <FormattedNumber value={this.props.amount} />
          </GameText>
        </div>
      </div>
    );
  }
}
