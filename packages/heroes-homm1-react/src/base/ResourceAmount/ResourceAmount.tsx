import Classnames from "classnames";
import React from "react";
import { FormattedNumber } from "react-intl";

import * as styles from "./ResourceAmount.module.scss";

import { GameText, GameTextSize } from "../../core";
import { ResourceIcon } from "../ResourceIcon";

export interface ResourceAmountProps {
  readonly className?: string;
  readonly textSize: GameTextSize;
  readonly resource: string;
  readonly amount: number;
}

export class ResourceAmount extends React.Component<ResourceAmountProps> {
  public static readonly defaultProps: Pick<ResourceAmountProps, "textSize"> = {
    textSize: "normal",
  };

  public render() {
    return (
      <div className={Classnames(styles.root, this.props.className)}>
        <ResourceIcon
          resource={this.props.resource}
        />
        <br/>
        <GameText size={this.props.textSize}>
          <FormattedNumber value={this.props.amount} />
        </GameText>
      </div>
    );
  }
}
