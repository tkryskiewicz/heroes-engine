import * as React from "react";

import { CastleOptionStatus } from "heroes-homm1";

import * as styles from "./CastleOption.module.scss";

import { statusImages } from "./assets";

import { CastleOptionIcon } from "../../CastleOptionIcon";

export interface CastleOptionProps {
  readonly town: string;
  readonly option: string;
  readonly status: CastleOptionStatus;
  readonly onMouseEnter: (option: string, status: CastleOptionStatus) => void;
  readonly onMouseLeave: (option: string, status: CastleOptionStatus) => void;
  readonly onClick: (option: string, status: CastleOptionStatus) => void;
}

type DefaultProp =
  "onMouseEnter" |
  "onMouseLeave" |
  "onClick";

export class CastleOption extends React.Component<CastleOptionProps> {
  public static readonly defaultProps: Pick<CastleOptionProps, DefaultProp> = {
    onClick: () => undefined,
    onMouseEnter: () => undefined,
    onMouseLeave: () => undefined,
  };

  public render() {
    return (
      <div className={styles.root}>
        <CastleOptionIcon
          town={this.props.town}
          option={this.props.option}
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
          onClick={this.onClick}
        />
        {this.renderStatusIcon(this.props.status)}
      </div>
    );
  }

  private renderStatusIcon(status: CastleOptionStatus) {
    return (
      <img
        className={styles.statusIcon}
        src={statusImages[status]}
      />
    );
  }

  private readonly onMouseEnter = () => {
    this.props.onMouseEnter(this.props.option, this.props.status);
  }

  private readonly onMouseLeave = () => {
    this.props.onMouseLeave(this.props.option, this.props.status);
  }

  private readonly onClick = () => {
    if (this.props.status !== CastleOptionStatus.Available) {
      return;
    }

    this.props.onClick(this.props.option, this.props.status);
  }
}
