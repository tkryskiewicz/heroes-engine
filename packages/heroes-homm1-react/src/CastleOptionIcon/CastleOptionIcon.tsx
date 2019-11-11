import React from "react";
import { FormattedMessage } from "react-intl";

import { noop } from "heroes-helpers";
import { isCommonStructure } from "heroes-homm1";

import * as styles from "./CastleOptionIcon.module.scss";

import { GameText } from "../core";
import { getStructureNameMessage } from "../messages";

export interface CastleOptionIconProps {
  readonly town: string;
  readonly option: string;
  readonly onMouseEnter: (option: string) => void;
  readonly onMouseLeave: (option: string) => void;
  readonly onClick: (option: string) => void;
}

type DefaultProp =
  "onMouseEnter" |
  "onMouseLeave" |
  "onClick";

export class CastleOptionIcon extends React.Component<CastleOptionIconProps> {
  public static readonly defaultProps: Pick<CastleOptionIconProps, DefaultProp> = {
    onClick: noop,
    onMouseEnter: noop,
    onMouseLeave: noop,
  };

  public render() {
    const { town, option } = this.props;

    return (
      <div
        className={styles.root}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        onClick={this.onClick}
      >
        <img src={`assets/towns/${isCommonStructure(option) ? "common" : town}/structures/${option}/icon.jpg`} />
        {this.renderName(option)}
      </div>
    );
  }

  private renderName(option: string) {
    return (
      <div className={styles.name}>
        <GameText size="small">
          <FormattedMessage {...getStructureNameMessage(option)} />
        </GameText>
      </div>
    );
  }

  private readonly onMouseEnter = () => {
    this.props.onMouseEnter(this.props.option);
  }

  private readonly onMouseLeave = () => {
    this.props.onMouseLeave(this.props.option);
  }

  private readonly onClick = () => {
    this.props.onClick(this.props.option);
  }
}
