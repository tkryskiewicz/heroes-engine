import * as React from "react";
import { FormattedMessage } from "react-intl";

import { isCommonStructure } from "heroes-homm1";

import * as styles from "./CastleOptionIcon.module.scss";

import { GameText } from "../core";
import { getStructureNameMessage } from "../messages";

export interface CastleOptionIconProps {
  town: string;
  option: string;
  onMouseEnter: (option: string) => void;
  onMouseLeave: (option: string) => void;
  onClick: (option: string) => void;
}

type DefaultProp =
  "onMouseEnter" |
  "onMouseLeave" |
  "onClick";

export class CastleOptionIcon extends React.Component<CastleOptionIconProps> {
  public static defaultProps: Pick<CastleOptionIconProps, DefaultProp> = {
    onClick: () => undefined,
    onMouseEnter: () => undefined,
    onMouseLeave: () => undefined,
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

  private onMouseEnter = () => {
    this.props.onMouseEnter(this.props.option);
  }

  private onMouseLeave = () => {
    this.props.onMouseLeave(this.props.option);
  }

  private onClick = () => {
    this.props.onClick(this.props.option);
  }
}
